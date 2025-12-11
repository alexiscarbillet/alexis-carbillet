import React from "react";
import Navbar from './components/Navbar';
import { useTranslation } from 'react-i18next';

export default function Podcast() {
  const { t } = useTranslation();

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

  const renderCardsInRows = (items) => {
    const rows = [];
    for (let i = 0; i < items.length; i += 4) {
      const rowItems = items.slice(i, i + 4);
      rows.push(
        <div className="columns" key={i}>
          {rowItems.map((item, idx) => (
            <div className="column" key={idx}>
              <div className="card">
                <div className="card-content">
                  <p className="title" style={{ wordBreak: 'normal' }}>{t(item.titleKey)}</p>
                  <button className="button is-primary is-outlined">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">{t("Spotify")}</a>
                  </button>
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
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container" style={{ padding: '2rem' }}>
          <h3 className="title is-3">{t("podcast.aiHeader")}</h3>
          {renderCardsInRows(aiPodcast)}
        </div>
      </section>
    </>
  );
}
