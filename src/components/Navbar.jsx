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

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Websites
            </a>
            <div className="navbar-dropdown">
              <a className="navbar-item" href="https://blog.alexis-carbillet.com/blog/category/tech/" target="_blank" rel="noreferrer">
                Blog
              </a>
              <a className="navbar-item" href="https://cats.alexis-carbillet.com/" target="_blank" rel="noreferrer">
                Cats
              </a>
              <a className="navbar-item" href="https://coding.alexis-carbillet.com/" target="_blank" rel="noreferrer">
                Coding
              </a>
              <a className="navbar-item" href="https://electricity.alexis-carbillet.com/" target="_blank" rel="noreferrer">
                Electricity
              </a>
              <a className="navbar-item" href="https://hardware.alexis-carbillet.com/" target="_blank" rel="noreferrer">
                Hardware
              </a>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">{t("nav.projects")}</a>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/projects/android">Android Apps</Link>
              <Link className="navbar-item" to="/projects/docker">Docker Containers</Link>
              <Link className="navbar-item" to="/projects/firefox">Firefox Plugins</Link>
              <Link className="navbar-item" to="/projects/helm">Helm Charts</Link>
              <Link className="navbar-item" to="/projects/scripts">Scripts</Link>
              <Link className="navbar-item" to="/projects/vscode">VSCode Extensions</Link>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">{t("nav.training")}</a>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/training/cka">CKA</Link>
              <Link className="navbar-item" to="/training/linux">Linux</Link>
            </div>
          </div>
          <Link className="navbar-item" to="/podcasts">
            {t("nav.podcasts")}
          </Link>
        </div>

        {/* Language Switcher on the right */}
        <div className="navbar-end">
          <LangSwitcher />
        </div>
      </div>
    </nav>
  );
}
