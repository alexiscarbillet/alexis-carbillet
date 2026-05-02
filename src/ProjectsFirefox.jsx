import React from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next';

export default function ProjectsFirefox() {
  const { t } = useTranslation();

  const firefoxPlugins = [
    { title: "Bookmark Usage Checker", url: "https://addons.mozilla.org/fr/firefox/addon/bookmark-usage-checker/", descriptionKey: "projects.desc.firefox.bookmarkUsageChecker" },
    { title: "Top 10 Domains", url: "https://addons.mozilla.org/fr/firefox/addon/top-10-domains/", descriptionKey: "projects.desc.firefox.top10Domains" },
    { title: "Pink Theme Extension", url: "https://addons.mozilla.org/fr/firefox/addon/pink-theme-extension/", descriptionKey: "projects.desc.firefox.pinkTheme" },
  ];

  return (
    <>
      <SEO
        title="Firefox Plugins"
        description="Mozilla Firefox extensions for productivity, analytics, and customization."
        url="https://alexis-carbillet.com/projects/firefox"
      />
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container" style={{ padding: '2rem' }}>
          <h3 className="title is-3">{t("projects.firefoxPlugins")}</h3>
          <p className="subtitle is-6">Extensions to enhance your Firefox browsing experience.</p>
          <div className="columns is-multiline">
            {firefoxPlugins.map((item, idx) => (
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
