import React, { useEffect, useRef, useState } from "react";
import "bulma/css/bulma.min.css";
import Navbar from "./components/Navbar";
import Social from "./components/Social";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ExperienceTimeline() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState(null);
  const [selectedIssuers, setSelectedIssuers] = useState({});
  const refs = useRef([]);

  // Experiences are now translated dynamically
  const experiences = t("experiences", { returnObjects: true });
  const certifications = t("certifications", { returnObjects: true });
  
  // Initialize selected issuers on first render
  useEffect(() => {
    if (Object.keys(selectedIssuers).length === 0 && certifications.length > 0) {
      const uniqueIssuers = [...new Set(certifications.map(cert => cert.issuer))];
      const issuersObj = {};
      uniqueIssuers.forEach(issuer => {
        issuersObj[issuer] = true;
      });
      setSelectedIssuers(issuersObj);
    }
  }, [certifications, selectedIssuers]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(parseInt(entry.target.dataset.id));
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.current.forEach(ref => ref && observer.observe(ref));
    return () => refs.current.forEach(ref => ref && observer.unobserve(ref));
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="section" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="columns is-vcentered">

            <div className="column is-half">
              <h1 className="title is-3">{t("hero.title")}</h1>
              <p dangerouslySetInnerHTML={{ __html: t("hero.intro") }}></p>

              <p>
                {t("hero.githubText")} <a href="https://github.com/alexiscarbillet" target="_blank">github</a>.
              </p>

              <p>
                {t("hero.killercodaText")} <a href="https://killercoda.com/alexis-carbillet" target="_blank">killercoda</a> profile.
              </p>

              <p dangerouslySetInnerHTML={{ __html: t("hero.linksDescription") }}></p>

              <Social />
            </div>


            <div className="column is-half has-text-centered">
              <figure className="image is-inline-block" style={{ width: "256px", height: "256px" }}>
                <img className="is-rounded" src="/assets/images/alexis_carbillet.png" alt="Alexis Carbillet" />
              </figure>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section>
        <div className="container" style={{ paddingLeft: "4rem" }}>
          <h3 className="title is-3">{t("sections.experiences")}</h3>
        </div>

        <div className="container" style={{ display: "flex", position: "relative", padding: "2rem" }}>

          <div style={{ position: "relative", width: "50px", marginRight: "2rem" }}>
            <div style={{ position: "absolute", left: "24px", top: 0, bottom: 0, width: "2px", backgroundColor: "#ccc" }} />

            {experiences.map(exp => (
              <div
                key={exp.id}
                style={{
                  position: "absolute",
                  top: `${(exp.id - 1) * 350 + 50}px`,
                  left: "20px",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: activeId === exp.id ? "dodgerblue" : "#ccc",
                  transition: "background-color 0.3s",
                }}
              />
            ))}
          </div>

          <div style={{ flex: 1 }}>
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                data-id={exp.id}
                ref={el => refs.current[index] = el}
                className="box"
                style={{ marginBottom: "5rem" }}
              >
                <h3 className="title is-5">{exp.title}</h3>
                <p className="subtitle is-6">{exp.date}</p>
                <ul style={{ listStyleType: "disc", marginLeft: "1.5rem" }}>
                  {exp.description.map((line, i) => <li key={i}>{line}</li>)}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section className="section">
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
