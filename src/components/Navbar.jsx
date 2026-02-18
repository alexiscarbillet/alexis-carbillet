// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function LangSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div className="navbar-item">
      <button className="button is-small mr-2" onClick={() => i18n.changeLanguage("en")}>EN</button>
      <button className="button is-small" onClick={() => i18n.changeLanguage("fr")}>FR</button>
    </div>
  );
}

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="navbar is-fixed-top is-primary">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <strong>{t("nav.home")}</strong>
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/Projects">
            {t("nav.projects")}
          </Link>
          <Link className="navbar-item" to="/Training">
            {t("nav.training")}
          </Link>
          <Link className="navbar-item" to="/Podcasts">
            {t("nav.podcasts")}
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Websites
            </a>
            <div className="navbar-dropdown">
              <a className="navbar-item" href="https://coding.alexis-carbillet.com/" target="_blank" rel="noreferrer">
                Coding
              </a>
              <a className="navbar-item" href="https://electricity.alexis-carbillet.com/" target="_blank" rel="noreferrer">
                Electricity
              </a>
              <a className="navbar-item" href="https://hardware.alexis-carbillet.com/" target="_blank" rel="noreferrer">
                Hardware
              </a>
              <a className="navbar-item" href="https://cats.alexis-carbillet.com/" target="_blank" rel="noreferrer">
                Cats
              </a>
            </div>
          </div>
        </div>

        {/* Language Switcher on the right */}
        <div className="navbar-end">
          <LangSwitcher />
        </div>
      </div>
    </nav>
  );
}
