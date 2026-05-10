import React, { useState } from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next';

export default function PodcastCloud() {
  const { t } = useTranslation();

  const spotifyShowUrl = "https://open.spotify.com/show/033dJZ8aLqqPvnYYgNCX8V";
  const getEmbedUrl = (url) => {
    const [base] = url.split('?');
    return base.replace("open.spotify.com/episode/", "open.spotify.com/embed/episode/");
  };

  const cloudPodcast = [
    { titleKey: "podcast.cloud.podcast1", url: "https://open.spotify.com/episode/76aU5UrV7TYszsMniP2BJ5" },
    { titleKey: "podcast.cloud.podcast2", url: "https://open.spotify.com/episode/46srkTDjC9wQeFQGo1UshF" },
    { titleKey: "podcast.cloud.podcast3", url: "https://open.spotify.com/episode/3KBSppzHaNcl8ZIfCMcvBg" },
    { titleKey: "podcast.cloud.podcast4", url: "https://open.spotify.com/episode/0YrnHcD5BdFx30oOraRyg5" },
    { titleKey: "podcast.cloud.podcast5", url: "https://open.spotify.com/episode/2pzUTmwMOnCEiJ0yvQFj0o" },
    { titleKey: "podcast.cloud.podcast6", url: "https://open.spotify.com/episode/3oMyrqvkcdkmajaVv2DKj9" },
    { titleKey: "podcast.cloud.podcast7", url: "https://open.spotify.com/episode/0fii3V4POTMyBZ4bYN24VP" },
    { titleKey: "podcast.cloud.podcast8", url: "https://open.spotify.com/episode/4MAax6UHhPI2hEFMYestTB" },
    { titleKey: "podcast.cloud.podcast9", url: "https://open.spotify.com/episode/4v7W7MjMoBJD9FYUYENSKJ" },
    { titleKey: "podcast.cloud.podcast10", url: "https://open.spotify.com/episode/0xHMseyzwGpIbBqBrVdzwC" },
  ];

  const [selectedEpisode, setSelectedEpisode] = useState(cloudPodcast[0]);

  const renderCardsInRows = (items) => {
    const rows = [];
    for (let i = 0; i < items.length; i += 4) {
      const rowItems = items.slice(i, i + 4);
      rows.push(
        <div className="columns" key={i}>
          {rowItems.map((item, idx) => (
            <div className="column" key={idx}>
              <div
                className="card"
                style={{
                  backgroundColor: selectedEpisode.url === item.url ? '#1e2230' : '#171717',
                  borderColor: selectedEpisode.url === item.url ? '#3273dc' : '#2a2a2a',
                  color: '#f5f5f5'
                }}
              >
                <div className="card-content">
                  <p className="title" style={{ wordBreak: 'normal', color: '#f5f5f5' }}>{t(item.titleKey)}</p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      className={`button ${selectedEpisode.url === item.url ? 'is-link' : 'is-primary is-outlined'}`}
                      onClick={() => setSelectedEpisode(item)}
                    >
                      {selectedEpisode.url === item.url ? t('buttons.playing') : t('buttons.play')}
                    </button>
                    <a className={`button ${selectedEpisode.url === item.url ? 'is-link' : 'is-primary is-outlined'}`} href={item.url} target="_blank" rel="noopener noreferrer">
                      {t("buttons.spotify")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <>
      <SEO
        title="Hyperscaler Showdown"
        description="Hyperscaler Showdown is a Spotify podcast about hyperscaler strategy, cloud provider comparisons, and modern infrastructure trends."
        url="https://alexis-carbillet.com/cloud-podcasts"
      />
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container" style={{ padding: '2rem' }}>
          <h3 className="title is-3">{t("podcast.cloudHeader")}</h3>
          <p className="subtitle is-6">{t("podcast.spotifyDescriptionCloud")}</p>
          <div className="box" style={{ marginBottom: '2rem' }}>
            <p className="subtitle is-6" style={{ marginBottom: '1rem' }}>
              {t('podcast.currentlyListening')} {t(selectedEpisode.titleKey)}
            </p>
            <iframe
              title={`Hyperscaler Showdown episode ${selectedEpisode.titleKey}`}
              src={getEmbedUrl(selectedEpisode.url)}
              width="100%"
              height="232"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <p style={{ marginBottom: '1rem' }}>
            <a className="button is-link is-outlined" href={spotifyShowUrl} target="_blank" rel="noopener noreferrer">
              {t("buttons.spotify")}
            </a>
          </p>
          {renderCardsInRows(cloudPodcast)}
        </div>
      </section>
    </>
  );
}
