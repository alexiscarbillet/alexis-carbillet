import React from "react";
import Navbar from './components/Navbar';
import { useTranslation } from 'react-i18next';

export default function ProjectsVSCode() {
  const { t } = useTranslation();

  const vscodeExtensions = [
    { title: "coding-time-tracker-by-alexiscarbillet", url: "https://marketplace.visualstudio.com/items?itemName=AlexisCarbillet.coding-time-tracker-by-alexiscarbillet", descriptionKey: "projects.desc.vscode.codingTimeTracker" },
    { title: "seo-audit-for-html", url: "https://marketplace.visualstudio.com/items?itemName=AlexisCarbillet.seo-audit-for-html", descriptionKey: "projects.desc.vscode.seoAudit" },
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
          <h3 className="title is-3">{t("projects.vscodeExtensions")}</h3>
          {renderCardsInRows(vscodeExtensions)}
        </div>
      </section>
    </>
  );
}
