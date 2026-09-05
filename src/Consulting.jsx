import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import SEO from "./components/SEO";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faChartLine,
  faShieldHalved,
  faRobot,
  faGears,
  faMagnifyingGlass,
  faCheckCircle,
  faCertificate,
  faServer,
  faGraduationCap,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Consulting() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = t("consulting.services", { returnObjects: true }) || [];
  const processSteps = t("consulting.processSteps", { returnObjects: true }) || [];

  const getServiceIcon = (id) => {
    switch (id) {
      case "cloud-iac":
        return faCloud;
      case "sre-observability":
        return faChartLine;
      case "security-iam":
        return faShieldHalved;
      case "ai-automation":
        return faRobot;
      case "devops-cicd":
        return faGears;
      case "audits-advisory":
        return faMagnifyingGlass;
      default:
        return faCloud;
    }
  };

  return (
    <>
      <SEO
        title={t("consulting.metaTitle")}
        description={t("consulting.metaDescription")}
        url="https://alexis-carbillet.com/#/consulting"
      />
      <Navbar />

      {/* HERO SECTION */}
      <section className="section" style={{ marginTop: "50px", paddingBottom: "2rem" }}>
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-7">
              <span
                className="tag is-primary is-light is-medium"
                style={{
                  fontWeight: 600,
                  marginBottom: "1rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px"
                }}
              >
                <FontAwesomeIcon icon={faCertificate} style={{ marginRight: "0.5rem" }} />
                {t("consulting.badge")}
              </span>

              <h1 className="title is-2" style={{ lineHeight: 1.2, marginBottom: "1.25rem" }}>
                {t("consulting.heroTitle")}
              </h1>

              <p className="subtitle is-5" style={{ lineHeight: 1.6, marginBottom: "2rem" }}>
                {t("consulting.heroSubtitle")}
              </p>

              <div className="buttons are-medium" style={{ gap: "0.75rem" }}>
                <a
                  href="https://www.linkedin.com/in/alexis-carbillet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-primary"
                  style={{ fontWeight: 600 }}
                >
                  <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: "0.5rem" }} />
                  {t("consulting.ctaLinkedIn")}
                </a>
                <a
                  href="https://github.com/alexiscarbillet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-primary"
                  style={{ fontWeight: 600 }}
                >
                  <FontAwesomeIcon icon={faGithub} style={{ marginRight: "0.5rem" }} />
                  {t("consulting.ctaGitHub")}
                </a>
              </div>
            </div>

            {/* Profile / Stats summary card */}
            <div className="column is-5">
              <div className="card" style={{ borderRadius: "16px" }}>
                <div className="card-content" style={{ padding: "2rem" }}>
                  <div className="media" style={{ alignItems: "center", marginBottom: "1.5rem" }}>
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img
                          className="is-rounded"
                          src="/assets/images/alexis_carbillet.png"
                          alt="Alexis Carbillet"
                          style={{ border: "2px solid #00d1b2" }}
                        />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4" style={{ margin: 0 }}>Alexis Carbillet</p>
                      <p className="subtitle is-6 has-text-primary" style={{ margin: 0 }}>Principal SRE & AI Engineer</p>
                    </div>
                  </div>

                  <div className="columns is-multiline is-mobile" style={{ marginTop: "0.5rem" }}>
                    <div className="column is-6">
                      <div className="box" style={{ padding: "0.75rem", marginBottom: 0 }}>
                        <p className="title is-5 has-text-primary" style={{ marginBottom: "0.25rem" }}>
                          {t("consulting.stats.experience")}
                        </p>
                        <p className="is-size-7 has-text-grey">
                          {t("consulting.stats.experienceLabel")}
                        </p>
                      </div>
                    </div>
                    <div className="column is-6">
                      <div className="box" style={{ padding: "0.75rem", marginBottom: 0 }}>
                        <p className="title is-5 has-text-info" style={{ marginBottom: "0.25rem" }}>
                          <FontAwesomeIcon icon={faServer} style={{ marginRight: "0.35rem", fontSize: "0.9em" }} />
                          {t("consulting.stats.regions")}
                        </p>
                        <p className="is-size-7 has-text-grey">
                          {t("consulting.stats.regionsLabel")}
                        </p>
                      </div>
                    </div>
                    <div className="column is-6">
                      <div className="box" style={{ padding: "0.75rem", marginBottom: 0 }}>
                        <p className="title is-5 has-text-success" style={{ marginBottom: "0.25rem" }}>
                          <FontAwesomeIcon icon={faCertificate} style={{ marginRight: "0.35rem", fontSize: "0.9em" }} />
                          {t("consulting.stats.certifications")}
                        </p>
                        <p className="is-size-7 has-text-grey">
                          {t("consulting.stats.certificationsLabel")}
                        </p>
                      </div>
                    </div>
                    <div className="column is-6">
                      <div className="box" style={{ padding: "0.75rem", marginBottom: 0 }}>
                        <p className="title is-5 has-text-warning" style={{ marginBottom: "0.25rem" }}>
                          <FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: "0.35rem", fontSize: "0.9em" }} />
                          {t("consulting.stats.education")}
                        </p>
                        <p className="is-size-7 has-text-grey">
                          {t("consulting.stats.educationLabel")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section" style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div className="has-text-centered" style={{ maxWidth: "800px", margin: "0 auto 3rem auto" }}>
            <h2 className="title is-3">{t("consulting.servicesTitle")}</h2>
            <p className="subtitle is-6 has-text-grey">{t("consulting.servicesSubtitle")}</p>
          </div>

          <div className="columns is-multiline">
            {services.map((service) => (
              <div className="column is-4" key={service.id}>
                <div
                  className="card"
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: "12px",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div className="card-content" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "42px",
                          height: "42px",
                          borderRadius: "10px",
                          backgroundColor: "rgba(0, 209, 178, 0.15)",
                          color: "#00d1b2"
                        }}
                      >
                        <FontAwesomeIcon icon={getServiceIcon(service.id)} size="lg" />
                      </span>
                      <h3 className="title is-5" style={{ margin: 0 }}>{service.title}</h3>
                    </div>

                    <p className="is-size-7 has-text-grey" style={{ fontStyle: "italic", marginBottom: "0.75rem" }}>
                      {service.tagline}
                    </p>

                    <p className="is-size-6" style={{ marginBottom: "1.25rem", flexGrow: 1 }}>
                      {service.description}
                    </p>

                    <div style={{ marginBottom: "1.25rem" }}>
                      <p className="is-size-7 has-text-weight-semibold has-text-grey" style={{ marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                        Key Deliverables:
                      </p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {service.deliverables && service.deliverables.map((item, idx) => (
                          <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.4rem", fontSize: "0.85rem" }}>
                            <FontAwesomeIcon icon={faCheckCircle} className="has-text-primary" style={{ marginTop: "0.2rem", flexShrink: 0 }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", paddingTop: "0.75rem", borderTop: "1px solid rgba(128,128,128,0.2)" }}>
                      {service.tags && service.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="tag is-small is-light" style={{ borderRadius: "4px" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS / HOW WE WORK */}
      <section className="section" style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div className="has-text-centered" style={{ maxWidth: "800px", margin: "0 auto 3.5rem auto" }}>
            <h2 className="title is-3">{t("consulting.processTitle")}</h2>
            <p className="subtitle is-6 has-text-grey">{t("consulting.processSubtitle")}</p>
          </div>

          <div className="columns is-multiline">
            {processSteps.map((stepItem, sIdx) => (
              <div className="column is-3" key={sIdx}>
                <div
                  className="card"
                  style={{
                    padding: "1.75rem",
                    borderRadius: "12px",
                    height: "100%",
                    position: "relative"
                  }}
                >
                  <span
                    style={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "rgba(0, 209, 178, 0.4)",
                      lineHeight: 1,
                      display: "block",
                      marginBottom: "0.75rem"
                    }}
                  >
                    {stepItem.step}
                  </span>
                  <h3 className="title is-5" style={{ marginBottom: "0.75rem" }}>
                    {stepItem.title}
                  </h3>
                  <p className="is-size-6 has-text-grey" style={{ lineHeight: 1.5 }}>
                    {stepItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA CONTACT SECTION */}
      <section className="section" style={{ paddingBottom: "5rem" }}>
        <div className="container">
          <div
            className="has-text-centered card"
            style={{
              padding: "3.5rem 2rem",
              borderRadius: "16px",
              border: "1px solid rgba(0, 209, 178, 0.4)"
            }}
          >
            <h2 className="title is-3" style={{ marginBottom: "1rem" }}>
              {t("consulting.contactBox.title")}
            </h2>
            <p
              className="subtitle is-5 has-text-grey"
              style={{ maxWidth: "680px", margin: "0 auto 2rem auto", lineHeight: 1.6 }}
            >
              {t("consulting.contactBox.description")}
            </p>
            <div className="buttons is-centered are-medium">
              <a
                href="https://www.linkedin.com/in/alexis-carbillet/"
                target="_blank"
                rel="noopener noreferrer"
                className="button is-primary is-medium"
                style={{
                  fontWeight: "bold",
                  padding: "0.75rem 2rem"
                }}
              >
                <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: "0.75rem" }} />
                {t("consulting.contactBox.linkedinButton")}
                <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "0.75rem", fontSize: "0.85em" }} />
              </a>
              <a
                href="https://github.com/alexiscarbillet"
                target="_blank"
                rel="noopener noreferrer"
                className="button is-primary is-medium"
                style={{
                  fontWeight: "bold",
                  padding: "0.75rem 2rem"
                }}
              >
                <FontAwesomeIcon icon={faGithub} style={{ marginRight: "0.5rem" }} />
                {t("consulting.contactBox.githubButton")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
