import React from "react";
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next';

export default function TrainingCKA() {
  const { t } = useTranslation();

  const ckaTraining = [
    { titleKey: "training.cka.configmaps", url: "https://killercoda.com/alexis-carbillet/course/CKA/configmap-secrets", url2: "https://github.com/alexiscarbillet/killercoda/tree/main/CKA/configmap-secrets", descriptionKey: "training.desc.cka.configmaps" },
    { titleKey: "training.cka.hpa", url: "https://killercoda.com/alexis-carbillet/course/CKA/HPA", url2: "https://github.com/alexiscarbillet/killercoda/tree/main/CKA/HPA", descriptionKey: "training.desc.cka.hpa" },
    { titleKey: "training.cka.networkPolicies", url: "https://killercoda.com/alexis-carbillet/course/CKA/network-policies", url2: "https://github.com/alexiscarbillet/killercoda/tree/main/CKA/network-policies", descriptionKey: "training.desc.cka.networkPolicies" },
    { titleKey: "training.cka.nodeMaintenance", url: "https://killercoda.com/alexis-carbillet/course/CKA/node-maintenance", url2: "https://github.com/alexiscarbillet/killercoda/tree/main/CKA/node-maintenance", descriptionKey: "training.desc.cka.nodeMaintenance" },
    { titleKey: "training.cka.pvc", url: "https://killercoda.com/alexis-carbillet/course/CKA/pv-pvc", url2: "https://github.com/alexiscarbillet/killercoda/tree/main/CKA/pv-pvc", descriptionKey: "training.desc.cka.pvc" },
    { titleKey: "training.cka.podDebugging", url: "https://killercoda.com/alexis-carbillet/course/CKA/pod-debugging", url2: "https://github.com/alexiscarbillet/killercoda/tree/main/CKA/pod-debugging", descriptionKey: "training.desc.cka.podDebugging" },
    { titleKey: "training.cka.rbac", url: "https://killercoda.com/alexis-carbillet/course/CKA/rbac", url2: "https://github.com/alexiscarbillet/killercoda/tree/main/CKA/rbac", descriptionKey: "training.desc.cka.rbac" },
    { titleKey: "training.cka.rollingUpdates", url: "https://killercoda.com/alexis-carbillet/course/CKA/rolling-updates", url2: "https://github.com/alexiscarbillet/killercoda/tree/main/CKA/rolling-updates", descriptionKey: "training.desc.cka.rollingUpdates" },
    { titleKey: "training.cka.cronJob", url: "https://killercoda.com/alexis-carbillet/course/CKA/cronjobs", url2: "https://github.com/alexiscarbillet/killercoda/tree/main/CKA/cronjobs", descriptionKey: "training.desc.cka.cronJob" },
    { titleKey: "training.cka.resourceQuotas", url: "https://killercoda.com/alexis-carbillet/course/CKA/resource_quotas", url2: "https://github.com/alexiscarbillet/killercoda/tree/main/CKA/resource_quotas", descriptionKey: "training.desc.cka.resourceQuotas" },
    { titleKey: "training.cka.storageClasses", url: "https://killercoda.com/alexis-carbillet/course/CKA/storage-classes", url2: "https://github.com/alexiscarbillet/killercoda/tree/main/CKA/storage-classes", descriptionKey: "training.desc.cka.storageClasses" },
  ];

  return (
    <>
      <SEO
        title="CKA Training Scenarios"
        description="Practice Certified Kubernetes Administrator (CKA) scenarios on Killercoda with hands-on labs."
        url="https://alexis-carbillet.com/training/cka"
      />
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container" style={{ padding: '2rem' }}>
          <h3 className="title is-3">{t("training.ckaHeader")}</h3>
          <p className="subtitle is-6">{t("training.cka.description")}</p>
          <div className="columns is-multiline">
            {ckaTraining.map((item, idx) => (
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
