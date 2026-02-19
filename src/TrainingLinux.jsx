import React from "react";
import Navbar from './components/Navbar';
import { useTranslation } from 'react-i18next';

export default function TrainingLinux() {
  const { t } = useTranslation();

  const linuxTraining = [
    { titleKey: "training.linux.systemdDebug", url: "https://killercoda.com/alexis-carbillet/course/Linux/Systemd-Service-Debugging", descriptionKey: "training.desc.linux.systemdDebug" },
    { titleKey: "training.linux.userGroupPermissions", url: "https://killercoda.com/alexis-carbillet/course/Linux/User-Group-Permissions-Troubleshooting", descriptionKey: "training.desc.linux.userGroupPermissions" },
    { titleKey: "training.linux.diskLogManagement", url: "https://killercoda.com/alexis-carbillet/course/Linux/Log-Management", descriptionKey: "training.desc.linux.diskLogManagement" },
    { titleKey: "training.linux.processLimits", url: "https://killercoda.com/alexis-carbillet/course/Linux/Process-Management-Resource-Limits", descriptionKey: "training.desc.linux.processLimits" },
    { titleKey: "training.linux.cronJob", url: "https://killercoda.com/alexis-carbillet/course/Linux/Cron-Job-Troubleshooting", descriptionKey: "training.desc.linux.cronJob" },
    { titleKey: "training.linux.disks", url: "https://killercoda.com/alexis-carbillet/course/Linux/Disk-Mounting", descriptionKey: "training.desc.linux.disks" },
    { titleKey: "training.linux.sed", url: "https://killercoda.com/alexis-carbillet/course/Linux/sed-transform", descriptionKey: "training.desc.linux.sed" },
    { titleKey: "training.linux.network", url: "https://killercoda.com/alexis-carbillet/course/Linux/Network-Service-Troubleshooting", descriptionKey: "training.desc.linux.network" },
    { titleKey: "training.linux.sshHardening", url: "https://killercoda.com/alexis-carbillet/course/Linux/ssh-hardening", descriptionKey: "training.desc.linux.sshHardening" },
    { titleKey: "training.linux.logMining", url: "https://killercoda.com/alexis-carbillet/course/Linux/Log-mining", descriptionKey: "training.desc.linux.logMining" },
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
                  {item.descriptionKey && <p className="subtitle is-6">{t(item.descriptionKey)}</p>}
                  <button className="button is-primary is-outlined">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">{t("training.websiteButton")}</a>
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
          <h3 className="title is-3">{t("training.linuxHeader")}</h3>
          {renderCardsInRows(linuxTraining)}
        </div>
      </section>
    </>
  );
}
