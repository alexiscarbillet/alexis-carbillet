import React from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next';

export default function ProjectsInvestTools() {
    const { t } = useTranslation();

    return (
        <>
            <SEO
                title="Invest Tools"
                description="Automated Daily Stock Market Briefing & Forex Conversion Matrix powered by Yahoo Finance and Google Gemini AI."
                url="https://alexis-carbillet.com/projects/invest-tools"
            />
            <Navbar />
            <div className="max-w-5xl mx-auto px-4 py-8" style={{ marginTop: '50px' }}>
                {/* Header */}
                <div className="mb-8">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                            📈 {t("projects.investTools.title")}
                        </h1>
                        <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-amber-800 bg-amber-100 rounded-full border border-amber-300 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800">
                            🔒 {t("projects.investTools.privateLabel")}
                        </span>
                    </div>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        {t("projects.investTools.subtitle")}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {[
                            "Python 3.11",
                            "Google Gemini AI",
                            "Yahoo Finance API",
                            "GitHub Actions",
                            "Jinja2 HTML",
                            "Forex Matrix",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-md border border-slate-200 dark:border-slate-700"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Project Overview */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">
                        📌 {t("projects.investTools.overviewTitle")}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: t("projects.investTools.overview") }}
                    />
                </section>

                {/* Core Features Grid */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">
                        🚀 {t("projects.investTools.featuresTitle")}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {t("projects.investTools.features", { returnObjects: true }).map((feature, index) => (
                            <div key={index} className="p-5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm">
                                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-300"
                                    dangerouslySetInnerHTML={{ __html: feature.description }}
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* System Architecture */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">
                        🛠️ {t("projects.investTools.architectureTitle")}
                    </h2>
                    <div className="p-4 bg-slate-900 text-emerald-400 rounded-lg font-mono text-xs overflow-x-auto leading-relaxed">
                        <code>
                            [GitHub Actions Cron (7:00 PM EST)]<br />
                            &nbsp;&nbsp;├── 1. Load Watchlist (config/watchlist.json)<br />
                            &nbsp;&nbsp;├── 2. Query Yahoo Finance (yfinance API: 1D, 1W, 1M, 3M, YTD)<br />
                            &nbsp;&nbsp;├── 3. Calculate Alpha vs S&amp;P 500, TSX Composite, Nasdaq 100<br />
                            &nbsp;&nbsp;├── 4. Google Gemini AI Analysis (Resilient Fallback Chain)<br />
                            &nbsp;&nbsp;├── 5. Render Responsive HTML Template (Jinja2)<br />
                            &nbsp;&nbsp;└── 6. Dispatch Encrypted SMTP Digest to Inbox
                        </code>
                    </div>
                </section>

                {/* Private Repo Notice */}
                <section className="p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 rounded-lg text-sm text-amber-800 dark:text-amber-300">
                    {t("projects.investTools.privateNote")}
                </section>
            </div>
        </>
    );
}
