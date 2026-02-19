import React from "react";
import Navbar from './components/Navbar';
import { useTranslation } from 'react-i18next';

export default function ProjectsDocker() {
  const { t } = useTranslation();

  const dockerContainers = [
    { title: "For data science (python 3.9)", url: "https://hub.docker.com/r/alexiscarbillet/data-science-container", descriptionKey: "projects.desc.docker.dataScience39" },
    { title: "For python developer (3.11)", url: "https://hub.docker.com/r/alexiscarbillet/python-dev", descriptionKey: "projects.desc.docker.python311" },
    { title: "For python developer (3.12)", url: "https://hub.docker.com/repository/docker/alexiscarbillet/python_3_12_dev", descriptionKey: "projects.desc.docker.python312" },
    { title: "For python developer (3.13)", url: "https://hub.docker.com/repository/docker/alexiscarbillet/python_3_13_dev", descriptionKey: "projects.desc.docker.python313" },
    { title: "For web developer (node 16)", url: "https://hub.docker.com/r/alexiscarbillet/web_dev", descriptionKey: "projects.desc.docker.node16" },
    { title: "For golang developer (1.20)", url: "https://hub.docker.com/r/alexiscarbillet/go_dev", descriptionKey: "projects.desc.docker.go120" },
    { title: "For golang developer (1.25)", url: "https://hub.docker.com/repository/docker/alexiscarbillet/go_1_25_dev/general", descriptionKey: "projects.desc.docker.go125" },
    { title: "For data science (python 3.13)", url: "https://hub.docker.com/repository/docker/alexiscarbillet/python_3_13_data_science", descriptionKey: "projects.desc.docker.dataScience313" },
    { title: "For web developer (node 22)", url: "https://hub.docker.com/repository/docker/alexiscarbillet/node_22_dev", descriptionKey: "projects.desc.docker.node22" },
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
          <h3 className="title is-3">{t("projects.dockerContainers")}</h3>
          {renderCardsInRows(dockerContainers)}
        </div>
      </section>
    </>
  );
}
