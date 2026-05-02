import React from "react";
import Navbar from "./components/Navbar";
import SEO from "./components/SEO";
import { useTranslation } from "react-i18next";

export default function Diplomas() {
  const { t } = useTranslation();
  
  const diplomas = t("diplomas", { returnObjects: true });

  return (
    <>
      <SEO 
        title="Diplomas & Education"
        description="Master's degree in AI & Data Science from IMT Mines Alès. Advanced education in artificial intelligence and data science technologies."
        url="https://alexis-carbillet.com/diplomas"
      />
      <Navbar />
      
      {/* DIPLOMAS SECTION */}
      <section className="section" style={{ marginTop: "50px" }}>
        <div className="container" style={{ padding: "2rem" }}>
          <h3 className="title is-3">{t("sections.diplomas")}</h3>
        </div>

        <div className="container" style={{ padding: "2rem" }}>
          <div className="columns is-multiline">
            {diplomas.map((diploma, i) => (
          <div className="column is-full" key={i}>
                <div className="card">
                  <div className="card-content">
                    <p className="title">{diploma.title}</p>
                    <p className="subtitle is-6">{diploma.issuer}</p>
                    <button className="button is-primary is-outlined">
                      <a href={diploma.url} target="_blank" rel="noreferrer">{t("buttons.website")}</a>
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
