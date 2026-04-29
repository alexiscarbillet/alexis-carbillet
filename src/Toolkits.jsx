import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import { useTranslation } from 'react-i18next';

export default function Toolkits() {
  const { t } = useTranslation();

  const toolkits = [
    { titleKey: "digital-assets.toolkits.freelance-it-consultant-onboarding-kit", url: "https://shop.alexis-carbillet.com/l/freelance-it-consultant-onboarding-kit", category: "IT Operations & Career" },
    { titleKey: "digital-assets.toolkits.friction-slayer", url: "https://shop.alexis-carbillet.com/l/Friction-Slayer", category: "IT Operations & Career" },
    { titleKey: "digital-assets.toolkits.legacy-system-migration-roadmap", url: "https://shop.alexis-carbillet.com/l/legacy-system-migration-roadmap", category: "IT Operations & Career" },
    { titleKey: "digital-assets.toolkits.minimum-viable-security", url: "https://shop.alexis-carbillet.com/l/minimum-viable-security", category: "Cybersecurity & Compliance" },
    { titleKey: "digital-assets.toolkits.vendor-risk-assessment", url: "https://shop.alexis-carbillet.com/l/vendor-risk-assessment", category: "Cybersecurity & Compliance" },
    { titleKey: "digital-assets.toolkits.pre-audit-preparation", url: "https://shop.alexis-carbillet.com/l/pre-audit-preparation", category: "Cybersecurity & Compliance" },
    { titleKey: "digital-assets.toolkits.ethical-ai-governance", url: "https://shop.alexis-carbillet.com/l/ethical-ai-governance", category: "AI & Data strategy" }
  ];

  // Initialize filters: both categories active by default
  const [selectedCategories, setSelectedCategories] = useState({
    "IT Operations & Career": true,
    "Cybersecurity & Compliance": true,
    "AI & Data strategy": true,
  });

  const toggleCategory = (cat) => {
    setSelectedCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  return (
    <>
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container" style={{ padding: '2rem' }}>
          <h3 className="title is-3">{t("digital-assets.toolkits.toolkitsHeader")}</h3>

          {/* Filter UI */}
          <div style={{ marginBottom: "2rem" }}>
            <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>Filter by category:</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {/* Use Object.keys to automatically show every category in your state */}
              {Object.keys(selectedCategories).map(cat => (
                <button
                  key={cat}
                  className={`button ${selectedCategories[cat] ? "is-primary" : "is-light"}`}
                  onClick={() => toggleCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="columns is-multiline">
            {toolkits
              .filter(item => selectedCategories[item.category])
              .map((item, idx) => (
                // Use 'is-one-quarter' like you wanted, but it won't squish because 
                // it is set to 25% width, which is wider than your previous broken setup.
                <div className="column is-one-quarter" key={idx}>
                  <div className="card">
                    <div className="card-content">
                      <p className="title is-5">{t(item.titleKey)}</p>
                      <button className="button is-primary is-outlined">
                        <a href={item.url} target="_blank" rel="noopener noreferrer">{t("Gumroad")}</a>
                      </button>
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