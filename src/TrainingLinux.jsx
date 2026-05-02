import React from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
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

  return (
    <>
      <SEO
        title="Linux Training Scenarios"
        description="Practice Linux system administration scenarios on Killercoda with hands-on labs."
        url="https://alexis-carbillet.com/training/linux"
      />
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container" style={{ padding: '2rem' }}>
          <h3 className="title is-3">{t("training.linuxHeader")}</h3>
          <p className="subtitle is-6">Hands-on Linux troubleshooting and administration training scenarios.</p>
          <div className="columns is-multiline">
            {linuxTraining.map((item, idx) => (
              <div className="column is-one-third-tablet is-half-mobile" key={idx}>
                <div className="card">
                  <div className="card-content">
                    <p className="title" style={{ wordBreak: 'normal' }}>{t(item.titleKey)}</p>
                    {item.descriptionKey && <p className="subtitle is-6">{t(item.descriptionKey)}</p>}
                    <a className="button is-primary is-outlined" href={item.url} target="_blank" rel="noopener noreferrer">
                      {t("training.websiteButton")}
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
