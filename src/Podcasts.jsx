import React, { useState } from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next';

export default function AIPodcast() {
  const { t } = useTranslation();

  const spotifyShowUrl = "https://open.spotify.com/show/20P3V99Sola1mSj0uxTwhO";
  const getEmbedUrl = (url) => {
    const [base] = url.split('?');
    return base.replace("open.spotify.com/episode/", "open.spotify.com/embed/episode/");
  };

  const aiPodcast = [
    { titleKey: "podcast.ai.podcast1", url: "https://open.spotify.com/episode/7ndu1IpyXJxE83SLOOg0FC?si=qJQErBfeS8GntgQ28WPQmg" },
    { titleKey: "podcast.ai.podcast2", url: "https://open.spotify.com/episode/3gBxAkwGMDH4TI7LyFGnOe?si=cTrtp96cRYSU1AFciU1HDA" },
    { titleKey: "podcast.ai.podcast3", url: "https://open.spotify.com/episode/5tyd2bX9HxbaYgmHCMno1f?si=FlSs-DX9SDahTGOezRUOyA" },
    { titleKey: "podcast.ai.podcast4", url: "https://open.spotify.com/episode/2KY8faXz0vpNpfiv3xYyKX?si=ZpOTUdauRS2DFu0Fh8X5wg" },
    { titleKey: "podcast.ai.podcast5", url: "https://open.spotify.com/episode/6Tv2PSczIY5RFCYaUrzI14?si=9mAB5_0qSaW-CVVTlYkn9A" },
    { titleKey: "podcast.ai.podcast6", url: "https://open.spotify.com/episode/7JOHtq3LpLpqqDxRMzpW56?si=9tBNS3SuT5-PQyFMPjqznQ" },
    { titleKey: "podcast.ai.podcast7", url: "https://open.spotify.com/episode/0mze5yRXX8Jv8iVkHfekXB?si=QlbKMKLxRneWkOBJTGTJDA" },
    { titleKey: "podcast.ai.podcast8", url: "https://open.spotify.com/episode/4xCGxog0c9FStIVVRXiNUk?si=0btQ3MKpRsyJI6LtYajw4Q" },
  ];

  const [selectedEpisode, setSelectedEpisode] = useState(aiPodcast[0]);

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
        title="AI Podcast"
        description="Listen to the AI podcast series on Spotify, covering what AI is, how it works, and where it's going."
        url="https://alexis-carbillet.com/ai-podcasts"
      />
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container" style={{ padding: '2rem' }}>
          <h3 className="title is-3">{t("podcast.aiHeader")}</h3>
          <p className="subtitle is-6">{t("podcast.spotifyDescription")}</p>
          <div className="box" style={{ marginBottom: '2rem' }}>
            <p className="subtitle is-6" style={{ marginBottom: '1rem' }}>
              {t('podcast.currentlyListening')} {t(selectedEpisode.titleKey)}
            </p>
            <iframe
              title={`AI Podcast episode ${selectedEpisode.titleKey}`}
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
          {renderCardsInRows(aiPodcast)}
        </div>
      </section>
    </>
  );
}
