import React from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next';

export default function DigitalAssets() {
  const { t } = useTranslation();

  const assets = [
    {
      key: 'toolkits',
      title: 'Toolkits',
      description: 'Digital toolkits for IT consultants and managers.',
      url: '/digital-assets-toolkits'
    }
  ];

  return (
    <>
      <SEO
        title="Digital Assets"
        description="Explore my digital assets and toolkits."
        url="https://alexis-carbillet.com/digital-assets"
      />
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container" style={{ padding: '2rem' }}>
          <h3 className="title is-3">{t("nav.digital-assets")}</h3>
          <p className="subtitle is-6">Digital assets and resources for professionals.</p>
          <div className="columns is-multiline">
            {assets.map((asset) => (
              <div className="column is-one-half" key={asset.key}>
                <div className="card">
                  <div className="card-content">
                    <p className="title is-4">{asset.title}</p>
                    <p className="subtitle is-6">{asset.description}</p>
                    <a className="button is-primary" href={asset.url}>
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