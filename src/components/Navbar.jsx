import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="navbar-item">
      <button
        type="button"
        onClick={toggleTheme}
        className="button is-small is-rounded"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          cursor: "pointer",
          fontWeight: 600,
          backgroundColor: "rgba(0, 0, 0, 0.12)",
          color: "#1a1a1a",
          border: "1px solid rgba(0, 0, 0, 0.25)",
          padding: "0.25rem 0.75rem"
        }}
        title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        aria-label="Toggle light/dark theme"
      >
        <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
        <span>{theme === "dark" ? "Light" : "Dark"}</span>
      </button>
    </div>
  );
}

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

          <Link className="navbar-item" to="/resume" onClick={closeMenu}>
            <strong>{t("nav.resume")}</strong>
          </Link>

          <Link className="navbar-item" to="/consulting" onClick={closeMenu}>
            <strong>{t("nav.consulting")}</strong>
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" role="button" aria-haspopup="true">{t("nav.teaching")}</a>
            <div className="navbar-dropdown">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" role="button" aria-haspopup="true">{t("nav.killercoda")}</a>
                <div className="navbar-dropdown navbar-nested-dropdown">
                  <Link className="navbar-item" to="/training/cka" onClick={closeMenu}>CKA</Link>
                  <Link className="navbar-item" to="/training/linux" onClick={closeMenu}>Linux</Link>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" role="button" aria-haspopup="true">{t("nav.podcasts")}</a>
                <div className="navbar-dropdown navbar-nested-dropdown">
                  <Link className="navbar-item" to="/ai-podcasts" onClick={closeMenu}>{t("nav.podcasts.ai")}</Link>
                  <Link className="navbar-item" to="/cloud-podcasts" onClick={closeMenu}>{t("nav.podcasts.cloud")}</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" to="/projects" onClick={closeMenu}>{t("nav.projects")}</Link>
            <div className="navbar-dropdown">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" role="button" aria-haspopup="true">AI</a>
                <div className="navbar-dropdown navbar-nested-dropdown">
                  <Link className="navbar-item" to="/projects/ai-newsletter" onClick={closeMenu}>AI Newsletter</Link>
                  <Link className="navbar-item" to="/projects/invest-tools" onClick={closeMenu}>Invest Tools</Link>
                </div>
              </div>
              <Link className="navbar-item" to="/projects/android" onClick={closeMenu}>Android</Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" role="button" aria-haspopup="true">DevOps</a>
                <div className="navbar-dropdown navbar-nested-dropdown">
                  <Link className="navbar-item" to="/projects/docker" onClick={closeMenu}>Docker</Link>
                  <Link className="navbar-item" to="/projects/helm" onClick={closeMenu}>Helm</Link>
                  <Link className="navbar-item" to="/projects/firefox" onClick={closeMenu}>Firefox</Link>
                  <Link className="navbar-item" to="/projects/vscode" onClick={closeMenu}>VSCode</Link>
                  <Link className="navbar-item" to="/projects/scripts" onClick={closeMenu}>Scripts</Link>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" role="button" aria-haspopup="true">Websites</a>
                <div className="navbar-dropdown navbar-nested-dropdown">
                  <a className="navbar-item" href="https://blog.alexis-carbillet.com/blog/category/tech/" target="_blank" rel="noopener noreferrer">{t("websites.blog.title")}</a>
                  <a className="navbar-item" href="https://cats.alexis-carbillet.com/" target="_blank" rel="noopener noreferrer">{t("websites.cats.title")}</a>
                  <a className="navbar-item" href="https://coding.alexis-carbillet.com/" target="_blank" rel="noopener noreferrer">{t("websites.coding.title")}</a>
                  <a className="navbar-item" href="https://electricity.alexis-carbillet.com/" target="_blank" rel="noopener noreferrer">{t("websites.electricity.title")}</a>
                  <a className="navbar-item" href="https://hardware.alexis-carbillet.com/" target="_blank" rel="noopener noreferrer">{t("websites.hardware.title")}</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Theme & Language Switcher on the right */}
        <div className="navbar-end" style={{ alignItems: "center" }}>
          <ThemeSwitcher />
          <LangSwitcher />
        </div>
      </div>
    </nav>
  );
}
