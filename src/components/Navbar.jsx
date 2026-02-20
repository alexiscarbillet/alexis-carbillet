// src/components/Navbar.jsx
import { useState } from "react";
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
            <a className="navbar-link">
              Education
            </a>
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
            <a className="navbar-link">
              {t("nav.podcasts")}
            </a>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/ai-podcasts" onClick={closeMenu}>
                Artificial Intelligence
              </Link>
            </div>
          </div>
          
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">{t("nav.projects")}</a>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/projects/android" onClick={closeMenu}>Android Apps</Link>
              <Link className="navbar-item" to="/projects/docker" onClick={closeMenu}>Docker Containers</Link>
              <Link className="navbar-item" to="/projects/firefox" onClick={closeMenu}>Firefox Plugins</Link>
              <Link className="navbar-item" to="/projects/helm" onClick={closeMenu}>Helm Charts</Link>
              <Link className="navbar-item" to="/projects/scripts" onClick={closeMenu}>Scripts</Link>
              <Link className="navbar-item" to="/projects/vscode" onClick={closeMenu}>VSCode Extensions</Link>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">{t("nav.training")}</a>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/training/cka" onClick={closeMenu}>CKA</Link>
              <Link className="navbar-item" to="/training/linux" onClick={closeMenu}>Linux</Link>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Websites
            </a>
            <div className="navbar-dropdown">
              <a className="navbar-item" href="https://blog.alexis-carbillet.com/blog/category/tech/" target="_blank" rel="noreferrer" onClick={closeMenu}>
                Blog
              </a>
              <a className="navbar-item" href="https://cats.alexis-carbillet.com/" target="_blank" rel="noreferrer" onClick={closeMenu}>
                Cats
              </a>
              <a className="navbar-item" href="https://coding.alexis-carbillet.com/" target="_blank" rel="noreferrer" onClick={closeMenu}>
                Coding
              </a>
              <a className="navbar-item" href="https://electricity.alexis-carbillet.com/" target="_blank" rel="noreferrer" onClick={closeMenu}>
                Electricity
              </a>
              <a className="navbar-item" href="https://hardware.alexis-carbillet.com/" target="_blank" rel="noreferrer" onClick={closeMenu}>
                Hardware
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
