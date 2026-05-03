import React, { useState } from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import LazyImage from './components/LazyImage';
import { useTranslation } from 'react-i18next';

export default function Toolkits() {
  const { t } = useTranslation();

  const toolkits = [
    { 
      titleKey: "digital-assets.toolkits.freelance-it-consultant-onboarding-kit", 
      url: "https://shop.alexis-carbillet.com/l/freelance-it-consultant-onboarding-kit", 
      category: "IT Operations & Career",
      price: "CAD$15",
      image: "/assets/toolkits/Gemini_Generated_Image_ymz9mkymz9mkymz9.png",
      descriptionKey: "digital-assets.toolkits.freelance-it-consultant-onboarding-kit-desc"
    },
    { 
      titleKey: "digital-assets.toolkits.friction-slayer", 
      url: "https://shop.alexis-carbillet.com/l/Friction-Slayer", 
      category: "IT Operations & Career",
      price: "CAD$10",
      image: "/assets/toolkits/Gemini_Generated_Image_htljxphtljxphtlj.png",
      descriptionKey: "digital-assets.toolkits.friction-slayer-desc"
    },
    { 
      titleKey: "digital-assets.toolkits.legacy-system-migration-roadmap", 
      url: "https://shop.alexis-carbillet.com/l/legacy-system-migration-roadmap", 
      category: "IT Operations & Career",
      price: "CAD$10",
      image: "/assets/toolkits/Gemini_Generated_Image_h8fwsah8fwsah8fw.png",
      descriptionKey: "digital-assets.toolkits.legacy-system-migration-roadmap-desc"
    },
    { 
      titleKey: "digital-assets.toolkits.minimum-viable-security", 
      url: "https://shop.alexis-carbillet.com/l/minimum-viable-security", 
      category: "Cybersecurity & Compliance",
      price: "CAD$15",
      image: "/assets/toolkits/Gemini_Generated_Image_94ohxt94ohxt94oh.png",
      descriptionKey: "digital-assets.toolkits.minimum-viable-security-desc"
    },
    { 
      titleKey: "digital-assets.toolkits.vendor-risk-assessment", 
      url: "https://shop.alexis-carbillet.com/l/vendor-risk-assessment", 
      category: "Cybersecurity & Compliance",
      price: "CAD$10",
      image: "/assets/toolkits/Gemini_Generated_Image.png",
      descriptionKey: "digital-assets.toolkits.vendor-risk-assessment-desc"
    },
    { 
      titleKey: "digital-assets.toolkits.pre-audit-preparation", 
      url: "https://shop.alexis-carbillet.com/l/pre-audit-preparation", 
      category: "Cybersecurity & Compliance",
      price: "CAD$10",
      image: "/assets/toolkits/Gemini_Generated_Image_24tjxg24tjxg24tj.png",
      descriptionKey: "digital-assets.toolkits.pre-audit-preparation-desc"
    },
    { 
      titleKey: "digital-assets.toolkits.ethical-ai-governance", 
      url: "https://shop.alexis-carbillet.com/l/ethical-ai-governance", 
      category: "AI & Data strategy",
      price: "CAD$10",
      image: "/assets/toolkits/Gemini_Generated_Image_jzwfnajzwfnajzwf.png",
      descriptionKey: "digital-assets.toolkits.ethical-ai-governance-desc"
    },
    { 
      titleKey: "digital-assets.toolkits.prompt-engineering-library", 
      url: "https://shop.alexis-carbillet.com/l/Prompt-Engineering-Library-for-IT-Managers", 
      category: "AI & Data strategy",
      price: "CAD$15",
      image: "/assets/toolkits/Code_Generated_Image.png",
      descriptionKey: "digital-assets.toolkits.prompt-engineering-library-desc"
    }
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
      <SEO 
        title="Digital Toolkits & Products"
        description="Explore digital toolkits for IT operations, cybersecurity compliance, and ethical AI governance. Professional templates and frameworks starting at CAD$10."
        url="https://alexis-carbillet.com/digital-assets-toolkits"
      />
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
                <div className="column is-one-quarter" key={idx}>
                  <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <div className="card-image">
                      <figure className="image is-4by3">
                        <LazyImage 
                          src={item.image} 
                          alt={t(item.titleKey)}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </figure>
                    </div>
                    <div className="card-content" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                      <p className="title is-5">{t(item.titleKey)}</p>
                      {item.descriptionKey && <p className="subtitle is-7" style={{ flex: 1 }}>{t(item.descriptionKey)}</p>}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
                        <p style={{ fontWeight: "bold", fontSize: "1.1em", color: "#3273dc" }}>{item.price}</p>
                        <button className="button is-primary is-small">
                          <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>Buy</a>
                        </button>
                      </div>
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