import React from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next';

export default function ProjectsAndroid() {
  const { t } = useTranslation();

  const androidApps = [
    { title: "Unit converter", url: "https://coding.alexis-carbillet.com/apps/unit-converter/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/unitconverter", descriptionKey: "projects.desc.android.unitConverter" },
    { title: "Canadian animals", url: "https://coding.alexis-carbillet.com/apps/canadian-animals/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/canadiananimals", descriptionKey: "projects.desc.android.canadianAnimals" },
    { title: "Tic Tac Toe", url: "https://coding.alexis-carbillet.com/apps/tic-tac-toe/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/tictactoe", descriptionKey: "projects.desc.android.ticTacToe" },
    { title: "Span sheets", url: "https://coding.alexis-carbillet.com/apps/spansheets/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/SpanSheets",  descriptionKey: "projects.desc.android.spanSheets" },
    { title: "HTML colors", url: "https://coding.alexis-carbillet.com/apps/html-colors/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/htmlcolors", descriptionKey: "projects.desc.android.htmlColors" },
    { title: "Fun with capitals", url: "https://coding.alexis-carbillet.com/apps/fun-with-capitals/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/Funwithcapitals", descriptionKey: "projects.desc.android.funWithCapitals" },
    { title: "Fun with flags", url: "https://coding.alexis-carbillet.com/apps/fun-with-flags/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/funwithflags", descriptionKey: "projects.desc.android.funWithFlags" },
    { title: "Training Canadian Citizenship", url: "https://coding.alexis-carbillet.com/apps/training-citizenship/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/trainingcanadiancitizenship", descriptionKey: "projects.desc.android.trainingCanadianCitizenship" },
    { title: "Random words", url: "https://coding.alexis-carbillet.com/apps/random-words/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/advancedwords",descriptionKey: "projects.desc.android.randomWords" },
    { title: "Scavenger hunt", url: "https://coding.alexis-carbillet.com/apps/scavenger-hunt/app.html", url2: "https://github.com/alexiscarbillet/apps/tree/main/scavenger-hunt", descriptionKey: "projects.desc.android.scavengerHunt" },
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
          <p className="subtitle is-6">{t("projects.desc.android.description")}</p>
          <div className="columns is-multiline">
            {androidApps.map((item, idx) => (
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
