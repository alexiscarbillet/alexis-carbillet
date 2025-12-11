import React, { useEffect, useRef, useState } from "react";
import "bulma/css/bulma.min.css";
import Navbar from "./components/Navbar";
import Social from "./components/Social";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ExperienceTimeline() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState(null);
  const refs = useRef([]);

  // Experiences are now translated dynamically
  const experiences = t("experiences", { returnObjects: true });

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
                {exp.description.split("\n").map((line, i) => <p key={i}>{line}</p>)}
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
          <div className="columns is-multiline">
            {t("certifications", { returnObjects: true }).map((cert, i) => (
              <div className="column is-one-third" key={i}>
                <div className="card">
                  <div className="card-content">
                    <p className="title">{cert.title}</p>
                    <p>{cert.org}</p>
                    <button className="button is-primary is-outlined">
                      <a href={cert.link} target="_blank" rel="noreferrer">{t("buttons.website")}</a>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container" style={{ padding: "2rem" }}>
          <h3 className="title is-4">
            {t("footer.more")}{" "}
            <Link to="/projects">{t("nav.projects")}</Link>, {" "}
            <Link to="/training">{t("nav.training")}</Link> {t("footer.and")}{" "}
            <Link to="/podcasts">{t("nav.podcasts")}</Link>.
          </h3>
        </div>
      </section>
    </>
  );
}
