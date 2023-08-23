# author: ALEXIS CARBILLET

# import librairies
import tkinter as tk
import cv2
from PIL import Image, ImageTk
import tkinter.ttk

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from scipy import stats
from ast import literal_eval
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.metrics.pairwise import linear_kernel, cosine_similarity
from nltk.stem.snowball import SnowballStemmer
from nltk.stem.wordnet import WordNetLemmatizer
from nltk.corpus import wordnet
from surprise import Reader, Dataset, SVD 
from surprise.model_selection import cross_validate

import warnings; warnings.simplefilter('ignore')


### recommendation part 

md = pd.read_csv('movies_metadata.csv', low_memory=False)
md['genres'] = md['genres'].fillna('[]').apply(literal_eval).apply(lambda x: [i['name'] for i in x] if isinstance(x, list) else [])

vote_counts = md[md['vote_count'].notnull()]['vote_count'].astype('int')
vote_averages = md[md['vote_average'].notnull()]['vote_average'].astype('int')
C = vote_averages.mean()
m = vote_counts.quantile(0.85)
md['year'] = pd.to_datetime(md['release_date'], errors='coerce').apply(lambda x: str(x).split('-')[0] if x != np.nan else np.nan)

def weighted_rating(x):
    v = x['vote_count']
    R = x['vote_average']
    return (v/(v+m) * R) + (m/(m+v) * C)

s = md.apply(lambda x: pd.Series(x['genres']),axis=1).stack().reset_index(level=1, drop=True)
s.name = 'genre'
gen_md = md.drop('genres', axis=1).join(s)

genres=["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Foreign", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"]

### for categories 
def build_chart(genre, percentile=0.85): # for categories
    df = gen_md[gen_md['genre'] == genre]
    vote_counts = df[df['vote_count'].notnull()]['vote_count'].astype('int')
    vote_averages = df[df['vote_average'].notnull()]['vote_average'].astype('int')
    C = vote_averages.mean()
    m = vote_counts.quantile(percentile)
    
    qualified = df[(df['vote_count'] >= m) & (df['vote_count'].notnull()) & (df['vote_average'].notnull())][['title', 'year', 'vote_count', 'vote_average', 'popularity','id']]
    qualified['vote_count'] = qualified['vote_count'].astype('int')
    qualified['vote_average'] = qualified['vote_average'].astype('int')
    
    qualified['wr'] = qualified.apply(lambda x: (x['vote_count']/(x['vote_count']+m) * x['vote_average']) + (m/(m+x['vote_count']) * C), axis=1)
    qualified = qualified.sort_values('wr', ascending=False).head(250)
    
    return qualified
    

### research by metadata
links_small = pd.read_csv('links_small.csv')
links_small = links_small[links_small['tmdbId'].notnull()]['tmdbId'].astype('int')

md = md.drop([19730, 29503, 35587])

md['id'] = md['id'].astype('int')
smd = md[md['id'].isin(links_small)]
smd['tagline'] = smd['tagline'].fillna('')
smd['description'] = smd['overview'] + smd['tagline']
smd['description'] = smd['description'].fillna('')

tf = TfidfVectorizer(analyzer='word',ngram_range=(1, 2),min_df=0, stop_words='english')
tfidf_matrix = tf.fit_transform(smd['description'])

cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)
smd = smd.reset_index()
titles = smd['title']
indices = pd.Series(smd.index, index=smd['title'])

credits = pd.read_csv('credits.csv')
keywords = pd.read_csv('keywords.csv')

keywords['id'] = keywords['id'].astype('int')
credits['id'] = credits['id'].astype('int')
md['id'] = md['id'].astype('int')

md = md.merge(credits, on='id')
md = md.merge(keywords, on='id')

smd = md[md['id'].isin(links_small)]

smd['cast'] = smd['cast'].apply(literal_eval)
smd['crew'] = smd['crew'].apply(literal_eval)
smd['keywords'] = smd['keywords'].apply(literal_eval)
smd['cast_size'] = smd['cast'].apply(lambda x: len(x))
smd['crew_size'] = smd['crew'].apply(lambda x: len(x))

def get_director(x):
    for i in x:
        if i['job'] == 'Director':
            return i['name']
    return np.nan

smd['director'] = smd['crew'].apply(get_director)

smd['cast'] = smd['cast'].apply(lambda x: [i['name'] for i in x] if isinstance(x, list) else [])
smd['cast'] = smd['cast'].apply(lambda x: x[:3] if len(x) >=3 else x)

smd['keywords'] = smd['keywords'].apply(lambda x: [i['name'] for i in x] if isinstance(x, list) else [])



smd['cast'] = smd['cast'].apply(lambda x: [str.lower(i.replace(" ", "")) for i in x])

smd['director'] = smd['director'].astype('str').apply(lambda x: str.lower(x.replace(" ", "")))
smd['director'] = smd['director'].apply(lambda x: [x,x, x])

s = smd.apply(lambda x: pd.Series(x['keywords']),axis=1).stack().reset_index(level=1, drop=True)
s.name = 'keyword'

s = s.value_counts()

s = s[s > 1]

