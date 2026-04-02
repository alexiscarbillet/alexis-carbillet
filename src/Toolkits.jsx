import React from "react";
import Navbar from './components/Navbar';
import { useTranslation } from 'react-i18next';

export default function Toolkits() {
  const { t } = useTranslation();

  const toolkits = [
    { titleKey: "digital-assets.toolkits.freelance-it-consultant-onboarding-kit", url: "https://shop.alexis-carbillet.com/l/freelance-it-consultant-onboarding-kit" },
    { titleKey: "digital-assets.toolkits.friction-slayer", url: "https://shop.alexis-carbillet.com/l/Friction-Slayer" },
    { titleKey: "digital-assets.toolkits.legacy-system-migration-roadmap", url: "https://shop.alexis-carbillet.com/l/legacy-system-migration-roadmap" },
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
                  <p className="title" style={{ wordBreak: 'normal' }}>{t(item.titleKey)}</p>
                  <button className="button is-primary is-outlined">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">{t("Gumroad")}</a>
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
          <h3 className="title is-3">{t("digital-assets.toolkits.toolkitsHeader")}</h3>
          {renderCardsInRows(toolkits)}
        </div>
      </section>
    </>
  );
}
