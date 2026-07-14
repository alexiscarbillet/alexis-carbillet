import React, { useState } from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next';

export default function ProjectsAndroid() {
  const { t } = useTranslation();

  // State to manage the active filter: 'all', 'android', or 'flutter'
  const [filter, setFilter] = useState('all');

  const androidApps = [
    { title: "Unit converter", url: "https://coding.alexis-carbillet.com/apps/unit-converter/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/android/unitconverter", descriptionKey: "projects.desc.android.unitConverter", tech: "android" },
    { title: "Canadian animals", url: "https://coding.alexis-carbillet.com/apps/canadian-animals/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/android/canadiananimals", descriptionKey: "projects.desc.android.canadianAnimals", tech: "android" },
    { title: "Tic Tac Toe", url: "https://coding.alexis-carbillet.com/apps/tic-tac-toe/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/android/tictactoe", descriptionKey: "projects.desc.android.ticTacToe", tech: "android" },
    { title: "Span sheets", url: "https://coding.alexis-carbillet.com/apps/spansheets/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/android/SpanSheets", descriptionKey: "projects.desc.android.spanSheets", tech: "android" },
    { title: "HTML colors", url: "https://coding.alexis-carbillet.com/apps/html-colors/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/android/htmlcolors", descriptionKey: "projects.desc.android.htmlColors", tech: "android" },
    { title: "Fun with capitals", url: "https://coding.alexis-carbillet.com/apps/fun-with-capitals/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/android/Funwithcapitals", descriptionKey: "projects.desc.android.funWithCapitals", tech: "android" },
    { title: "Fun with flags", url: "https://coding.alexis-carbillet.com/apps/fun-with-flags/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/android/funwithflags", descriptionKey: "projects.desc.android.funWithFlags", tech: "android" },
    { title: "Training Canadian Citizenship", url: "https://coding.alexis-carbillet.com/apps/training-citizenship/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/android/trainingcanadiancitizenship", descriptionKey: "projects.desc.android.trainingCanadianCitizenship", tech: "android" },
    { title: "Random words", url: "https://coding.alexis-carbillet.com/apps/random-words/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/android/advancedwords", descriptionKey: "projects.desc.android.randomWords", tech: "android" },
    { title: "Scavenger hunt", url: "https://coding.alexis-carbillet.com/apps/scavenger-hunt/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/flutter/scavenger-hunt", descriptionKey: "projects.desc.android.scavengerHunt", tech: "flutter" },
    { title: "LearnIT", url: "https://coding.alexis-carbillet.com/apps/learn-it/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/flutter/learn_it", descriptionKey: "projects.desc.android.learnIT", tech: "flutter" },
  ];

  // Filter the list based on state
  const filteredApps = androidApps.filter(app => filter === 'all' || app.tech === filter);

  return (
    <>
      <SEO
        title="Android Apps"
        description="Explore my Android applications built for fun, including unit converters, games, and educational tools."
        url="https://alexis-carbillet.com/projects/android"
      />
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container" style={{ padding: '2rem' }}>
          <h3 className="title is-3">{t("projects.androidApps")}</h3>
          <p className="subtitle is-6">{t("projects.desc.android.description")}</p>

          {/* Filter Buttons using Bulma classes */}
          <div className="buttons" style={{ marginBottom: '2rem' }}>
            <button
              className={`button ${filter === 'all' ? 'is-dark' : 'is-light'}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`button ${filter === 'android' ? 'is-dark' : 'is-light'}`}
              onClick={() => setFilter('android')}
            >
              Android (Native)
            </button>
            <button
              className={`button ${filter === 'flutter' ? 'is-dark' : 'is-light'}`}
              onClick={() => setFilter('flutter')}
            >
              Flutter
            </button>
          </div>

          <div className="columns is-multiline">
            {filteredApps.map((item, idx) => (
              <div className="column is-one-third-tablet is-half-mobile" key={idx}>
                <div className="card">
                  <div className="card-content">
                    <p className="title" style={{ wordBreak: 'normal' }}>{item.title}</p>
                    {item.descriptionKey && <p className="subtitle is-6">{t(item.descriptionKey)}</p>}
                    <a className="button is-primary is-outlined" href={item.url} target="_blank" rel="noopener noreferrer">
                      {t("buttons.website")}
                    </a>
                    {item.url2 && (
                      <a className="button is-info is-outlined" href={item.url2} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
                        {t("buttons.github")}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}