import React, { useEffect, useRef, useState } from 'react';
import 'bulma/css/bulma.min.css';

const experiences = [
  { id: 1, title: "SRE at OVHcloud", date: "2021-07", description: "Oversaw the management and uptime of 40 public cloud and VPS regions and over 40 local zones, leveraging OpenStack, Kubernetes, Terraform, Puppet, and Ansible to ensure high availability." },
  { id: 2, title: "Data Scientist at Ice Gateway GmbH", date: "2017-09", description: "Developed AI-driven solutions, such as ICEassist, a voice recognition application for disabled users in public transportation, improving accessibility for hundreds of users. Was available on iOS and Android." },
  { id: 3, title: "Web developer at Ice Gateway GmbH", date: "2015-10", description: "Led website management and optimized Search Engine Optimization (SEO) strategies to increase client traffic and online visibility." },
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
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered">
            {/* Text on the left */}
            <div className="column is-half">
              <h1 className="title is-3">Hi, I'm Alexis Carbillet</h1>
              <p>
                I'm a cloud & AI engineer with a passion for building scalable systems and delightful user experiences.
                For the curious ones, here is my <a href="https://github.com/alexiscarbillet">github</a>.
              </p>
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
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
      </section>
      <section>
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
                <p className="title">Meta Front-End Developer</p>
                <p>Meta</p>
                <button className="button is-primary is-outlined"><a href="https://www.coursera.org/professional-certificates/meta-front-end-developer" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Azure Fundamentals</p>
                <p>Microsoft Azure</p>
                <button className="button is-primary is-outlined"><a href="https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/?practice-assessment-type=certification" target="_blank">Website</a></button>
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
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Google Cybersecurity Professional</p>
                <p>Google</p>
                <button className="button is-primary is-outlined"><a href="https://www.coursera.org/professional-certificates/google-cybersecurity" target="_blank">Website</a></button>
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
        <h3 className="title is-3">Websites:</h3>
      </div>
      <div className="container" style={{ display: 'flex', position: 'relative', padding: '2rem' }}>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Coding</p>
                <p style={{ wordBreak: 'keep-all' }}>ac-programming.com</p>
                <button className="button is-primary is-outlined"><a href="https://ac-programming.com/" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title" style={{ wordBreak: 'normal' }}>Electricity</p>
                <p>ac-electricity.com</p>
                <button className="button is-primary is-outlined"><a href="https://ac-electricity.com/" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title" style={{ wordBreak: 'normal' }}>Hardware</p>
                <p>ac-serverhub.com</p>
                <button className="button is-primary is-outlined"><a href="https://ac-serverhub.com/" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Cats</p>
                <p>all-about-cats.uk</p>
                <button className="button is-primary is-outlined"><a href="https://all-about-cats.uk/" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Main</p>
                <p style={{ wordBreak: 'keep-all' }}>alexis-carbillet.com</p>
                <button className="button is-primary is-outlined"><a href="https://alexis-carbillet.com/" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ display: 'flex', position: 'relative', padding: '2rem' }}>
        <h3 className="title is-3">Android applications:</h3>
      </div>
      <div className="container" style={{ display: 'flex', position: 'relative', padding: '2rem' }}>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title" style={{ wordBreak: 'normal' }}>Unit converter</p>
                <button className="button is-primary is-outlined"><a href="https://ac-programming.com/apps/unit-converter/app.html" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Canadian animals</p>
                <button className="button is-primary is-outlined"><a href="https://ac-programming.com/apps/canadian-animals/app.html" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Tic Tac Toe</p>
                <button className="button is-primary is-outlined"><a href="https://ac-programming.com/apps/tic-tac-toe/app.html" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Span sheets</p>
                <button className="button is-primary is-outlined"><a href="https://ac-programming.com/apps/spansheets/app.html" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">HTML colors</p>
                <button className="button is-primary is-outlined"><a href="https://ac-programming.com/apps/html-colors/app.html" target="_blank">Website</a></button>
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
                <p className="title">Fun with capitals</p>
                <button className="button is-primary is-outlined"><a href="https://ac-programming.com/apps/fun-with-capitals/app.html" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Fun with flags</p>
                <button className="button is-primary is-outlined"><a href="https://ac-programming.com/apps/fun-with-flags/app.html" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Training Canadian Citizenship</p>
                <button className="button is-primary is-outlined"><a href="https://ac-programming.com/apps/training-citizenship/app.html" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Random words</p>
                <button className="button is-primary is-outlined"><a href="https://ac-programming.com/apps/random-words/app.html" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ display: 'flex', position: 'relative', padding: '2rem' }}>
        <h3 className="title is-3">Containers on DockerHub:</h3>
      </div>
      <div className="container" style={{ display: 'flex', position: 'relative', padding: '2rem' }}>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">For data science</p>
                <button className="button is-primary is-outlined"><a href="https://hub.docker.com/r/alexiscarbillet/data-science-container" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">For python developer</p>
                <button className="button is-primary is-outlined"><a href="https://hub.docker.com/r/alexiscarbillet/python-dev" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">For web developer</p>
                <button className="button is-primary is-outlined"><a href="https://hub.docker.com/r/alexiscarbillet/web_dev" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">For golang developer</p>
                <button className="button is-primary is-outlined"><a href="https://hub.docker.com/r/alexiscarbillet/go_dev" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ display: 'flex', position: 'relative', padding: '2rem' }}>
        <h3 className="title is-3">Mozilla Firefox Plugins:</h3>
      </div>
      <div className="container" style={{ display: 'flex', position: 'relative', padding: '2rem' }}>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Bookmark Usage Checker</p>
                <button className="button is-primary is-outlined"><a href="https://addons.mozilla.org/fr/firefox/addon/bookmark-usage-checker/" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Top 10 Domains</p>
                <button className="button is-primary is-outlined"><a href="https://addons.mozilla.org/fr/firefox/addon/top-10-domains/" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Pink Theme Extension</p>
                <button className="button is-primary is-outlined"><a href="https://addons.mozilla.org/fr/firefox/addon/pink-theme-extension/" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ display: 'flex', position: 'relative', padding: '2rem'}}>
        <h3 className="title is-3">Scripts:</h3>
      </div>
      <div className="container" style={{ display: 'flex', position: 'relative', padding: '2rem' }}>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title" style={{ wordBreak: 'normal' }}>Python</p>
                <button className="button is-primary is-outlined"><a href="https://github.com/alexiscarbillet/archive_code/tree/main/python_examples" target="_blank">Github</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">HTML/CSS</p>
                <button className="button is-primary is-outlined"><a href="https://github.com/alexiscarbillet/archive_code/tree/main/html_css_examples" target="_blank">Github</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title" style={{ wordBreak: 'normal' }}>JavaScript</p>
                <button className="button is-primary is-outlined"><a href="https://github.com/alexiscarbillet/archive_code/tree/main/javascript_examples" target="_blank">Github</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Go</p>
                <button className="button is-primary is-outlined"><a href="https://github.com/alexiscarbillet/archive_code/tree/main/go_examples" target="_blank">Github</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">React</p>
                <button className="button is-primary is-outlined"><a href="https://github.com/alexiscarbillet/archive_code/tree/main/react_examples" target="_blank">Github</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Bash</p>
                <button className="button is-primary is-outlined"><a href="https://github.com/alexiscarbillet/archive_code/tree/main/bash_examples" target="_blank">Github</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
