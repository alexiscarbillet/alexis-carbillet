import React from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next';

export default function TrainingLinux() {
  const { t } = useTranslation();

  const linuxTraining = [
    { titleKey: "training.linux.systemdDebug", url: "https://killercoda.com/alexis-carbillet/course/Linux/Systemd-Service-Debugging", url2: "https://github.com/alexiscarbillet/killercoda/tree/main/Linux/tree/main/Systemd-Service-Debugging", descriptionKey: "training.desc.linux.systemdDebug" },
    { titleKey: "training.linux.userGroupPermissions", url: "https://killercoda.com/alexis-carbillet/course/Linux/User-Group-Permissions-Troubleshooting", url2: "https://github.com/alexiscarbillet/killercoda/tree/main/Linux/tree/main/User-Group-Permissions-Troubleshooting", descriptionKey: "training.desc.linux.userGroupPermissions" },
    { titleKey: "training.linux.diskLogManagement", url: "https://killercoda.com/alexis-carbillet/course/Linux/Log-Management", url2: "https://github.com/alexiscarbillet/killercoda/tree/main/Linux/tree/main/Log-Management", descriptionKey: "training.desc.linux.diskLogManagement" },
    { titleKey: "training.linux.processLimits", url: "https://killercoda.com/alexis-carbillet/course/Linux/Process-Management-Resource-Limits", url2: "https://github.com/alexiscarbillet/killercoda/tree/main/Linux/tree/main/Process-Management-Resource-Limits", descriptionKey: "training.desc.linux.processLimits" },
    { titleKey: "training.linux.cronJob", url: "https://killercoda.com/alexis-carbillet/course/Linux/Cron-Job-Troubleshooting", url2: "https://github.com/alexiscarbillet/killercoda/tree/main/Linux/tree/main/Cron-Job-Troubleshooting", descriptionKey: "training.desc.linux.cronJob" },
    { titleKey: "training.linux.disks", url: "https://killercoda.com/alexis-carbillet/course/Linux/Disk-Mounting", url2: "https://github.com/alexiscarbillet/killercoda/tree/main/Linux/tree/main/Disk-Mounting", descriptionKey: "training.desc.linux.disks" },
    { titleKey: "training.linux.sed", url: "https://killercoda.com/alexis-carbillet/course/Linux/sed-transform", url2: "https://github.com/alexiscarbillet/killercoda/tree/main/Linux/tree/main/sed-transform", descriptionKey: "training.desc.linux.sed" },
    { titleKey: "training.linux.network", url: "https://killercoda.com/alexis-carbillet/course/Linux/Network-Service-Troubleshooting", url2: "https://github.com/alexiscarbillet/killercoda/tree/main/Linux/tree/main/Network-Service-Troubleshooting", descriptionKey: "training.desc.linux.network" },
    { titleKey: "training.linux.sshHardening", url: "https://killercoda.com/alexis-carbillet/course/Linux/ssh-hardening", url2: "https://github.com/alexiscarbillet/killercoda/tree/main/Linux/tree/main/ssh-hardening", descriptionKey: "training.desc.linux.sshHardening" },
    { titleKey: "training.linux.firewallTroubleshooting", url: "https://killercoda.com/alexis-carbillet/course/Linux/firewall-troubleshooting", url2: "https://github.com/alexiscarbillet/killercoda/tree/main/Linux/tree/main/firewall-troubleshooting", descriptionKey: "training.desc.linux.firewallTroubleshooting" },
    { titleKey: "training.linux.logMining", url: "https://killercoda.com/alexis-carbillet/course/Linux/Log-mining", url2: "https://github.com/alexiscarbillet/killercoda/tree/main/Linux/tree/main/Log-mining", descriptionKey: "training.desc.linux.logMining" },
    { titleKey: "training.linux.backupRestore", url: "https://killercoda.com/alexis-carbillet/course/Linux/backup-restore", url2: "https://github.com/alexiscarbillet/killercoda/tree/main/Linux/tree/main/backup-restore", descriptionKey: "training.desc.linux.backupRestore" },
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
          <p className="subtitle is-6">{t("training.linux.description")}</p>
          <div className="columns is-multiline">
            {linuxTraining.map((item, idx) => (
              <div className="column is-one-third-tablet is-half-mobile" key={idx}>
                <div className="card">
                  <div className="card-content">
                    <p className="title" style={{ wordBreak: 'normal' }}>{t(item.titleKey)}</p>
                    {item.descriptionKey && <p className="subtitle is-6">{t(item.descriptionKey)}</p>}
                    <a className="button is-primary is-outlined" href={item.url} target="_blank" rel="noopener noreferrer">
                      {t("buttons.website")}
                    </a>
                    {item.url2 && (
                      <a className="button is-info is-outlined" href={item.url2} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
                        {t("buttons.github")}
                      </a>
                    )}
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
