import React from "react";
import Navbar from './components/Navbar';
import { useTranslation } from 'react-i18next';

export default function ProjectsFirefox() {
  const { t } = useTranslation();

  const firefoxPlugins = [
    { title: "Bookmark Usage Checker", url: "https://addons.mozilla.org/fr/firefox/addon/bookmark-usage-checker/", descriptionKey: "projects.desc.firefox.bookmarkUsageChecker" },
    { title: "Top 10 Domains", url: "https://addons.mozilla.org/fr/firefox/addon/top-10-domains/", descriptionKey: "projects.desc.firefox.top10Domains" },
    { title: "Pink Theme Extension", url: "https://addons.mozilla.org/fr/firefox/addon/pink-theme-extension/", descriptionKey: "projects.desc.firefox.pinkTheme" },
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
          <h3 className="title is-3">{t("projects.firefoxPlugins")}</h3>
          {renderCardsInRows(firefoxPlugins)}
        </div>
      </section>
    </>
  );
}
