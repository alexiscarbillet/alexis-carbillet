import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SEO from "./components/SEO";
import { useTranslation } from "react-i18next";

export default function Certifications() {
  const { t } = useTranslation();
  const [selectedIssuers, setSelectedIssuers] = useState({});
  
  const certifications = t("certifications", { returnObjects: true });

  // Initialize selected issuers on first render
  useEffect(() => {
    if (Object.keys(selectedIssuers).length === 0 && Array.isArray(certifications) && certifications.length > 0) {
      const uniqueIssuers = [...new Set(certifications.map(cert => cert.issuer))];
      const issuersObj = {};
      uniqueIssuers.forEach(issuer => {
        issuersObj[issuer] = true;
      });
      setSelectedIssuers(issuersObj);
    }
  }, [certifications, selectedIssuers]);

  return (
    <>
      <SEO 
        title="Certifications"
        description="Professional certifications in cloud platforms (AWS, Azure, GCP), Kubernetes (CKA), cybersecurity, and AI. Verify my credentials and expertise."
        url="https://alexis-carbillet.com/certifications"
      />
      <Navbar />
      
      {/* CERTIFICATIONS SECTION */}
      <section className="section" style={{ marginTop: "50px" }}>
        <div className="container" style={{ padding: "2rem" }}>
          <h3 className="title is-3">{t("sections.certifications")}</h3>
        </div>

        <div className="container" style={{ padding: "2rem" }}>
          <div style={{ marginBottom: "2rem" }}>
            <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>Filter by issuer:</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {[...new Set(certifications.map(cert => cert.issuer))].sort().map(issuer => (
                <button
                  key={issuer}
                  className={`button ${selectedIssuers[issuer] ? "is-primary" : "is-light"}`}
                  onClick={() => setSelectedIssuers(prev => ({
                    ...prev,
                    [issuer]: !prev[issuer]
                  }))}
                >
                  {issuer}
                </button>
              ))}
            </div>
          </div>

          <div className="columns is-multiline">
            {certifications.filter(cert => selectedIssuers[cert.issuer]).map((cert, i) => (
              <div className="column is-one-third" key={i}>
                <div className="card">
                  <div className="card-content">
                    <p className="title">{cert.title}</p>
                    <p className="subtitle is-6">{cert.issuer}</p>
                    <button className="button is-primary is-outlined">
                      <a href={cert.url} target="_blank" rel="noreferrer">{t("buttons.website")}</a>
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
