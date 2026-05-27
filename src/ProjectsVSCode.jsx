import React from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next';

export default function ProjectsVSCode() {
  const { t } = useTranslation();

  const vscodeExtensions = [
    { title: "coding-time-tracker-by-alexiscarbillet", url: "https://marketplace.visualstudio.com/items?itemName=AlexisCarbillet.coding-time-tracker-by-alexiscarbillet", url2: "https://github.com/alexiscarbillet/vscode_extension/tree/main/coding-time-tracker", descriptionKey: "projects.desc.vscode.codingTimeTracker" },
    { title: "seo-audit-for-html", url: "https://marketplace.visualstudio.com/items?itemName=AlexisCarbillet.seo-audit-for-html", url2: "https://github.com/alexiscarbillet/vscode_extension/tree/main/seo-audit-for-html", descriptionKey: "projects.desc.vscode.seoAudit" },
  ];

  return (
    <>
      <SEO
        title="VSCode Extensions"
        description="Visual Studio Code extensions for coding time tracking and SEO audits."
        url="https://alexis-carbillet.com/projects/vscode"
      />
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container" style={{ padding: '2rem' }}>
          <h3 className="title is-3">{t("projects.vscodeExtensions")}</h3>
          <p className="subtitle is-6">Extensions to enhance your VSCode development experience.</p>
          <div className="columns is-multiline">
            {vscodeExtensions.map((item, idx) => (
              <div className="column is-one-third-tablet is-half-mobile" key={idx}>
                <div className="card">
                  <div className="card-content">
                    <p className="title" style={{ wordBreak: 'normal' }}>{item.title}</p>
                    {item.descriptionKey && <p className="subtitle is-6">{t(item.descriptionKey)}</p>}
                    <a className="button is-primary is-outlined" href={item.url} target="_blank" rel="noopener noreferrer">
                      {t("projects.websiteButton")}
                    </a>
                    <a className="button is-info is-outlined" href={item.url2} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
                      {t("projects.githubButton")}
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
