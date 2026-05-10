import React from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next';

export default function Podcasts() {
  const { t } = useTranslation();

  const podcasts = [
    {
      key: 'ai',
      title: t('nav.podcasts.ai'),
      description: t('podcast.spotifyDescription'),
      url: '/ai-podcasts'
    },
    {
      key: 'cloud',
      title: t('nav.podcasts.cloud'),
      description: t('podcast.spotifyDescriptionCloud'),
      url: '/cloud-podcasts'
    }
  ];

  return (
    <>
      <SEO
        title="Podcasts"
        description="Explore my podcasts on AI and Cloud Computing."
        url="https://alexis-carbillet.com/podcasts"
      />
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container" style={{ padding: '2rem' }}>
          <h3 className="title is-3">Podcasts</h3>
          <p className="subtitle is-6">Listen to my podcasts on various topics.</p>
          <div className="columns is-multiline">
            {podcasts.map((podcast) => (
              <div className="column is-one-half" key={podcast.key}>
                <div className="card">
                  <div className="card-content">
                    <p className="title is-4">{podcast.title}</p>
                    <p className="subtitle is-6">{podcast.description}</p>
                    <a className="button is-primary" href={podcast.url}>
                      {t("buttons.play")}
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