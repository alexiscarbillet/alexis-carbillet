import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import SEO from "./components/SEO";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faCertificate,
  faExternalLinkAlt,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Resume() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedIssuers, setSelectedIssuers] = useState({});
  const refs = useRef([]);

  const experiences = t("experiences", { returnObjects: true }) || [];
  const diplomas = t("diplomas", { returnObjects: true }) || [];
  const certifications = t("certifications", { returnObjects: true }) || [];

  // Initialize selected issuers for certifications filter
  useEffect(() => {
    if (Object.keys(selectedIssuers).length === 0 && Array.isArray(certifications) && certifications.length > 0) {
      const issuersObj = {};
      certifications.forEach(cert => {
        issuersObj[cert.issuer] = true;
      });
      setSelectedIssuers(issuersObj);
    }
  }, [certifications, selectedIssuers]);

  // Handle resize for responsive timeline
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // IntersectionObserver for timeline dots
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

    const currentRefs = refs.current;
    currentRefs.forEach(ref => ref && observer.observe(ref));
    return () => currentRefs.forEach(ref => ref && observer.unobserve(ref));
  }, [experiences]);

  const toggleIssuer = (issuer) => {
    const issuersObj = {};
    uniqueIssuers.forEach(currentIssuer => {
      issuersObj[currentIssuer] = currentIssuer === issuer;
    });
    setSelectedIssuers(issuersObj);
  };

  const selectAllIssuers = () => {
    const issuersObj = {};
    certifications.forEach(cert => {
      issuersObj[cert.issuer] = true;
    });
    setSelectedIssuers(issuersObj);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const uniqueIssuers = [...new Set(certifications.map(cert => cert.issuer))].sort();

  return (
    <>
      <SEO
        title={t("resume.metaTitle")}
        description={t("resume.metaDescription")}
        url="https://alexis-carbillet.com/#/resume"
      />
      <Navbar />

      {/* HEADER SECTION */}
      <section className="section" style={{ marginTop: "50px", paddingBottom: "1.5rem" }}>
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-8">
              <h1 className="title is-2" style={{ marginBottom: "0.5rem" }}>
                {t("resume.header")}
              </h1>
              <p className="subtitle is-5 has-text-grey" style={{ marginBottom: "1.5rem" }}>
                {t("resume.subtitle")}
              </p>

              <div className="buttons are-small" style={{ gap: "0.5rem", marginBottom: "1rem" }}>
                <button type="button" onClick={() => scrollToSection("experience")} className="button is-dark is-rounded">
                  <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: "0.4rem" }} />
                  {t("resume.sections.experience")}
                </button>
                <button type="button" onClick={() => scrollToSection("education")} className="button is-dark is-rounded">
                  <FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: "0.4rem" }} />
                  {t("resume.sections.education")}
                </button>
                <button type="button" onClick={() => scrollToSection("certifications")} className="button is-dark is-rounded">
                  <FontAwesomeIcon icon={faCertificate} style={{ marginRight: "0.4rem" }} />
                  {t("resume.sections.certifications")}
                </button>
              </div>
            </div>

            <div className="column is-4 has-text-right-tablet">
              <div className="buttons is-inline-flex">
                <a
                  href="https://www.linkedin.com/in/alexis-carbillet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-primary"
                  style={{ fontWeight: 600 }}
                >
                  <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: "0.5rem" }} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/alexiscarbillet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-primary"
                  style={{ fontWeight: 600 }}
                >
                  <FontAwesomeIcon icon={faGithub} style={{ marginRight: "0.5rem" }} />
                  GitHub
                </a>
                <Link to="/consulting" className="button is-primary" style={{ fontWeight: 600 }}>
                  {t("nav.consulting")}
                  <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "0.5rem" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr style={{ margin: "0 2rem 2rem 2rem", opacity: 0.15 }} />

      {/* 1. PROFESSIONAL EXPERIENCE SECTION */}
      <section id="experience" className="section" style={{ paddingTop: "1rem", paddingBottom: "3rem" }}>
        <div className="container" style={{ paddingLeft: isMobile ? "1rem" : "2rem", marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: "rgba(0, 209, 178, 0.15)",
                color: "#00d1b2"
              }}
            >
              <FontAwesomeIcon icon={faBriefcase} size="lg" />
            </span>
            <h2 className="title is-3" style={{ margin: 0 }}>
              {t("resume.sections.experience")}
            </h2>
          </div>
        </div>

        <div className="container" style={{ position: "relative", padding: isMobile ? "1rem" : "2rem" }}>
          {/* Timeline continuous vertical line - hidden on mobile */}
          {!isMobile && (
            <div
              style={{
                position: "absolute",
                left: "calc(2rem + 24px)",
                top: "2rem",
                bottom: "2rem",
                width: "2px",
                backgroundColor: "rgba(128, 128, 128, 0.3)"
              }}
            />
          )}

          <div>
            {experiences.map((exp, index) => {
              const currentId = exp.id || index + 1;
              return (
                <div
                  key={currentId}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: index === experiences.length - 1 ? 0 : "3rem",
                    position: "relative"
                  }}
                >
                  {!isMobile && (
                    <div
                      style={{
                        width: "50px",
                        marginRight: "2rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0
                      }}
                    >
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          backgroundColor: activeId === currentId ? "#00d1b2" : "#888",
                          boxShadow: activeId === currentId ? "0 0 0 4px rgba(0, 209, 178, 0.25)" : "none",
                          zIndex: 1,
                          transition: "all 0.3s ease",
                          transform: activeId === currentId ? "scale(1.2)" : "scale(1)"
                        }}
                      />
                    </div>
                  )}

                  <div
                    data-id={currentId}
                    ref={el => refs.current[index] = el}
                    className="card"
                    style={{
                      flex: 1,
                      borderRadius: "12px",
                      borderLeft: isMobile ? (activeId === currentId ? "4px solid #00d1b2" : "4px solid #555") : "1px solid rgba(255, 255, 255, 0.08)"
                    }}
                  >
                    <div className="card-content" style={{ padding: "1.75rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
                        <h3 className="title is-4" style={{ margin: 0 }}>{exp.title}</h3>
                        <span className="tag is-primary is-light" style={{ fontWeight: 600 }}>{exp.date}</span>
                      </div>

                      <ul style={{ listStyleType: "disc", marginLeft: "1.5rem", marginTop: "1rem" }}>
                        {exp.description && exp.description.map((line, i) => (
                          <li key={i} style={{ marginBottom: "0.5rem", lineHeight: 1.6 }}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <hr style={{ margin: "0 2rem 2rem 2rem", opacity: 0.15 }} />

      {/* 2. EDUCATION SECTION */}
      <section id="education" className="section" style={{ paddingTop: "1rem", paddingBottom: "3rem" }}>
        <div className="container" style={{ paddingLeft: isMobile ? "1rem" : "2rem", marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: "rgba(0, 209, 178, 0.15)",
                color: "#00d1b2"
              }}
            >
              <FontAwesomeIcon icon={faGraduationCap} size="lg" />
            </span>
            <h2 className="title is-3" style={{ margin: 0 }}>
              {t("resume.sections.education")}
            </h2>
          </div>
        </div>

        <div className="container" style={{ padding: isMobile ? "1rem" : "2rem" }}>
          <div className="columns is-multiline">
            {diplomas.map((diploma, i) => (
              <div className="column is-full" key={i}>
                <div className="card" style={{ borderRadius: "12px" }}>
                  <div className="card-content" style={{ padding: "1.75rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                      <div>
                        <h3 className="title is-4" style={{ marginBottom: "0.35rem" }}>{diploma.title}</h3>
                        <p className="subtitle is-6 has-text-primary" style={{ margin: 0 }}>{diploma.issuer}</p>
                      </div>
                      <a className="button is-primary" href={diploma.url} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginRight: "0.5rem" }} />
                        {t("buttons.website")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ margin: "0 2rem 2rem 2rem", opacity: 0.15 }} />

      {/* 3. CERTIFICATIONS SECTION */}
      <section id="certifications" className="section" style={{ paddingTop: "1rem", paddingBottom: "4rem" }}>
        <div className="container" style={{ paddingLeft: isMobile ? "1rem" : "2rem", marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: "rgba(0, 209, 178, 0.15)",
                color: "#00d1b2"
              }}
            >
              <FontAwesomeIcon icon={faCertificate} size="lg" />
            </span>
            <h2 className="title is-3" style={{ margin: 0 }}>
              {t("resume.sections.certifications")}
            </h2>
          </div>
        </div>

        <div className="container" style={{ padding: isMobile ? "1rem" : "2rem" }}>
          {/* Issuer Filters */}
          <div style={{ marginBottom: "2rem" }}>
            <p style={{ marginBottom: "0.75rem", fontWeight: "bold" }}>
              {t("resume.filterByIssuer")}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              <button
                className="button is-small is-dark"
                onClick={selectAllIssuers}
                style={{ fontWeight: 600 }}
              >
                {t("resume.allIssuers")}
              </button>
              {uniqueIssuers.map(issuer => (
                <button
                  key={issuer}
                  className={`button is-small ${selectedIssuers[issuer] ? "is-primary" : "is-light"}`}
                  onClick={() => toggleIssuer(issuer)}
                >
                  {issuer}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="columns is-multiline">
            {certifications
              .filter(cert => selectedIssuers[cert.issuer])
              .map((cert, i) => (
                <div className="column is-4" key={i}>
                  <div
                    className="card"
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: "12px"
                    }}
                  >
                    <div className="card-content" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                      <p className="title is-5" style={{ marginBottom: "0.5rem" }}>{cert.title}</p>
                      <p className="subtitle is-6 has-text-grey" style={{ marginBottom: "1.5rem", flexGrow: 1 }}>{cert.issuer}</p>
                      <div>
                        <a className="button is-primary is-small" href={cert.url} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginRight: "0.4rem" }} />
                          {t("buttons.website")}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="section" style={{ paddingBottom: "4rem" }}>
        <div className="container">
          <div
            className="card has-text-centered"
            style={{
              padding: "2.5rem 1.5rem",
              borderRadius: "16px",
              border: "1px solid rgba(0, 209, 178, 0.4)"
            }}
          >
            <h3 className="title is-4" style={{ marginBottom: "0.75rem" }}>
              {t("resume.contactCta")} <Link to="/consulting">{t("resume.contactCtaLink")}</Link>
            </h3>
            <p className="subtitle is-6 has-text-grey" style={{ marginBottom: "1.5rem" }}>
              {t("resume.orConnect")}{" "}
              <a href="https://www.linkedin.com/in/alexis-carbillet/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </p>
            <div className="buttons is-centered">
              <Link to="/consulting" className="button is-primary" style={{ fontWeight: 600 }}>
                {t("nav.consulting")}
                <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "0.5rem" }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
