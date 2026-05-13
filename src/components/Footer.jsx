import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" style={{ backgroundColor: "inherit", padding: "2rem 1.5rem" }}>
      <div className="container">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", justifyContent: "space-between" }}>
          <p className="is-size-7 has-text-grey" style={{ margin: 0 }}>
            {t("footer.copyright", { year: currentYear })}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center", margin: 0 }}>
            <span className="is-size-7 has-text-grey">{t("footer.siteLinks")}:</span>
            <Link to="/" className="is-size-7">{t("nav.home")}</Link>
            <span className="is-size-7 has-text-grey">•</span>
            <Link to="/projects" className="is-size-7">{t("nav.projects")}</Link>
            <span className="is-size-7 has-text-grey">•</span>
            <Link to="/training" className="is-size-7">{t("nav.training")}</Link>
            <span className="is-size-7 has-text-grey">•</span>
            <Link to="/podcasts" className="is-size-7">{t("nav.podcasts")}</Link>
            <span className="is-size-7 has-text-grey">•</span>
            <Link to="/digital-assets" className="is-size-7">{t("nav.digital-assets")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
