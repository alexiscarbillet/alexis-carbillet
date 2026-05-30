import React, { useState } from "react"; // Fixed: Added useState
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import LazyImage from './components/LazyImage';
import { useTranslation } from 'react-i18next';

export default function Ebooks() {
  const { t } = useTranslation();

  const ebooks = [
    { 
      titleKey: "digital-assets.ebooks.gcp-ebook", 
      url: "https://shop.alexis-carbillet.com/l/gcp-ebook",
      price: "CAD$10",
      category: "Cloud & Infrastructure",
      image: "/assets/ebooks/gcp-ebook.png",
      descriptionKey: "digital-assets.ebooks.gcp-ebook-desc"
    },
    { 
      titleKey: "digital-assets.ebooks.azure-ebook", 
      url: "https://shop.alexis-carbillet.com/l/azure-ebook",
      price: "CAD$10",
      category: "Cloud & Infrastructure",
      image: "/assets/ebooks/azure-ebook.png",
      descriptionKey: "digital-assets.ebooks.azure-ebook-desc"
    },
    { 
      titleKey: "digital-assets.ebooks.python-ebook", 
      url: "https://shop.alexis-carbillet.com/l/python-ebook",
      price: "CAD$10",
      category: "Development & AI",
      image: "/assets/ebooks/python-ebook.png",
      descriptionKey: "digital-assets.ebooks.python-ebook-desc"
    },
    { 
      titleKey: "digital-assets.ebooks.ai-ebook", 
      url: "https://shop.alexis-carbillet.com/l/ai-ebook",
      price: "CAD$10",
      category: "Development & AI",
      image: "/assets/ebooks/ai-ebook.png",
      descriptionKey: "digital-assets.ebooks.ai-ebook-desc"
    }
  ];

  // Initialize filters: Fixed casing for "Cloud Computing"
  const [selectedCategories, setSelectedCategories] = useState({
    "Cloud & Infrastructure": true,
    "Development & AI": true,
  });

  const toggleCategory = (cat) => {
    setSelectedCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  return (
    <>
      <SEO 
        title="Ebooks for IT Professionals"
        description="Explore ebooks on cloud computing, programming, and IT operations. Professional guides and tutorials starting at CAD$10."
        url="https://alexis-carbillet.com/digital-assets-ebooks"
      />
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container" style={{ padding: '2rem' }}>
          <h3 className="title is-3">{t("digital-assets.ebooks.ebooksHeader")}</h3>

          {/* Filter UI */}
          <div style={{ marginBottom: "2rem" }}>
            <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>Filter by category:</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
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
            {ebooks
              .filter(item => selectedCategories[item.category])
              .map((item) => (
                <div className="column is-one-quarter" key={item.titleKey}> 
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
                        {/* Fixed: Turned button into a stylized <a> tag */}
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="button is-primary is-small"
                        >
                          Buy
                        </a>
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