import React from "react";
import Navbar from './components/Navbar';
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

  const renderCardsInRows = (items) => {
    const rows = [];
    for (let i = 0; i < items.length; i += 4) {
      const rowItems = items.slice(i, i + 4);
      rows.push(
        <div className="columns" key={i}>
          {rowItems.map((item, idx) => (
            <div className="column" key={idx}>
              <div className="card">
                <div className="card-content">
                  <p className="title" style={{ wordBreak: 'normal' }}>{item.title}</p>
                  {item.descriptionKey && <p className="subtitle is-6">{t(item.descriptionKey)}</p>}
                  <button className="button is-primary is-outlined">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">{t("projects.websiteButton")}</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <>
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container" style={{ padding: '2rem' }}>
          <h3 className="title is-3">{t("projects.androidApps")}</h3>
          {renderCardsInRows(androidApps)}
        </div>
      </section>
    </>
  );
}
