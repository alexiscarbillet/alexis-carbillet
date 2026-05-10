import React from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      key: 'android',
      title: 'Android Apps',
      description: 'Collection of Android applications I developed.',
      url: '/projects/android'
    },
    {
      key: 'docker',
      title: 'Docker Containers',
      description: 'Docker images for development and data science.',
      url: '/projects/docker'
    },
    {
      key: 'firefox',
      title: 'Firefox Plugins',
      description: 'Mozilla Firefox extensions and add-ons.',
      url: '/projects/firefox'
    },
    {
      key: 'helm',
      title: 'Helm Charts',
      description: 'Kubernetes Helm charts for deployment.',
      url: '/projects/helm'
    },
    {
      key: 'scripts',
      title: 'Scripts',
      description: 'Useful scripts in various languages.',
      url: '/projects/scripts'
    },
    {
      key: 'vscode',
      title: 'VSCode Extensions',
      description: 'Extensions for Visual Studio Code.',
      url: '/projects/vscode'
    },
    {
      key: 'ai-newsletter',
      title: 'AI Newsletter',
      description: 'Automated AI-powered newsletter generation.',
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
          <h3 className="title is-3">{t("nav.projects")}</h3>
          <p className="subtitle is-6">A showcase of my projects and contributions.</p>
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