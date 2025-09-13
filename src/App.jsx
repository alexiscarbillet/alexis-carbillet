import React, { useEffect, useRef, useState } from 'react';
import 'bulma/css/bulma.min.css';
import Navbar from './components/Navbar';
import Social from './components/Social';
import { Link } from 'react-router-dom';

const experiences = [
  { id: 1, title: "DevSecOps at ARTM", date: "2025-07", description: "Manage and synchronize RBAC between Azure and GCP infrastructures using python and github actions." },
  { id: 2, title: "SRE at OVHcloud", date: "2021-07", description: "Oversaw the management and uptime of 40 public cloud and VPS regions and over 40 local zones, leveraging OpenStack, Kubernetes, Terraform, Puppet, and Ansible to ensure high availability.\n Facilitated multiple crisis meetings and directed team members to swiftly develop and implement effective solutions to incidents.\n Developed and maintained monitoring tools using Prometheus, Thanos, Sentry, Opensearch, Grafana and others to proactively detect and resolve server issues, resulting in a 35% reduction in downtime.\n Managed the creation of CI/CD workflows as well as self-healing to streamline deployment processes and improve operational efficiency.\n Developed several internal tools, APIs and databases using Python, Bash and Go.\n Led AI-based predictive projects for breakdown and server stock forecasting, improving capacity planning and resource allocation, LLM on internal documentation." },
  { id: 3, title: "Data Scientist at Ice Gateway GmbH", date: "2017-09", description: "Developed AI-driven solutions, such as ICEassist, a voice recognition application for disabled users in public transportation, improving accessibility for hundreds of users. Was available on iOS and Android.\n Develop ICEsecure, a facial recognition system to detect who enter a given room based on different cameras.\n Manage and drive projects the team was in charge of, as well as communicate across the different parties involved.\nLed customer-facing meetings, presenting AI solutions and technical products to clients." },
  { id: 4, title: "Web developer at Ice Gateway GmbH", date: "2015-10", description: "Led website management and optimized Search Engine Optimization (SEO) strategies to increase client traffic and online visibility.\n Developed and implemented custom dashboards for clients, leveraging IoT sensor data to deliver actionable insights and enhance decision-making.\n Spearheaded the creation and ongoing maintenance of the company websites, ensuring a seamless user experience and up-to-date content." },
];

export default function ExperienceTimeline() {
  const [activeId, setActiveId] = useState(null);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(parseInt(entry.target.dataset.id));
          }
        });
      },
      { threshold: 0.5 } // 50% visible to trigger
    );

    refs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <section className="section" style={{ marginTop: '50px' }}>
        <div className="container">
          <div className="columns is-vcentered">
            {/* Text on the left */}
            <div className="column is-half">
              <h1 className="title is-3">Hi, I'm Alexis Carbillet</h1>
              <p>
                I'm a cloud & AI engineer with a passion for building scalable systems and delightful user experiences.
                For the curious ones, here is my <a href="https://github.com/alexiscarbillet">github</a>. <br></br>
                I also wrote different scenarios to train people for the CKA certification. Here is my <a href="https://killercoda.com/alexis-carbillet">killercoda</a> profile.
                Below are my different links, in the first rows are my others websites while the second has the platforms were my work is available.
              </p>
              <Social />
            </div>

            {/* Image on the right */}
            <div className="column is-half has-text-centered">
              <figure className="image is-inline-block" style={{ width: '256px', height: '256px' }}>
                <img className="is-rounded" src="/assets/images/alexis_carbillet.png" alt="Alexis Carbillet" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="container" style={{ display: 'flex', position: 'relative', paddingLeft: '4rem' }}>
        <h3 className="title is-3">Experiences:</h3>
      </div>
      <div className="container" style={{ display: 'flex', position: 'relative', padding: '2rem' }}>
        {/* Left timeline */}
        <div style={{ position: 'relative', width: '50px', marginRight: '2rem' }}>
          <div style={{
            position: 'absolute',
            left: '24px',
            top: 0,
            bottom: 0,
            width: '2px',
            backgroundColor: '#ccc',
          }} />
          {experiences.map(exp => (
            <div
              key={exp.id}
              style={{
                position: 'absolute',
                top: `${experiences.findIndex(e => e.id === exp.id) * 250 + 20}px`, // Adjust spacing
                left: '20px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: activeId === exp.id ? 'dodgerblue' : '#ccc',
                transition: 'background-color 0.3s',
              }}
            />
          ))}
        </div>

        {/* Right experiences */}
        <div style={{ flex: 1 }}>
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              data-id={exp.id}
              ref={el => refs.current[index] = el}
              className="box"
              style={{ marginBottom: '5rem' }}
            >
              <h3 className="title is-5">{exp.title}</h3>
              <p className="subtitle is-6">{exp.date}</p>

              {/* This is the only change */}
              {exp.description.split("\n").map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
      </section>
      <section className="section">
      <div className="container" style={{ display: 'flex', position: 'relative', padding: '2rem' }}>
        <h3 className="title is-3">Diploma/certifications:</h3>
      </div>
      <div className="container" style={{ display: 'flex', position: 'relative', padding: '2rem' }}>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Master in AI & DATA SCIENCE</p>
                <p>IMT Mines Alès</p>
                <button className="button is-primary is-outlined"><a href="https://www.imt-mines-ales.fr/en" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Meta Android Developer</p>
                <p>Meta</p>
                <button className="button is-primary is-outlined"><a href="https://www.coursera.org/professional-certificates/meta-android-developer" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Meta Front-End Developer</p>
                <p>Meta</p>
                <button className="button is-primary is-outlined"><a href="https://www.coursera.org/professional-certificates/meta-front-end-developer" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ display: 'flex', position: 'relative', padding: '2rem' }}>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Azure Fundamentals</p>
                <p>Microsoft Azure</p>
                <button className="button is-primary is-outlined"><a href="https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/?practice-assessment-type=certification" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Cloud Digital Leader</p>
                <p>Google Cloud Platform</p>
                <button className="button is-primary is-outlined"><a href="https://cloud.google.com/learn/certification/cloud-digital-leader?hl=fr" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">AWS Certified Cloud Practitioner</p>
                <p>Amazon Web Services</p>
                <button className="button is-primary is-outlined"><a href="https://aws.amazon.com/fr/certification/certified-cloud-practitioner/" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ display: 'flex', position: 'relative', padding: '2rem' }}>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Google Cybersecurity Professional</p>
                <p>Google</p>
                <button className="button is-primary is-outlined"><a href="https://www.coursera.org/professional-certificates/google-cybersecurity" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Certified Kubernetes Administrator</p>
                <p>Cloud Native Computing Foundation</p>
                <button className="button is-primary is-outlined"><a href="https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Cryptography</p>
                <p>Stanford University</p>
                <button className="button is-primary is-outlined"><a href="https://www.stanford.edu/" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ display: 'flex', position: 'relative', padding: '2rem' }}>
        <h3 className="title is-4">
          You can also find all my{' '}
          <Link to="/projects">projects</Link>,{' '}
          <Link to="/training">training</Link> and{' '}
          <Link to="/fiverr">fiverr</Link> services on this website too.
        </h3>
      </div>
      </section>
    </>
  );
}
