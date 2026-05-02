import React from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next';

export default function ProjectsScripts() {
  const { t } = useTranslation();

  const scripts = [
    { title: "Python", url: "https://github.com/alexiscarbillet/archive_code/tree/main/python_examples", descriptionKey: "projects.desc.scripts.python" },
    { title: "HTML/CSS", url: "https://github.com/alexiscarbillet/archive_code/tree/main/html_css_examples", descriptionKey: "projects.desc.scripts.htmlCss" },
    { title: "JavaScript", url: "https://github.com/alexiscarbillet/archive_code/tree/main/javascript_examples", descriptionKey: "projects.desc.scripts.javascript" },
    { title: "Go", url: "https://github.com/alexiscarbillet/archive_code/tree/main/go_examples", descriptionKey: "projects.desc.scripts.go" },
    { title: "React", url: "https://github.com/alexiscarbillet/archive_code/tree/main/react_examples", descriptionKey: "projects.desc.scripts.react" },
    { title: "Bash", url: "https://github.com/alexiscarbillet/archive_code/tree/main/bash_examples", descriptionKey: "projects.desc.scripts.bash" },
  ];

  return (
    <>
      <SEO
        title="Code Examples & Scripts"
        description="Code snippets and examples in Python, JavaScript, Go, React, Bash, and more."
        url="https://alexis-carbillet.com/projects/scripts"
      />
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container" style={{ padding: '2rem' }}>
          <h3 className="title is-3">{t("projects.scripts")}</h3>
          <p className="subtitle is-6">Code examples and scripts across various programming languages.</p>
          <div className="columns is-multiline">
            {scripts.map((item, idx) => (
              <div className="column is-one-third-tablet is-half-mobile" key={idx}>
                <div className="card">
                  <div className="card-content">
                    <p className="title" style={{ wordBreak: 'normal' }}>{item.title}</p>
                    {item.descriptionKey && <p className="subtitle is-6">{t(item.descriptionKey)}</p>}
                    <a className="button is-primary is-outlined" href={item.url} target="_blank" rel="noopener noreferrer">
                      {t("projects.githubButton")}
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
