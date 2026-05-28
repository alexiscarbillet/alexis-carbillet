import React from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      key: 'android',
      title: t('projects.androidApps'),
      description: t('overviews.projects.android'),
      url: '/projects/android'
    },
    {
      key: 'docker',
      title: t('projects.dockerContainers'),
      description: t('overviews.projects.docker'),
      url: '/projects/docker'
    },
    {
      key: 'firefox',
      title: t('projects.firefoxPlugins'),
      description: t('overviews.projects.firefox'),
      url: '/projects/firefox'
    },
    {
      key: 'helm',
      title: t('projects.helmCharts'),
      description: t('overviews.projects.helm'),
      url: '/projects/helm'
    },
    {
      key: 'scripts',
      title: t('projects.scripts'),
      description: t('overviews.projects.scripts'),
      url: '/projects/scripts'
    },
    {
      key: 'vscode',
      title: t('projects.vscodeExtensions'),
      description: t('overviews.projects.vscode'),
      url: '/projects/vscode'
    },
    {
      key: 'ai-newsletter',
      title: t('projects.aiNewsletter.title'),
      description: t('projects.aiNewsletter.description'),
      url: '/projects/ai-newsletter'
    }
  ];

  return (
    <>
      <SEO
        title="Projects"
        description="Explore my various projects in software development."
        url="https://alexis-carbillet.com/projects"
      />
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container" style={{ padding: '2rem' }}>
          <h3 className="title is-3">{t("overviews.projects.header")}</h3>
          <p className="subtitle is-6">{t("overviews.projects.subtitle")}</p>
          <div className="columns is-multiline">
            {projects.map((project) => (
              <div className="column is-one-third" key={project.key}>
                <div className="card">
                  <div className="card-content">
                    <p className="title is-4">{project.title}</p>
                    <p className="subtitle is-6">{project.description}</p>
                    <a className="button is-primary" href={project.url}>
                      {t("buttons.website")}
                    </a>
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