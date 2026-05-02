import React from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next';

export default function ProjectsAINewsletter() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title="AI Newsletter"
        description="An AI-powered newsletter providing intelligent insights and analysis for investment decisions."
        url="https://alexis-carbillet.com/projects/ai-newsletter"
      />
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container" style={{ padding: '2rem' }}>
          <h3 className="title is-3">{t("projects.aiNewsletter.title")}</h3>
          <p className="subtitle is-6">{t("projects.aiNewsletter.subtitle")}</p>
          <div className="content">
            <p>
              {t("projects.aiNewsletter.description")}
            </p>
            <p>
              {t("projects.aiNewsletter.featuresTitle")}
            </p>
            <ul>
              {t("projects.aiNewsletter.features", { returnObjects: true }).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <p>
              {t("projects.aiNewsletter.conclusion")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}