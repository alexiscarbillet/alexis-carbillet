import React from "react";
import Navbar from './components/Navbar';
import { useTranslation } from 'react-i18next';

export default function TrainingCKA() {
  const { t } = useTranslation();

  const ckaTraining = [
    { titleKey: "training.cka.configmaps", url: "https://killercoda.com/alexis-carbillet/course/CKA/configmap-secrets", descriptionKey: "training.desc.cka.configmaps" },
    { titleKey: "training.cka.hpa", url: "https://killercoda.com/alexis-carbillet/course/CKA/HPA", descriptionKey: "training.desc.cka.hpa" },
    { titleKey: "training.cka.networkPolicies", url: "https://killercoda.com/alexis-carbillet/course/CKA/network-policies", descriptionKey: "training.desc.cka.networkPolicies" },
    { titleKey: "training.cka.nodeMaintenance", url: "https://killercoda.com/alexis-carbillet/course/CKA/node-maintenance", descriptionKey: "training.desc.cka.nodeMaintenance" },
    { titleKey: "training.cka.pvc", url: "https://killercoda.com/alexis-carbillet/course/CKA/pv-pvc", descriptionKey: "training.desc.cka.pvc" },
    { titleKey: "training.cka.podDebugging", url: "https://killercoda.com/alexis-carbillet/course/CKA/pod-debugging", descriptionKey: "training.desc.cka.podDebugging" },
    { titleKey: "training.cka.rbac", url: "https://killercoda.com/alexis-carbillet/course/CKA/rbac", descriptionKey: "training.desc.cka.rbac" },
    { titleKey: "training.cka.rollingUpdates", url: "https://killercoda.com/alexis-carbillet/course/CKA/rolling-updates", descriptionKey: "training.desc.cka.rollingUpdates" },
    { titleKey: "training.cka.serviceNotRouting", url: "https://killercoda.com/alexis-carbillet/course/CKA/service", descriptionKey: "training.desc.cka.serviceNotRouting" },
    { titleKey: "training.cka.cronJob", url: "https://killercoda.com/alexis-carbillet/course/CKA/cronjobs", descriptionKey: "training.desc.cka.cronJob" },
    { titleKey: "training.cka.resourceQuotas", url: "https://killercoda.com/alexis-carbillet/course/CKA/resource_quotas", descriptionKey: "training.desc.cka.resourceQuotas" },
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
          <h3 className="title is-3">{t("training.ckaHeader")}</h3>
          {renderCardsInRows(ckaTraining)}
        </div>
      </section>
    </>
  );
}