stemmer = SnowballStemmer('english')
def filter_keywords(x):
    words = []
    for i in x:
        if i in s:
            words.append(i)
    return words

smd['keywords'] = smd['keywords'].apply(filter_keywords)
smd['keywords'] = smd['keywords'].apply(lambda x: [stemmer.stem(i) for i in x])
smd['keywords'] = smd['keywords'].apply(lambda x: [str.lower(i.replace(" ", "")) for i in x])
# our metedata are the keywords, the casting, the director and the genres of the movie
smd['soup'] = smd['keywords'] + smd['cast'] + smd['director'] + smd['genres']
smd['soup'] = smd['soup'].apply(lambda x: ' '.join(x))

count = CountVectorizer(analyzer='word',ngram_range=(1, 2),min_df=0, stop_words='english')
count_matrix = count.fit_transform(smd['soup'])

cosine_sim = cosine_similarity(count_matrix, count_matrix)

smd = smd.reset_index()
titles = smd['title']
indices = pd.Series(smd.index, index=smd['title'])


# popularity model
def improved_recommendations(title): 
    idx = indices[title]
    sim_scores = list(enumerate(cosine_sim[idx])) # calculate similarity between the last movie watched and the others
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:50] # took the top 50 scores
    movie_indices = [i[0] for i in sim_scores]
    
    movies = smd.iloc[movie_indices][['title', 'genres', 'vote_count', 'vote_average', 'year']]
    vote_counts = movies[movies['vote_count'].notnull()]['vote_count'].astype('int')
    vote_averages = movies[movies['vote_average'].notnull()]['vote_average'].astype('int')
    C = vote_averages.mean()
    m = vote_counts.quantile(0.60)
    qualified = movies[(movies['vote_count'] >= m) & (movies['vote_count'].notnull()) & (movies['vote_average'].notnull())]
    qualified['vote_count'] = qualified['vote_count'].astype('int')
    qualified['vote_average'] = qualified['vote_average'].astype('int')
    qualified['wr'] = qualified.apply(weighted_rating, axis=1)
    qualified = qualified.sort_values('wr', ascending=False)
    
    # part with categories
    gen_md=pd.DataFrame(index=range(5),columns=qualified.columns.values)
    var=[]
    i=0
    
    if(check1.getvar(str(check1.cget("variable")))=='1'):
        var.append(str(check1.cget("text")))
    if(check2.getvar(str(check2.cget("variable")))=='1'):
        var.append(str(check2.cget("text")))
    if(check3.getvar(str(check3.cget("variable")))=='1'):
        var.append(str(check3.cget("text")))
    if(check4.getvar(str(check4.cget("variable")))=='1'):
        var.append(str(check4.cget("text")))
    if(check5.getvar(str(check5.cget("variable")))=='1'):
        var.append(str(check5.cget("text")))
    if(check6.getvar(str(check6.cget("variable")))=='1'):
        var.append(str(check6.cget("text")))
    if(check7.getvar(str(check7.cget("variable")))=='1'):
        var.append(str(check7.cget("text")))
    if(check8.getvar(str(check8.cget("variable")))=='1'):
        var.append(str(check8.cget("text")))
    if(check9.getvar(str(check9.cget("variable")))=='1'):
        var.append(str(check9.cget("text")))
    if(check10.getvar(str(check10.cget("variable")))=='1'):
        var.append(str(check10.cget("text")))
    if(check11.getvar(str(check11.cget("variable")))=='1'):
        var.append(str(check11.cget("text")))
    if(check12.getvar(str(check12.cget("variable")))=='1'):
        var.append(str(check12.cget("text")))
    if(check13.getvar(str(check13.cget("variable")))=='1'):
        var.append(str(check13.cget("text")))
    if(check14.getvar(str(check14.cget("variable")))=='1'):
        var.append(str(check14.cget("text")))
    if(check15.getvar(str(check15.cget("variable")))=='1'):
        var.append(str(check15.cget("text")))
    if(check16.getvar(str(check16.cget("variable")))=='1'):
        var.append(str(check16.cget("text")))
    if(check17.getvar(str(check17.cget("variable")))=='1'):
        var.append(str(check17.cget("text")))
    if(check18.getvar(str(check18.cget("variable")))=='1'):
        var.append(str(check18.cget("text")))
    if(check19.getvar(str(check19.cget("variable")))=='1'):
        var.append(str(check19.cget("text")))
    if(check20.getvar(str(check20.cget("variable")))=='1'):
        var.append(str(check20.cget("text")))
    if(len(var)>0):
        print(var)
        for j in var:
            q=0
            for k in qualified['genres'].tolist(): # k is a list
                for w in k:
                    if w==str(j):
                        gen_md.iloc[i]=qualified.iloc[q]
                        i+=1
                q+=1
                if i==5: # when we get 5 recommendations we stop this processus
                    return gen_md
 # what it there isn't 5 movies but just one or two? Which others will i recommend?
        j=0
        while i<5: # if we don't have enough movies in the genres selected, then the recommendation list is completed with other movies that are recommended when the genres are not chosen
            t=0
            for k in range(i+1): # let's check if this movie is already recommended
                if gen_md.iloc[k]['title'] == qualified.iloc[j]['title']:
                    t+=1 # movie already recommended once
            if t==0: # if it is a new movie, then it is recommended
                gen_md.iloc[i]=qualified.iloc[j]
                i+=1
            j+=1
        return gen_md # mix between movies from the genres asked and from the top movies
    return qualified.head(5) # if no categories are selected, we return the top 5 movies
        

