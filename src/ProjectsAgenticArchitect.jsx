import React from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next';

export default function ProjectsAgenticArchitect() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title="AgenticArchitect"
        description="An AI-powered enterprise IT architecture studio with 12 specialized domain agents leveraging the Gemini API."
        url="https://alexis-carbillet.com/projects/agentic-architect"
      />
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container" style={{ padding: '2rem' }}>
          <h3 className="title is-3">{t("projects.agenticArchitect.title")}</h3>
          <p className="subtitle is-6">{t("projects.agenticArchitect.subtitle")}</p>
          <div className="content">
            <p>
              {t("projects.agenticArchitect.description")}
            </p>
            <p>
              <strong>{t("projects.agenticArchitect.featuresTitle")}</strong>
            </p>
            <ul>
              {t("projects.agenticArchitect.features", { returnObjects: true }).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <p>
              {t("projects.agenticArchitect.conclusion")}
            </p>
            <div className="notification is-warning is-light" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
              <span>{t("projects.agenticArchitect.privateNote")}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
