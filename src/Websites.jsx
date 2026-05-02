import React from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next';

export default function Websites() {
  const { t } = useTranslation();

  const websites = [
    {
      key: 'blog',
      url: 'https://blog.alexis-carbillet.com/blog/category/tech/',
      image: '/assets/images/blog.png' // Assuming we have images
    },
    {
      key: 'cats',
      url: 'https://cats.alexis-carbillet.com/',
      image: '/assets/images/cats.png'
    },
    {
      key: 'coding',
      url: 'https://coding.alexis-carbillet.com/',
      image: '/assets/images/coding.png'
    },
    {
      key: 'electricity',
      url: 'https://electricity.alexis-carbillet.com/',
      image: '/assets/images/electricity.png'
    },
    {
      key: 'hardware',
      url: 'https://hardware.alexis-carbillet.com/',
      image: '/assets/images/hardware.png'
    }
  ];

  return (
    <>
      <SEO
        title="Websites"
        description="Explore my various websites covering tech, cats, coding projects, electricity, and hardware."
        url="https://alexis-carbillet.com/websites"
      />
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container" style={{ padding: '2rem' }}>
          <h3 className="title is-3">{t("websites.header")}</h3>
          <p className="subtitle is-6">{t("websites.description")}</p>
          <div className="columns is-multiline">
            {websites.map((site) => (
              <div className="column is-one-third" key={site.key}>
                <div className="card">
                  <div className="card-content">
                    <p className="title is-4">{t(`websites.${site.key}.title`)}</p>
                    <p className="subtitle is-6">{t(`websites.${site.key}.description`)}</p>
                    <a className="button is-primary" href={site.url} target="_blank" rel="noopener noreferrer">
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