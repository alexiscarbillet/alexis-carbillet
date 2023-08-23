# algo for image downloading

import requests
import pandas

keywords = pandas.read_csv('keywords.csv')
movies = pandas.read_csv('movies_metadata.csv', low_memory=False)

for i in range(movies.shape[0]): 
# il y a plus de 40000 affiches à télécharger
    if(movies['poster_path'][i]!=''):
        x='https://image.tmdb.org/t/p/original'+str(movies['poster_path'][i]) 
        a=movies['title'][i]
        for i in a:
            if(i=="/" or i=="?" or i=="!" or i=="."or i=="," or i==";"  or i==":" or i=="*" or i=="+" or i=='"' or i=="'"):
                a = list(a)
                a[a.index(i)]="-"
                a="".join(a)
        with open('pic/'+a+'.jpg', 'wb') as handle: # you need to create a folder pic where all the images will be saved from internet. this folder should be in one the one where this script is
                response = requests.get(x, stream=True)
        
                if not response.ok:
                    print(response)
        
                for block in response.iter_content(1024):
                    if not block:
                        break
        
                    handle.write(block)
    else:
        x=''

# a="Shall We Dance?"
# for i in a:
#     if(i=="/" or i=="?" or i=="!" or i=="."or i=="," or i==";" or i==":"):
#         a = list(a)
#         a[a.index(i)]="-"
#         a="".join(a)
