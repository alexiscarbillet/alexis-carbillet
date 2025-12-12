import React from "react";
import Navbar from './components/Navbar';
import { useTranslation } from 'react-i18next';

export default function Training() {
  const { t } = useTranslation();

  const ckaTraining = [
    { titleKey: "training.cka.configmaps", url: "https://killercoda.com/alexis-carbillet/course/CKA/configmap-secrets" },
    { titleKey: "training.cka.hpa", url: "https://killercoda.com/alexis-carbillet/course/CKA/HPA" },
    { titleKey: "training.cka.networkPolicies", url: "https://killercoda.com/alexis-carbillet/course/CKA/network-policies" },
    { titleKey: "training.cka.nodeMaintenance", url: "https://killercoda.com/alexis-carbillet/course/CKA/node-maintenance" },
    { titleKey: "training.cka.pvc", url: "https://killercoda.com/alexis-carbillet/course/CKA/pv-pvc" },
    { titleKey: "training.cka.podDebugging", url: "https://killercoda.com/alexis-carbillet/course/CKA/pod-debugging" },
    { titleKey: "training.cka.rbac", url: "https://killercoda.com/alexis-carbillet/course/CKA/rbac" },
    { titleKey: "training.cka.rollingUpdates", url: "https://killercoda.com/alexis-carbillet/course/CKA/rolling-updates" },
    { titleKey: "training.cka.serviceNotRouting", url: "https://killercoda.com/alexis-carbillet/course/CKA/service" },
    { titleKey: "training.cka.cronJob", url: "https://killercoda.com/alexis-carbillet/course/CKA/cronjobs" },
    { titleKey: "training.cka.resourceQuotas", url: "https://killercoda.com/alexis-carbillet/course/CKA/resource_quotas" },
  ];

  const linuxTraining = [
    { titleKey: "training.linux.systemdDebug", url: "https://killercoda.com/alexis-carbillet/course/Linux/Systemd-Service-Debugging" },
    { titleKey: "training.linux.userGroupPermissions", url: "https://killercoda.com/alexis-carbillet/course/Linux/User-Group-Permissions-Troubleshooting" },
    { titleKey: "training.linux.diskLogManagement", url: "https://killercoda.com/alexis-carbillet/course/Linux/Log-Management" },
    { titleKey: "training.linux.processLimits", url: "https://killercoda.com/alexis-carbillet/course/Linux/Process-Management-Resource-Limits" },
    { titleKey: "training.linux.cronJob", url: "https://killercoda.com/alexis-carbillet/course/Linux/Cron-Job-Troubleshooting" },
    { titleKey: "training.linux.disks", url: "https://killercoda.com/alexis-carbillet/course/Linux/Disk-Mounting" },
    { titleKey: "training.linux.sed", url: "https://killercoda.com/alexis-carbillet/course/Linux/sed-transform" },
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
          <h3 className="title is-3">{t("training.ckaHeader")}</h3>
          {renderCardsInRows(ckaTraining)}

          <h3 className="title is-3" style={{ marginTop: '2rem' }}>{t("training.linuxHeader")}</h3>
          {renderCardsInRows(linuxTraining)}
        </div>
      </section>
    </>
  );
}
