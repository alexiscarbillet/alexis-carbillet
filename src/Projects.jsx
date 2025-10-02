import React from "react";
import Navbar from './components/Navbar';

export default function Projects() {
  return (
    <>
    <Navbar />
    <section className="section" style={{ marginTop: '50px' }}>
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
                <p className="title">For data science (python 3.9)</p>
                <button className="button is-primary is-outlined"><a href="https://hub.docker.com/r/alexiscarbillet/data-science-container" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">For python developer (3.11)</p>
                <button className="button is-primary is-outlined"><a href="https://hub.docker.com/r/alexiscarbillet/python-dev" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">For python developer (3.12)</p>
                <button className="button is-primary is-outlined"><a href="https://hub.docker.com/repository/docker/alexiscarbillet/python_3_12_dev" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">For python developer (3.13)</p>
                <button className="button is-primary is-outlined"><a href="https://hub.docker.com/repository/docker/alexiscarbillet/python_3_13_dev" target="_blank">Website</a></button>
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
                <p className="title">For web developer (node 16)</p>
                <button className="button is-primary is-outlined"><a href="https://hub.docker.com/r/alexiscarbillet/web_dev" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">For golang developer (1.20)</p>
                <button className="button is-primary is-outlined"><a href="https://hub.docker.com/r/alexiscarbillet/go_dev" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">For golang developer (1.25)</p>
                <button className="button is-primary is-outlined"><a href="https://hub.docker.com/repository/docker/alexiscarbillet/go_1_25_dev/general" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">For data science (python 3.13)</p>
                <button className="button is-primary is-outlined"><a href="https://hub.docker.com/repository/docker/alexiscarbillet/python_3_13_data_science" target="_blank">Website</a></button>
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
                <p className="title">For web developer (node 22)</p>
                <button className="button is-primary is-outlined"><a href="https://hub.docker.com/repository/docker/alexiscarbillet/node_22_dev" target="_blank">Website</a></button>
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
        <h3 className="title is-3">VScode extensions:</h3>
      </div>
      <div className="container" style={{ display: 'flex', position: 'relative', padding: '2rem' }}>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title" style={{ wordBreak: 'normal' }}>coding-time-tracker-by-alexiscarbillet</p>
                <button className="button is-primary is-outlined"><a href="https://marketplace.visualstudio.com/items?itemName=AlexisCarbillet.coding-time-tracker-by-alexiscarbillet" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title" style={{ wordBreak: 'normal' }}>seo-audit-for-html</p>
                <button className="button is-primary is-outlined"><a href="https://marketplace.visualstudio.com/items?itemName=AlexisCarbillet.seo-audit-for-html" target="_blank">Website</a></button>
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
      <div className="container" style={{ display: 'flex', position: 'relative', padding: '2rem'}}>
        <h3 className="title is-3">Helm charts:</h3>
      </div>
      <div className="container" style={{ display: 'flex', position: 'relative', padding: '2rem' }}>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title" style={{ wordBreak: 'normal' }}>Monitoring stack</p>
                <button className="button is-primary is-outlined"><a href="https://artifacthub.io/packages/helm/helm-charts-alexis-carbillet/monitoring-stack" target="_blank">Github</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">Logging stack</p>
                <button className="button is-primary is-outlined"><a href="https://artifacthub.io/packages/helm/helm-charts-alexis-carbillet/logging-stack" target="_blank">Github</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
