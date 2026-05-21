import React from "react";
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
      image: "/assets/ebooks/gcp-ebook.png",
      descriptionKey: "digital-assets.ebooks.gcp-ebook-desc"
    },
    { 
      titleKey: "digital-assets.ebooks.azure-ebook", 
      url: "https://shop.alexis-carbillet.com/l/azure-ebook",
      price: "CAD$10",
      image: "/assets/ebooks/azure-ebook.png",
      descriptionKey: "digital-assets.ebooks.azure-ebook-desc"
    }
  ];

  return (
    <>
      <SEO 
        title="Ebooks & Products"
        description="Explore my ebooks and digital products to enhance your IT operations."
        url="https://alexis-carbillet.com/ebooks"
      />
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container" style={{ padding: '2rem' }}>
          <h3 className="title is-3">{t("digital-assets.ebooks.ebooksHeader")}</h3>

          {/* Cards Grid — Added is-variable to guarantee strict sizing */}
          <div className="columns is-multiline is-variable is-3">
            {ebooks.map((item, idx) => (
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