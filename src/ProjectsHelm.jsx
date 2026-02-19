import React from "react";
import Navbar from './components/Navbar';
import { useTranslation } from 'react-i18next';

export default function ProjectsHelm() {
  const { t } = useTranslation();

  const helmCharts = [
    { title: "Monitoring stack", url: "https://artifacthub.io/packages/helm/helm-charts-alexis-carbillet/monitoring-stack", descriptionKey: "projects.desc.helm.monitoringStack" },
    { title: "Logging stack", url: "https://artifacthub.io/packages/helm/helm-charts-alexis-carbillet/logging-stack", descriptionKey: "projects.desc.helm.loggingStack" },
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
          <h3 className="title is-3">{t("projects.helmCharts")}</h3>
          {renderCardsInRows(helmCharts)}
        </div>
      </section>
    </>
  );
}
