import React from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next';

export default function Training() {
  const { t } = useTranslation();

  const trainings = [
    {
      key: 'cka',
      title: 'CKA Training',
      description: t('overviews.training.cka'),
      url: '/training/cka'
    },
    {
      key: 'linux',
      title: 'Linux Training',
      description: t('overviews.training.linux'),
      url: '/training/linux'
    }
  ];

  return (
    <>
      <SEO
        title="Training"
        description="Explore my training scenarios for CKA and Linux."
        url="https://alexis-carbillet.com/training"
      />
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container" style={{ padding: '2rem' }}>
          <h3 className="title is-3">{t("overviews.training.header")}</h3>
          <p className="subtitle is-6">{t("overviews.training.subtitle")}</p>
          <div className="columns is-multiline">
            {trainings.map((training) => (
              <div className="column is-one-half" key={training.key}>
                <div className="card">
                  <div className="card-content">
                    <p className="title is-4">{training.title}</p>
                    <p className="subtitle is-6">{training.description}</p>
                    <a className="button is-primary" href={training.url}>
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