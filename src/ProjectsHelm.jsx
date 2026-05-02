import React from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next';

export default function ProjectsHelm() {
  const { t } = useTranslation();

  const helmCharts = [
    { title: "Monitoring stack", url: "https://artifacthub.io/packages/helm/helm-charts-alexis-carbillet/monitoring-stack", descriptionKey: "projects.desc.helm.monitoringStack" },
    { title: "Logging stack", url: "https://artifacthub.io/packages/helm/helm-charts-alexis-carbillet/logging-stack", descriptionKey: "projects.desc.helm.loggingStack" },
  ];

  return (
    <>
      <SEO
        title="Helm Charts"
        description="Helm charts for deploying monitoring and logging stacks in Kubernetes."
        url="https://alexis-carbillet.com/projects/helm"
      />
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container" style={{ padding: '2rem' }}>
          <h3 className="title is-3">{t("projects.helmCharts")}</h3>
          <p className="subtitle is-6">Kubernetes Helm charts for infrastructure components.</p>
          <div className="columns is-multiline">
            {helmCharts.map((item, idx) => (
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
