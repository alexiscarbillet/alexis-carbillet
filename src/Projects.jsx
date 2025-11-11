import React from "react";
import Navbar from './components/Navbar';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();

  const websiteProjects = [
    { title: "Coding", url: "https://ac-programming.com/", domain: "ac-programming.com" },
    { title: "Electricity", url: "https://ac-electricity.com/", domain: "ac-electricity.com" },
    { title: "Hardware", url: "https://ac-serverhub.com/", domain: "ac-serverhub.com" },
    { title: "Cats", url: "https://all-about-cats.uk/", domain: "all-about-cats.uk" },
    { title: "Main", url: "https://alexis-carbillet.com/", domain: "alexis-carbillet.com" },
  ];

  const androidApps = [
    { title: "Unit converter", url: "https://ac-programming.com/apps/unit-converter/app.html" },
    { title: "Canadian animals", url: "https://ac-programming.com/apps/canadian-animals/app.html" },
    { title: "Tic Tac Toe", url: "https://ac-programming.com/apps/tic-tac-toe/app.html" },
    { title: "Span sheets", url: "https://ac-programming.com/apps/spansheets/app.html" },
    { title: "HTML colors", url: "https://ac-programming.com/apps/html-colors/app.html" },
    { title: "Fun with capitals", url: "https://ac-programming.com/apps/fun-with-capitals/app.html" },
    { title: "Fun with flags", url: "https://ac-programming.com/apps/fun-with-flags/app.html" },
    { title: "Training Canadian Citizenship", url: "https://ac-programming.com/apps/training-citizenship/app.html" },
    { title: "Random words", url: "https://ac-programming.com/apps/random-words/app.html" },
  ];

  const dockerContainers = [
    { title: "For data science (python 3.9)", url: "https://hub.docker.com/r/alexiscarbillet/data-science-container" },
    { title: "For python developer (3.11)", url: "https://hub.docker.com/r/alexiscarbillet/python-dev" },
    { title: "For python developer (3.12)", url: "https://hub.docker.com/repository/docker/alexiscarbillet/python_3_12_dev" },
    { title: "For python developer (3.13)", url: "https://hub.docker.com/repository/docker/alexiscarbillet/python_3_13_dev" },
    { title: "For web developer (node 16)", url: "https://hub.docker.com/r/alexiscarbillet/web_dev" },
    { title: "For golang developer (1.20)", url: "https://hub.docker.com/r/alexiscarbillet/go_dev" },
    { title: "For golang developer (1.25)", url: "https://hub.docker.com/repository/docker/alexiscarbillet/go_1_25_dev/general" },
    { title: "For data science (python 3.13)", url: "https://hub.docker.com/repository/docker/alexiscarbillet/python_3_13_data_science" },
    { title: "For web developer (node 22)", url: "https://hub.docker.com/repository/docker/alexiscarbillet/node_22_dev" },
  ];

  const firefoxPlugins = [
    { title: "Bookmark Usage Checker", url: "https://addons.mozilla.org/fr/firefox/addon/bookmark-usage-checker/" },
    { title: "Top 10 Domains", url: "https://addons.mozilla.org/fr/firefox/addon/top-10-domains/" },
    { title: "Pink Theme Extension", url: "https://addons.mozilla.org/fr/firefox/addon/pink-theme-extension/" },
  ];

  const vscodeExtensions = [
    { title: "coding-time-tracker-by-alexiscarbillet", url: "https://marketplace.visualstudio.com/items?itemName=AlexisCarbillet.coding-time-tracker-by-alexiscarbillet" },
    { title: "seo-audit-for-html", url: "https://marketplace.visualstudio.com/items?itemName=AlexisCarbillet.seo-audit-for-html" },
  ];

  const scripts = [
    { title: "Python", url: "https://github.com/alexiscarbillet/archive_code/tree/main/python_examples" },
    { title: "HTML/CSS", url: "https://github.com/alexiscarbillet/archive_code/tree/main/html_css_examples" },
    { title: "JavaScript", url: "https://github.com/alexiscarbillet/archive_code/tree/main/javascript_examples" },
    { title: "Go", url: "https://github.com/alexiscarbillet/archive_code/tree/main/go_examples" },
    { title: "React", url: "https://github.com/alexiscarbillet/archive_code/tree/main/react_examples" },
    { title: "Bash", url: "https://github.com/alexiscarbillet/archive_code/tree/main/bash_examples" },
  ];

  const helmCharts = [
    { title: "Monitoring stack", url: "https://artifacthub.io/packages/helm/helm-charts-alexis-carbillet/monitoring-stack" },
    { title: "Logging stack", url: "https://artifacthub.io/packages/helm/helm-charts-alexis-carbillet/logging-stack" },
  ];

  const renderCards = (items, useDomain = false) =>
    items.map((item, idx) => (
      <div className="column" key={idx}>
        <div className="card">
          <div className="card-content">
            <p className="title" style={{ wordBreak: 'normal' }}>{item.title}</p>
            {useDomain && <p style={{ wordBreak: 'keep-all' }}>{item.domain}</p>}
            <button className="button is-primary is-outlined">
              <a href={item.url} target="_blank">{t(useDomain ? "projects.websiteButton" : "projects.websiteButton")}</a>
            </button>
          </div>
        </div>
      </div>
    ));

  const renderCardsInRows = (items, useDomain = false) => {
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
                  {useDomain && <p style={{ wordBreak: 'keep-all' }}>{item.domain}</p>}
                  <button className="button is-primary is-outlined">
                    <a href={item.url} target="_blank">{t("projects.websiteButton")}</a>
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
          <h3 className="title is-3">{t("projects.websites")}:</h3>
          {renderCardsInRows(websiteProjects, true)}

          <h3 className="title is-3">{t("projects.androidApps")}:</h3>
          {renderCardsInRows(androidApps)}

          <h3 className="title is-3">{t("projects.dockerContainers")}:</h3>
          {renderCardsInRows(dockerContainers)}

          <h3 className="title is-3">{t("projects.firefoxPlugins")}:</h3>
          {renderCardsInRows(firefoxPlugins)}

          <h3 className="title is-3">{t("projects.vscodeExtensions")}:</h3>
          {renderCardsInRows(vscodeExtensions)}

          <h3 className="title is-3">{t("projects.scripts")}:</h3>
          {renderCardsInRows(scripts)}

          <h3 className="title is-3">{t("projects.helmCharts")}:</h3>
          {renderCardsInRows(helmCharts)}
        </div>
      </section>
    </>
  );
}