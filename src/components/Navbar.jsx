// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function LangSwitcher() {
  const { i18n, t } = useTranslation();
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <a className="navbar-link" role="button">{t("nav.language")}</a>
      <div className="navbar-dropdown is-right">
        <a className="navbar-item" role="button" onClick={() => changeLanguage("en")}>EN</a>
        <a className="navbar-item" role="button" onClick={() => changeLanguage("fr")}>FR</a>
        <a className="navbar-item" role="button" onClick={() => changeLanguage("es")}>ES</a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar is-fixed-top is-primary">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/" onClick={closeMenu}>
          <strong>{t("nav.home")}</strong>
        </Link>
        <a
          role="button"
          className={`navbar-burger ${isMenuOpen ? "is-active" : ""}`}
          aria-label="toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}>
        <div className="navbar-start">

          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" to="/education" onClick={closeMenu}>
              Education
            </Link>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/certifications" onClick={closeMenu}>
                {t("sections.certifications")}
              </Link>
              <Link className="navbar-item" to="/diplomas" onClick={closeMenu}>
                {t("sections.diplomas")}
              </Link>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" to="/podcasts" onClick={closeMenu}>
              {t("nav.podcasts")}
            </Link>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/ai-podcasts" onClick={closeMenu}>
                {t("nav.podcasts.ai")}
              </Link>
              <Link className="navbar-item" to="/cloud-podcasts" onClick={closeMenu}>
                {t("nav.podcasts.cloud")}
              </Link>
            </div>
          </div>
          
          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" to="/projects" onClick={closeMenu}>{t("nav.projects")}</Link>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/projects/android" onClick={closeMenu}>Android Apps</Link>
              <Link className="navbar-item" to="/projects/docker" onClick={closeMenu}>Docker Containers</Link>
              <Link className="navbar-item" to="/projects/firefox" onClick={closeMenu}>Firefox Plugins</Link>
              <Link className="navbar-item" to="/projects/helm" onClick={closeMenu}>Helm Charts</Link>
              <Link className="navbar-item" to="/projects/scripts" onClick={closeMenu}>Scripts</Link>
              <Link className="navbar-item" to="/projects/vscode" onClick={closeMenu}>VSCode Extensions</Link>
              <Link className="navbar-item" to="/projects/ai-newsletter" onClick={closeMenu}>AI Newsletter</Link>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" to="/digital-assets" onClick={closeMenu}>
              {t("nav.digital-assets")}
            </Link>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/digital-assets-toolkits" onClick={closeMenu}>
                Toolkits
              </Link>
              <Link className="navbar-item" to="/digital-assets-ebooks" onClick={closeMenu}>
                Ebooks
              </Link>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" to="/training" onClick={closeMenu}>{t("nav.training")}</Link>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/training/cka" onClick={closeMenu}>CKA</Link>
              <Link className="navbar-item" to="/training/linux" onClick={closeMenu}>Linux</Link>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" to="/websites" onClick={closeMenu}>
              Websites
            </Link>
            <div className="navbar-dropdown">
              <a className="navbar-item" href="https://blog.alexis-carbillet.com/blog/category/tech/" target="_blank" rel="noopener noreferrer">{t("websites.blog.title")}</a>
              <a className="navbar-item" href="https://cats.alexis-carbillet.com/" target="_blank" rel="noopener noreferrer">{t("websites.cats.title")}</a>
              <a className="navbar-item" href="https://coding.alexis-carbillet.com/" target="_blank" rel="noopener noreferrer">{t("websites.coding.title")}</a>
              <a className="navbar-item" href="https://electricity.alexis-carbillet.com/" target="_blank" rel="noopener noreferrer">{t("websites.electricity.title")}</a>
              <a className="navbar-item" href="https://hardware.alexis-carbillet.com/" target="_blank" rel="noopener noreferrer">{t("websites.hardware.title")}</a>
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
