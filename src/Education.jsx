import React from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next';

export default function Education() {
  const { t } = useTranslation();

  const education = [
    {
      key: 'certifications',
      title: t('sections.certifications'),
      description: 'My professional certifications in cloud, AI, and more.',
      url: '/certifications'
    },
    {
      key: 'diplomas',
      title: t('sections.diplomas'),
      description: 'My academic diplomas and degrees.',
      url: '/diplomas'
    }
  ];

  return (
    <>
      <SEO
        title="Education"
        description="Explore my certifications and diplomas."
        url="https://alexis-carbillet.com/education"
      />
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container" style={{ padding: '2rem' }}>
          <h3 className="title is-3">Education</h3>
          <p className="subtitle is-6">My educational background and certifications.</p>
          <div className="columns is-multiline">
            {education.map((item) => (
              <div className="column is-one-half" key={item.key}>
                <div className="card">
                  <div className="card-content">
                    <p className="title is-4">{item.title}</p>
                    <p className="subtitle is-6">{item.description}</p>
                    <a className="button is-primary" href={item.url}>
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