def convert_int(x):
    try:
        return int(x)
    except:
        return np.nan

id_map = pd.read_csv('links_small.csv')[['movieId', 'tmdbId']]
id_map['tmdbId'] = id_map['tmdbId'].apply(convert_int)
id_map.columns = ['movieId', 'id']
id_map = id_map.merge(smd[['title', 'id']], on='id').set_index('title')
svd = SVD()
reader = Reader()
ratings = pd.read_csv('ratings_small.csv')
data = Dataset.load_from_df(ratings[['userId', 'movieId', 'rating']], reader)
trainset = data.build_full_trainset()
svd.fit(trainset)
indices_map = id_map.set_index('id')

# recommender system taking into account the userId, the last movie watched and the genres selected
def hybrid(userId, title):
    idx = indices[title]
    tmdbId = id_map.loc[title]['id']
    movie_id = id_map.loc[title]['movieId']
    
    sim_scores = list(enumerate(cosine_sim[int(idx)]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:26]
    movie_indices = [i[0] for i in sim_scores]
    
    movies = smd.iloc[movie_indices][['title', 'genres', 'vote_count', 'vote_average', 'year', 'id']]
    movies['est'] = movies['id'].apply(lambda x: svd.predict(userId, indices_map.loc[x]['movieId']).est)
    movies = movies.sort_values('est', ascending=False)
    
    # part with categories
    gen_md=pd.DataFrame(index=range(5),columns=movies.columns.values)
    var=[]
    i=0
    
    if(check1.getvar(str(check1.cget("variable")))=='1'):
        var.append(str(check1.cget("text")))
    if(check2.getvar(str(check2.cget("variable")))=='1'):
        var.append(str(check2.cget("text")))
    if(check3.getvar(str(check3.cget("variable")))=='1'):
        var.append(str(check3.cget("text")))
    if(check4.getvar(str(check4.cget("variable")))=='1'):
        var.append(str(check4.cget("text")))
    if(check5.getvar(str(check5.cget("variable")))=='1'):
        var.append(str(check5.cget("text")))
    if(check6.getvar(str(check6.cget("variable")))=='1'):
        var.append(str(check6.cget("text")))
    if(check7.getvar(str(check7.cget("variable")))=='1'):
        var.append(str(check7.cget("text")))
    if(check8.getvar(str(check8.cget("variable")))=='1'):
        var.append(str(check8.cget("text")))
    if(check9.getvar(str(check9.cget("variable")))=='1'):
        var.append(str(check9.cget("text")))
    if(check10.getvar(str(check10.cget("variable")))=='1'):
        var.append(str(check10.cget("text")))
    if(check11.getvar(str(check11.cget("variable")))=='1'):
        var.append(str(check11.cget("text")))
    if(check12.getvar(str(check12.cget("variable")))=='1'):
        var.append(str(check12.cget("text")))
    if(check13.getvar(str(check13.cget("variable")))=='1'):
        var.append(str(check13.cget("text")))
    if(check14.getvar(str(check14.cget("variable")))=='1'):
        var.append(str(check14.cget("text")))
    if(check15.getvar(str(check15.cget("variable")))=='1'):
        var.append(str(check15.cget("text")))
    if(check16.getvar(str(check16.cget("variable")))=='1'):
        var.append(str(check16.cget("text")))
    if(check17.getvar(str(check17.cget("variable")))=='1'):
        var.append(str(check17.cget("text")))
    if(check18.getvar(str(check18.cget("variable")))=='1'):
        var.append(str(check18.cget("text")))
    if(check19.getvar(str(check19.cget("variable")))=='1'):
        var.append(str(check19.cget("text")))
    if(check20.getvar(str(check20.cget("variable")))=='1'):
        var.append(str(check20.cget("text")))
    if(len(var)>0):
        print(var)
        for j in var:
            q=0
            for k in movies['genres'].tolist(): # k is a list
                for w in k:
                    if w==str(j):
                        gen_md.iloc[i]=movies.iloc[q]
                        i+=1
                        print(gen_md)
                q+=1
                if i==5:
                    print(gen_md)
                    return gen_md
 # what it there isn't 5 movies but just one or two? Which others will i recommend?
        j=0
        while i<5: # if we don't have enough movies in the genres selected to recommend, then the recommendation list is completed with other movies that are recommented when the genres are not chosen
            t=0
            for k in range(i+1): # let's check if this movie is already recommended
                if gen_md.iloc[k]['title'] == movies.iloc[j]['title']:
                    t+=1 # movie already recommended once
            if t==0: # if it is a new movie, then it is recommended
                gen_md.iloc[i]=movies.iloc[j]
                i+=1
            j+=1
        return gen_md
    
    
    return movies.head(5)

## interface part
def getImage(a): # get the images from the folder pic. They have been download previously, using the script scrap_images_from_url.py (can tkes hours because of the large amount of data)
        for i in a:
            if(i=="/" or i=="?" or i=="!" or i=="."or i=="," or i==";"  or i==":" or i=="*" or i=="+" or i=='"' or i=="'"): # replace special characters
                a = list(a)
                a[a.index(i)]="-"
                a="".join(a)
        return 'pic/'+a+'.jpg'
        
master = tk.Tk()
master.title("Movie Recommender System")     # Add a title
pad=70
master.geometry("{0}x{1}+0+0".format(master.winfo_screenwidth()-pad, master.winfo_screenheight()-pad))
master.resizable(0, 0) # Don't allow resizing in the x or y direction
bar=tkinter.ttk.Separator(master, orient='vertical')
bar.grid(column=6, row=0, rowspan=26, sticky='ns')


## image part
im = Image.open('img/logo/M.png')
ph = ImageTk.PhotoImage(im.resize((100,45)), master=master)
img = tk.Label(master, image=ph)
img.image=ph  #need to keep the reference of your image to avoid garbage collection
img.grid(row=0,column=0) # columnspan: number of columns used

## title part
title=tk.Label(master,text="Movie Recommender System", font="none 24 bold")    
title.grid(row=0, column=1, sticky=tk.W, columnspan=5)

## text part
tk.Label(master, 
         text="The last movie you have seen:").grid(row=1)
tk.Label(master, 
         text="User id (if you have one):").grid(row=2)

e1 = tk.Entry(master)
e2 = tk.Entry(master)

e1.grid(row=1, column=1)
e2.grid(row=2, column=1)

## checkboxes                   
# there are 20 genres
tk.Label(master,  text="Categories:").grid(row=3, column=0, sticky=tk.W)                                    
var1 = tk.IntVar(master)
check1=tk.Checkbutton(master, text="Action", variable=var1)
check1.grid(row=3, column=1, sticky=tk.W)
var2 = tk.IntVar()
check2=tk.Checkbutton(master, text="Adventure", variable=var2)
check2.grid(row=3, column=2, sticky=tk.W)
var3 = tk.IntVar()
check3=tk.Checkbutton(master, text="Animation", variable=var3)
check3.grid(row=3, column=3, sticky=tk.W)
var4 = tk.IntVar()
check4=tk.Checkbutton(master, text="Comedy", variable=var4)
check4.grid(row=3, column=4, sticky=tk.W)
var5 = tk.IntVar()
check5=tk.Checkbutton(master, text="Crime", variable=var5)
check5.grid(row=3, column=5, sticky=tk.W)
var6 = tk.IntVar()
check6=tk.Checkbutton(master, text="Documentary", variable=var6)
check6.grid(row=4, column=1, sticky=tk.W)
var7 = tk.IntVar()
check7=tk.Checkbutton(master, text="Drama", variable=var7)
check7.grid(row=4, column=2, sticky=tk.W)
var8 = tk.IntVar()
check8=tk.Checkbutton(master, text="Family", variable=var8)
check8.grid(row=4, column=3, sticky=tk.W)
var9 = tk.IntVar()
check9=tk.Checkbutton(master, text="Fantasy", variable=var9)
check9.grid(row=4, column=4, sticky=tk.W)
var10 = tk.IntVar()
check10=tk.Checkbutton(master, text="Foreign", variable=var10)
check10.grid(row=4, column=5, sticky=tk.W)
var11 = tk.IntVar()
check11=tk.Checkbutton(master, text="History", variable=var11)
check11.grid(row=5, column=1, sticky=tk.W)
var12 = tk.IntVar()
check12=tk.Checkbutton(master, text="Horror", variable=var12)
check12.grid(row=5, column=2, sticky=tk.W)
var13 = tk.IntVar()
check13=tk.Checkbutton(master, text="Music", variable=var13)
check13.grid(row=5, column=3, sticky=tk.W)
var14 = tk.IntVar()
check14=tk.Checkbutton(master, text="Mystery", variable=var14)
check14.grid(row=5, column=4, sticky=tk.W)
var15 = tk.IntVar()
check15=tk.Checkbutton(master, text="Romance", variable=var15)
check15.grid(row=5, column=5, sticky=tk.W)
var16 = tk.IntVar()
check16=tk.Checkbutton(master, text="Science Fiction", variable=var16)
check16.grid(row=6, column=1, sticky=tk.W)
var17 = tk.IntVar()
check17=tk.Checkbutton(master, text="TV Movie", variable=var17)
check17.grid(row=6, column=2, sticky=tk.W)
var18 = tk.IntVar()
check18=tk.Checkbutton(master, text="Thriller", variable=var18)
check18.grid(row=6, column=3, sticky=tk.W)
var19 = tk.IntVar()
check19=tk.Checkbutton(master, text="War", variable=var19)
check19.grid(row=6, column=4, sticky=tk.W)
var20 = tk.IntVar()
check20=tk.Checkbutton(master, text="Western", variable=var20)
check20.grid(row=6, column=5, sticky=tk.W)
        
def controler(): # here is our controler which create the link between the GUI and the recommenders
    u=e2.get() # user id
    v=e1.get() # last film watched
    if(u=="" and v!=""): # if there is a last movie watched but without id user
        x=improved_recommendations("%s" % (v))

    if(u!="" and v!=""): # if there is are last movie watch and a id user
        x=hybrid(int(u),v)

    if(u!="" and v==""): # if there is an id user
        movies = smd[['title', 'genres', 'vote_count', 'vote_average', 'year', 'id']]
        liste=[]
        for i in range(len(movies)):
            indice=indices_map.loc[movies['id'].iloc[i]]['movieId']
            if isinstance(indice, pd.Series):
                liste.append(svd.predict(1, indice.unique()[0]).est)
            else:
                liste.append(svd.predict(1, indice).est)
        movies['est'] = pd.Series(liste, index=movies.index)
        movies = movies.sort_values('est', ascending=False)
        x=movies.head(5)

    print(x)
    if(u=="" and v==""): # if no title nor user id: maybe categories selected
        var=[]
        if(check1.getvar(str(check1.cget("variable")))=='1'):
            var.append(str(check1.cget("text")))
        if(check2.getvar(str(check2.cget("variable")))=='1'):
            var.append(str(check2.cget("text")))
        if(check3.getvar(str(check3.cget("variable")))=='1'):
            var.append(str(check3.cget("text")))
        if(check4.getvar(str(check4.cget("variable")))=='1'):
            var.append(str(check4.cget("text")))
        if(check5.getvar(str(check5.cget("variable")))=='1'):
            var.append(str(check5.cget("text")))
        if(check6.getvar(str(check6.cget("variable")))=='1'):
            var.append(str(check6.cget("text")))
        if(check7.getvar(str(check7.cget("variable")))=='1'):
            var.append(str(check7.cget("text")))
        if(check8.getvar(str(check8.cget("variable")))=='1'):
            var.append(str(check8.cget("text")))
        if(check9.getvar(str(check9.cget("variable")))=='1'):
            var.append(str(check9.cget("text")))
        if(check10.getvar(str(check10.cget("variable")))=='1'):
            var.append(str(check10.cget("text")))
        if(check11.getvar(str(check11.cget("variable")))=='1'):
            var.append(str(check11.cget("text")))
        if(check12.getvar(str(check12.cget("variable")))=='1'):
            var.append(str(check12.cget("text")))
        if(check13.getvar(str(check13.cget("variable")))=='1'):
            var.append(str(check13.cget("text")))
        if(check14.getvar(str(check14.cget("variable")))=='1'):
            var.append(str(check14.cget("text")))
        if(check15.getvar(str(check15.cget("variable")))=='1'):
            var.append(str(check15.cget("text")))
        if(check16.getvar(str(check16.cget("variable")))=='1'):
            var.append(str(check16.cget("text")))
        if(check17.getvar(str(check17.cget("variable")))=='1'):
            var.append(str(check17.cget("text")))
        if(check18.getvar(str(check18.cget("variable")))=='1'):
            var.append(str(check18.cget("text")))
        if(check19.getvar(str(check19.cget("variable")))=='1'):
            var.append(str(check19.cget("text")))
        if(check20.getvar(str(check20.cget("variable")))=='1'):
            var.append(str(check20.cget("text")))
        if len(var)>0:
            x=build_chart(var[0], percentile=0.85).head(5)
        else:
            x=smd[(smd['vote_count'] >= m) & (smd['vote_count'].notnull()) & (smd['vote_average'].notnull())][-5:] # recommend the 5 movies most popular
        
    # first recommendation
    y=x.iloc[0]['title']
    titre1Text=tk.Label(master,text=y)    
    titre1Text.grid(row=10, column=2, sticky=tk.W)
    d1=str(md.iloc[md.index[md['title'] == y]]['overview'].tolist())
    d1=d1.replace("\\", "")
    d1=d1.rstrip("]'")
    d1=d1.lstrip("'[")
    des1Text=tk.Text(master, height=3, width=50)    
    des1Text.insert(tk.END,d1)
    des1Text.config(background='#f0f0ed')
    des1Text.grid(row=12, column=2, rowspan=3, columnspan=3)
    scrollbar1 = tk.Scrollbar(master,command=des1Text.yview)
    scrollbar1.grid(row=13, column=5)
    des1Text['yscrollcommand'] = scrollbar1.set
    date1Text=tk.Label(master,text=x.iloc[0]['year'])    
    date1Text.grid(row=11, column=2, sticky=tk.W)
    rate1Text=tk.Label(master,text=x.iloc[0]['vote_average'])    
    rate1Text.grid(row=15, column=2, sticky=tk.W)
    c1=str(md.iloc[md.index[md['title'] == y]]['genres'].tolist())
    c1=c1.rstrip("]")
    c1=c1.lstrip("[")
    cat1Text=tk.Label(master,text=c1)    
    cat1Text.grid(row=16, column=2, columnspan=4, sticky=tk.W)
    im1 = Image.open(getImage(y))
    ph = ImageTk.PhotoImage(im1.resize((120,180)), master=master)
    img1 = tk.Label(master, image=ph)
    img1.image=ph  # need to keep the reference of your image to avoid garbage collection
    img1.grid(row=10,column=0, rowspan=7) 

    # second recommendation
    y=x.iloc[1]['title']
    titre2=tk.Label(master,text=y)    
    titre2.grid(row=18, column=2, sticky=tk.W)
    date2Text=tk.Label(master,text=x.iloc[1]['year'])    
    date2Text.grid(row=19, column=2, sticky=tk.W)
    d2=str(md.iloc[md.index[md['title'] == y]]['overview'].tolist())
    d2=d2.replace("\\", "")
    d2=d2.rstrip("]'")
    d2=d2.lstrip("'[")
    des2Text=tk.Text(master, height=3, width=50)   
    des2Text.insert(tk.END,d2)
    des2Text.config(background='#f0f0ed')
    des2Text.grid(row=20, column=2, sticky=tk.W, rowspan=2, columnspan=3)
    scrollbar2 = tk.Scrollbar(master,command=des2Text.yview)
    scrollbar2.grid(row=20, column=5)
    des2Text['yscrollcommand'] = scrollbar2.set
    rate2Text=tk.Label(master,text=x.iloc[1]['vote_average'])    
    rate2Text.grid(row=22, column=2, sticky=tk.W)
    c2=str(md.iloc[md.index[md['title'] == y]]['genres'].tolist())
    c2=c2.rstrip("]")
    c2=c2.lstrip("[")
    cat2Text=tk.Label(master,text=c2)    
    cat2Text.grid(row=23, column=2, columnspan=4, sticky=tk.W)
    im2 = Image.open(getImage(y))
    ph = ImageTk.PhotoImage(im2.resize((120,180)), master=master)
    img2 = tk.Label(master, image=ph)
    img2.image=ph  # need to keep the reference of your image to avoid garbage collection
    img2.grid(row=18,column=0, rowspan=7)

    # third recommendation
    y=x.iloc[2]['title']
    titre3Text=tk.Label(master,text=y)    
    titre3Text.grid(row=1, column=10, sticky=tk.W)
    date3Text=tk.Label(master,text=x.iloc[2]['year'])    
    date3Text.grid(row=2, column=10, sticky=tk.W)
    d3=str(md.iloc[md.index[md['title'] == y]]['overview'].tolist())
    d3=d3.replace("\\", "")
    d3=d3.rstrip("]'")
    d3=d3.lstrip("'[")
    des3Text=tk.Text(master, height=3, width=52)   
    des3Text.insert(tk.END,d3)
    des3Text.config(background='#f0f0ed')
    des3Text.grid(row=3, column=10, sticky=tk.W, rowspan=2)
    scrollbar3 = tk.Scrollbar(master,command=des3Text.yview)
    scrollbar3.grid(row=4, column=13)
    des3Text['yscrollcommand'] = scrollbar3.set
    rate3Text=tk.Label(master,text=x.iloc[2]['vote_average'])    
    rate3Text.grid(row=6, column=10, sticky=tk.W)
    c3=str(md.iloc[md.index[md['title'] == y]]['genres'].tolist())
    c3=c3.rstrip("]")
    c3=c3.lstrip("[")
    cat3Text=tk.Label(master,text=c3)    
    cat3Text.grid(row=7, column=10, sticky=tk.W)
    im3 = Image.open(getImage(y))
    ph = ImageTk.PhotoImage(im3.resize((120,180)), master=master)
    img3 = tk.Label(master, image=ph)
    img3.image=ph  # need to keep the reference of your image to avoid garbage collection
    img3.grid(row=1,column=7, rowspan=7)
    
    # fourth recommendation
    y=x.iloc[3]['title']
    titre4Text=tk.Label(master,text=y)    
    titre4Text.grid(row=9, column=10, sticky=tk.W)
    date4Text=tk.Label(master,text=x.iloc[3]['year'])    
    date4Text.grid(row=10, column=10, sticky=tk.W)
    d4=str(md.iloc[md.index[md['title'] == y]]['overview'].tolist())
    d4=d4.replace("\\", "")
    d4=d4.rstrip("]'")
    d4=d4.lstrip("'[")
    des4Text=tk.Text(master, height=3, width=52)    
    des4Text.insert(tk.END,d4)
    des4Text.config(background='#f0f0ed')
    des4Text.grid(row=11, column=10, sticky=tk.W, rowspan=3)
    scrollbar4 = tk.Scrollbar(master,command=des4Text.yview)
    scrollbar4.grid(row=12, column=13)
    des4Text['yscrollcommand'] = scrollbar4.set
    rate4Text=tk.Label(master,text=x.iloc[3]['vote_average'])    
    rate4Text.grid(row=14, column=10, sticky=tk.W)
    c4=str(md.iloc[md.index[md['title'] == y]]['genres'].tolist())
    c4=c4.rstrip("]")
    c4=c4.lstrip("[")
    cat4Text=tk.Label(master,text=c4)    
    cat4Text.grid(row=15, column=10, sticky=tk.W)
    im4 = Image.open(getImage(y))
    ph = ImageTk.PhotoImage(im4.resize((120,180)), master=master)
    img4 = tk.Label(master, image=ph)
    img4.image=ph  # need to keep the reference of your image to avoid garbage collection
    img4.grid(row=9,column=7, rowspan=7)
    
    # fifth recommendation
    y=x.iloc[4]['title']
    titre5Text=tk.Label(master,text=y)    
    titre5Text.grid(row=17, column=10, sticky=tk.W)
    date5Text=tk.Label(master,text=x.iloc[4]['year'])    
    date5Text.grid(row=18, column=10, sticky=tk.W)
    d5=str(md.iloc[md.index[md['title'] == y]]['overview'].tolist())
    d5=d5.replace("\\", "")
    d5=d5.rstrip("]'")
    d5=d5.lstrip("'[")
    des5Text=tk.Text(master, height=3, width=52)  
    des5Text.insert(tk.END,d5)
    des5Text.config(background='#f0f0ed')
    des5Text.grid(row=19, column=10, sticky=tk.W, rowspan=3)
    scrollbar5 = tk.Scrollbar(master,command=des5Text.yview)
    scrollbar5.grid(row=20, column=13)
    des5Text['yscrollcommand'] = scrollbar5.set
    rate5Text=tk.Label(master,text=x.iloc[4]['vote_average'])    
    rate5Text.grid(row=22, column=10, sticky=tk.W)
    c5=str(md.iloc[md.index[md['title'] == y]]['genres'].tolist())
    c5=c5.rstrip("]")
    c5=c5.lstrip("[")
    cat5Text=tk.Label(master,text=c5)    
    cat5Text.grid(row=23, column=10, sticky=tk.W)
    im5 = Image.open(getImage(y))
    ph = ImageTk.PhotoImage(im5.resize((120,180)), master=master)
    img5 = tk.Label(master, image=ph)
    img5.image=ph  # need to keep the reference of your image to avoid garbage collection
    img5.grid(row=17,column=7, rowspan=7)



## button part
tk.Button(master, text='Show', command=controler).grid(row=7, 
                                                       column=0, 
                                                       sticky=tk.W, 
                                                       pady=4)

## result part
res=tk.Label(master,text="Results:",font="none 12 bold")
res.grid(row=8, column=0, sticky=tk.W)

# first recommendation
first=tk.Label(master,text="First recommendation:")
first.grid(row=9, column=0, sticky=tk.W)
im1 = Image.open('pic/1.jpg')
ph = ImageTk.PhotoImage(im1.resize((120,180)), master=master)
img1 = tk.Label(master, image=ph)
img1.image=ph  #need to keep the reference of your image to avoid garbage collection
img1.grid(row=10,column=0, rowspan=7) # columnspan: number of columns used
# features of the movie
titre1=tk.Label(master,text="Title:")    
titre1.grid(row=10, column=1, sticky=tk.W)
titre1Text=tk.Label(master,text="title 1")    
titre1Text.grid(row=10, column=2, sticky=tk.W)
date1=tk.Label(master,text="Date")    
date1.grid(row=11, column=1, sticky=tk.W)
des1=tk.Label(master,text="Description:")    
des1.grid(row=12, column=1, sticky=tk.W, rowspan=3)
master.grid_rowconfigure(12, weight=1)
master.grid_columnconfigure(2, weight=1)
des1Text=tk.Text(master, height=3, width=50) 
des1Text.insert(tk.END,"")
des1Text.config(background='#f0f0ed')
des1Text.grid(row=12, column=2, rowspan=3, columnspan=3)
scrollbar1 = tk.Scrollbar(master,command=des1Text.yview)
scrollbar1.grid(row=13, column=5)
des1Text['yscrollcommand'] = scrollbar1.set
rate1=tk.Label(master,text="Mean rating (/10):")    
rate1.grid(row=15, column=1, sticky=tk.W)
cat1=tk.Label(master,text="Categories:")    
cat1.grid(row=16, column=1, sticky=tk.W)
cat1Text=tk.Label(master,text="categories 1")    
cat1Text.grid(row=16, column=2, columnspan=4, sticky=tk.W)

# second recommendation
second=tk.Label(master,text="Second recommendation:")
second.grid(row=17, column=0, sticky=tk.W)
im2 = Image.open('pic/1.jpg')
ph = ImageTk.PhotoImage(im2.resize((120,180)), master=master)
img2 = tk.Label(master, image=ph)
img2.image=ph  #need to keep the reference of your image to avoid garbage collection
img2.grid(row=18,column=0, rowspan=7) # columnspan: number of columns used
# features of the movie
titre2=tk.Label(master,text="Title:")    
titre2.grid(row=18, column=1, sticky=tk.W)
date2=tk.Label(master,text="Date:")    
date2.grid(row=19, column=1, sticky=tk.W)
des2=tk.Label(master,text="Description:")    
des2.grid(row=20, column=1, sticky=tk.W, rowspan=2)
master.grid_rowconfigure(20, weight=1)
master.grid_columnconfigure(2, weight=1)
des2Text=tk.Text(master, height=3, width=50)  
des2Text.insert(tk.END,"")
des2Text.config(background='#f0f0ed')
des2Text.grid(row=20, column=2, sticky=tk.W, rowspan=2, columnspan=3)
scrollbar2 = tk.Scrollbar(master,command=des2Text.yview)
scrollbar2.grid(row=20, column=5)
des2Text['yscrollcommand'] = scrollbar2.set
rate2=tk.Label(master,text="Mean rating (/10):")    
rate2.grid(row=22, column=1, sticky=tk.W)
cat2=tk.Label(master,text="Categories:")    
cat2.grid(row=23, column=1, sticky=tk.W)

# third recommendation
third=tk.Label(master,text="Third recommendation:")
third.grid(row=0, column=7, sticky=tk.W)
im3 = Image.open('pic/1.jpg')
ph = ImageTk.PhotoImage(im3.resize((120,180)), master=master)
img3 = tk.Label(master, image=ph)
img3.image=ph  #need to keep the reference of your image to avoid garbage collection
img3.grid(row=1,column=7, columnspan=2, rowspan=7) # columnspan: number of columns used
# features of the movie
titre3=tk.Label(master,text="Title:")    
titre3.grid(row=1, column=9, sticky=tk.W)
date3=tk.Label(master,text="Date:")    
date3.grid(row=2, column=9, sticky=tk.W)
des3=tk.Label(master,text="Description:")    
des3.grid(row=3, column=9, sticky=tk.W, rowspan=3)
master.grid_rowconfigure(3, weight=1)
master.grid_columnconfigure(10, weight=1)
des3Text=tk.Text(master, height=3, width=52)   
des3Text.insert(tk.END,"")
des3Text.config(background='#f0f0ed')
des3Text.grid(row=3, column=10, sticky=tk.W, rowspan=2)
scrollbar3 = tk.Scrollbar(master,command=des3Text.yview)
scrollbar3.grid(row=4, column=13)
des3Text['yscrollcommand'] = scrollbar3.set
rate3=tk.Label(master,text="Mean rating (/10):")    
rate3.grid(row=6, column=9, sticky=tk.W)
cat3=tk.Label(master,text="Categories:")    
cat3.grid(row=7, column=9, sticky=tk.W)

# fourth recommendation
fourth=tk.Label(master,text="Fourth recommendation:")
fourth.grid(row=8, column=7, sticky=tk.W)
im4 = Image.open('pic/1.jpg')
ph = ImageTk.PhotoImage(im4.resize((120,180)), master=master)
img4 = tk.Label(master, image=ph)
img4.image=ph  #need to keep the reference of your image to avoid garbage collection
img4.grid(row=9,column=7, columnspan=2, rowspan=7) # columnspan: number of columns used
# features of the movie
titre4=tk.Label(master,text="Title:")    
titre4.grid(row=9, column=9, sticky=tk.W)
date4=tk.Label(master,text="Date:")    
date4.grid(row=10, column=9, sticky=tk.W)
des4=tk.Label(master,text="Description:")    
des4.grid(row=11, column=9, sticky=tk.W, rowspan=3)
master.grid_rowconfigure(11, weight=1)
master.grid_columnconfigure(10, weight=1)
des4Text=tk.Text(master, height=3, width=52)   
des4Text.insert(tk.END,"")
des4Text.config(background='#f0f0ed')
des4Text.grid(row=11, column=10, sticky=tk.W, rowspan=3)
scrollbar4 = tk.Scrollbar(master,command=des4Text.yview)
scrollbar4.grid(row=12, column=13)
des4Text['yscrollcommand'] = scrollbar4.set
rate4=tk.Label(master,text="Mean rating (/10):")    
rate4.grid(row=14, column=9, sticky=tk.W)
cat4=tk.Label(master,text="Categories:")    
cat4.grid(row=15, column=9, sticky=tk.W)

# fifth recommendation
fifth=tk.Label(master,text="Fifth recommendation:")
fifth.grid(row=16, column=7, sticky=tk.W)
im5 = Image.open('pic/1.jpg')
ph = ImageTk.PhotoImage(im5.resize((120,180)), master=master)
img5 = tk.Label(master, image=ph)
img5.image=ph  #need to keep the reference of your image to avoid garbage collection
img5.grid(row=17,column=7, columnspan=2, rowspan=7) # columnspan: number of columns used
# features of the movie
titre5=tk.Label(master,text="Title:")    
titre5.grid(row=17, column=9, sticky=tk.W)
date5=tk.Label(master,text="Date:")    
date5.grid(row=18, column=9, sticky=tk.W)
des5=tk.Label(master,text="Description:")    
des5.grid(row=19, column=9, sticky=tk.W, rowspan=3)
master.grid_rowconfigure(3, weight=1)
master.grid_columnconfigure(19, weight=1)
des5Text=tk.Text(master, height=3, width=52) 
des5Text.insert(tk.END,"")
des5Text.config(background='#f0f0ed')
des5Text.grid(row=19, column=10, sticky=tk.W, rowspan=3)
scrollbar5 = tk.Scrollbar(master,command=des5Text.yview)
scrollbar5.grid(row=20, column=13)
des5Text['yscrollcommand'] = scrollbar5.set
rate5=tk.Label(master,text="Mean rating (/10):")    
rate5.grid(row=22, column=9, sticky=tk.W)
cat5=tk.Label(master,text="Categories:")    
cat5.grid(row=23, column=9, sticky=tk.W)

tk.mainloop()