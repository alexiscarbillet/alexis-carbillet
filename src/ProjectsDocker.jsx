import React from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
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

  return (
    <>
      <SEO
        title="Docker Containers"
        description="Pre-configured Docker containers for development in Python, Node.js, Go, and data science."
        url="https://alexis-carbillet.com/projects/docker"
      />
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container" style={{ padding: '2rem' }}>
          <h3 className="title is-3">{t("projects.dockerContainers")}</h3>
          <p className="subtitle is-6">Ready-to-use Docker images for various development environments.</p>
          <div className="columns is-multiline">
            {dockerContainers.map((item, idx) => (
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
