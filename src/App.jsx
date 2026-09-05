import React from "react";
import "bulma/css/bulma.min.css";
import Navbar from "./components/Navbar";
import Social from "./components/Social";
import SEO from "./components/SEO";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ExperienceTimeline() {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title=""
        description="Cloud & AI engineer with 10+ years of experience. Explore my projects, certifications, and digital toolkits for IT operations, security, and AI governance."
      />
      <Navbar />

      {/* HERO SECTION */}
      <section className="section" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="columns is-vcentered">

            <div className="column is-half">
              <h1 className="title is-3">{t("hero.title")}</h1>
              <p dangerouslySetInnerHTML={{ __html: t("hero.intro") }}></p>

              <p>
                {t("hero.resumeText")} <Link to="/resume">{t("hero.resumeLink")}</Link>.
              </p>

              <p>
                {t("hero.consultingText")} <Link to="/consulting">{t("hero.consultingLink")}</Link>.
              </p>

              <p>
                {t("hero.githubText")} <a href="https://github.com/alexiscarbillet" target="_blank" rel="noreferrer">github</a> {t("hero.linkedinText")} <a href="https://www.linkedin.com/in/alexis-carbillet/" target="_blank" rel="noreferrer">linkedin</a>. 
              </p>

              <p>
                {t("hero.killercodaText")} <a href="https://killercoda.com/alexis-carbillet" target="_blank">killercoda</a>.
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

    </>
  );
}
