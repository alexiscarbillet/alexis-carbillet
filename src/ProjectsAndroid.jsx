import React, { useState } from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next';

export default function ProjectsAndroid() {
  const { t } = useTranslation();

  // State to manage the active filter: 'all', 'android', or 'flutter'
  const [filter, setFilter] = useState('all');

  const androidApps = [
    { title: "Unit converter", url: "https://coding.alexis-carbillet.com/apps/unit-converter/app.html", url2: "https://github.com/alexiscarbillet/android-apps-archive/tree/main/unit%20converter", descriptionKey: "projects.desc.android.unitConverter", tech: "android", archived: true },
    { title: "Canadian animals", url: "https://coding.alexis-carbillet.com/apps/canadian-animals/app.html", url2: "https://github.com/alexiscarbillet/android-apps-archive/tree/main/canadiananimals", descriptionKey: "projects.desc.android.canadianAnimals", tech: "android", archived: true },
    { title: "Tic Tac Toe", url: "https://coding.alexis-carbillet.com/apps/tic-tac-toe/app.html", url2: "https://github.com/alexiscarbillet/android-apps-archive/tree/main/tictactoe", descriptionKey: "projects.desc.android.ticTacToe", tech: "android", archived: true },
    { title: "Span sheets", url: "https://coding.alexis-carbillet.com/apps/spansheets/app.html", url2: "https://github.com/alexiscarbillet/android-apps-archive/tree/main/SpanSheets", descriptionKey: "projects.desc.android.spanSheets", tech: "android", archived: true },
    { title: "HTML colors", url: "https://coding.alexis-carbillet.com/apps/html-colors/app.html", url2: "https://github.com/alexiscarbillet/android-apps-archive/tree/main/htmlcolorguess", descriptionKey: "projects.desc.android.htmlColors", tech: "android", archived: true },
    { title: "Fun with capitals", url: "https://coding.alexis-carbillet.com/apps/fun-with-capitals/app.html", url2: "https://github.com/alexiscarbillet/android-apps-archive/tree/main/Funwithcapitals", descriptionKey: "projects.desc.android.funWithCapitals", tech: "android", archived: true },
    { title: "Fun with flags", url: "https://coding.alexis-carbillet.com/apps/fun-with-flags/app.html", url2: "https://github.com/alexiscarbillet/android-apps-archive/tree/main/funwithflags", descriptionKey: "projects.desc.android.funWithFlags", tech: "android", archived: true },
    { title: "Training Canadian Citizenship", url: "https://coding.alexis-carbillet.com/apps/training-citizenship/app.html", url2: "https://github.com/alexiscarbillet/android-apps-archive/tree/main/trainingcanadiancitizen", descriptionKey: "projects.desc.android.trainingCanadianCitizenship", tech: "android", archived: true },
    { title: "Random words", url: "https://coding.alexis-carbillet.com/apps/random-words/app.html", url2: "https://github.com/alexiscarbillet/android-apps-archive/tree/main/advancedwords", descriptionKey: "projects.desc.android.randomWords", tech: "android", archived: true },
    { title: "Language Flashcards", url: "https://coding.alexis-carbillet.com/apps/language-flashcards/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/flutter/language_flashcards", descriptionKey: "projects.desc.android.languageFlashcards", tech: "flutter" },
    { title: "Scavenger hunt", url: "https://coding.alexis-carbillet.com/apps/scavenger-hunt/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/flutter/scavenger-hunt", descriptionKey: "projects.desc.android.scavengerHunt", tech: "flutter" },
    { title: "LearnIT", url: "https://coding.alexis-carbillet.com/apps/learn-it/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/flutter/learn_it", descriptionKey: "projects.desc.android.learnIT", tech: "flutter" },
    { title: "LearnHardware", url: "https://coding.alexis-carbillet.com/apps/learn-hardware/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/flutter/learn_hardware", descriptionKey: "projects.desc.android.learnHardware", tech: "flutter" },
    { title: "Chess Puzzles", url: "https://coding.alexis-carbillet.com/apps/chess-puzzles/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/flutter/chess_puzzles", descriptionKey: "projects.desc.android.chessPuzzles", tech: "flutter" },
    { title: "BrainCare", url: "https://coding.alexis-carbillet.com/apps/brain-care/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/flutter/brain-care", descriptionKey: "projects.desc.android.brainCare", tech: "flutter" },
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
              {t("filters.all")}
            </button>
            <button
              className={`button ${filter === 'android' ? 'is-dark' : 'is-light'}`}
              onClick={() => setFilter('android')}
            >
              {t("filters.androidNative")}
            </button>
            <button
              className={`button ${filter === 'flutter' ? 'is-dark' : 'is-light'}`}
              onClick={() => setFilter('flutter')}
            >
              {t("filters.flutter")}
            </button>
          </div>

          <div className="columns is-multiline">
            {filteredApps.map((item, idx) => (
              <div className="column is-one-third-tablet is-half-mobile" key={idx}>
                <div className="card">
                  <div className="card-content">
                    <p className="title" style={{ wordBreak: 'normal' }}>
                      {item.title}
                      {item.archived && (
                        <span className="tag is-warning is-light is-small" style={{ marginLeft: '10px', verticalAlign: 'middle' }}>
                          {t("badges.archived")}
                        </span>
                      )}
                    </p>
                    {item.descriptionKey && <p className="subtitle is-6">{t(item.descriptionKey)}</p>}
                    {item.url && (
                      <a className="button is-primary is-outlined" href={item.url} target="_blank" rel="noopener noreferrer">
                        {t("buttons.website")}
                      </a>
                    )}
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