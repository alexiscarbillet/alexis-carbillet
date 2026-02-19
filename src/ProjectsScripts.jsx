import React from "react";
import Navbar from './components/Navbar';
import { useTranslation } from 'react-i18next';

export default function ProjectsScripts() {
  const { t } = useTranslation();

  const scripts = [
    { title: "Python", url: "https://github.com/alexiscarbillet/archive_code/tree/main/python_examples", descriptionKey: "projects.desc.scripts.python" },
    { title: "HTML/CSS", url: "https://github.com/alexiscarbillet/archive_code/tree/main/html_css_examples", descriptionKey: "projects.desc.scripts.htmlCss" },
    { title: "JavaScript", url: "https://github.com/alexiscarbillet/archive_code/tree/main/javascript_examples", descriptionKey: "projects.desc.scripts.javascript" },
    { title: "Go", url: "https://github.com/alexiscarbillet/archive_code/tree/main/go_examples", descriptionKey: "projects.desc.scripts.go" },
    { title: "React", url: "https://github.com/alexiscarbillet/archive_code/tree/main/react_examples", descriptionKey: "projects.desc.scripts.react" },
    { title: "Bash", url: "https://github.com/alexiscarbillet/archive_code/tree/main/bash_examples", descriptionKey: "projects.desc.scripts.bash" },
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
          <h3 className="title is-3">{t("projects.scripts")}</h3>
          {renderCardsInRows(scripts)}
        </div>
      </section>
    </>
  );
}
