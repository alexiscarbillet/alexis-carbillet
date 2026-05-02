import React from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next';

export default function ProjectsAndroid() {
  const { t } = useTranslation();

  const androidApps = [
    { title: "Unit converter", url: "https://coding.alexis-carbillet.com/apps/unit-converter/app.html", descriptionKey: "projects.desc.android.unitConverter" },
    { title: "Canadian animals", url: "https://coding.alexis-carbillet.com/apps/canadian-animals/app.html", descriptionKey: "projects.desc.android.canadianAnimals" },
    { title: "Tic Tac Toe", url: "https://coding.alexis-carbillet.com/apps/tic-tac-toe/app.html", descriptionKey: "projects.desc.android.ticTacToe" },
    { title: "Span sheets", url: "https://coding.alexis-carbillet.com/apps/spansheets/app.html", descriptionKey: "projects.desc.android.spanSheets" },
    { title: "HTML colors", url: "https://coding.alexis-carbillet.com/apps/html-colors/app.html", descriptionKey: "projects.desc.android.htmlColors" },
    { title: "Fun with capitals", url: "https://coding.alexis-carbillet.com/apps/fun-with-capitals/app.html", descriptionKey: "projects.desc.android.funWithCapitals" },
    { title: "Fun with flags", url: "https://coding.alexis-carbillet.com/apps/fun-with-flags/app.html", descriptionKey: "projects.desc.android.funWithFlags" },
    { title: "Training Canadian Citizenship", url: "https://coding.alexis-carbillet.com/apps/training-citizenship/app.html", descriptionKey: "projects.desc.android.trainingCanadianCitizenship" },
    { title: "Random words", url: "https://coding.alexis-carbillet.com/apps/random-words/app.html", descriptionKey: "projects.desc.android.randomWords" },
  ];

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
          <p className="subtitle is-6">Fun Android applications I developed, available on my coding website.</p>
          <div className="columns is-multiline">
            {androidApps.map((item, idx) => (
              <div className="column is-one-third-tablet is-half-mobile" key={idx}>
                <div className="card">
                  <div className="card-content">
                    <p className="title" style={{ wordBreak: 'normal' }}>{item.title}</p>
                    {item.descriptionKey && <p className="subtitle is-6">{t(item.descriptionKey)}</p>}
                    <a className="button is-primary is-outlined" href={item.url} target="_blank" rel="noopener noreferrer">
                      {t("projects.websiteButton")}
                    </a>
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
