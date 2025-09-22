import React from "react";
import Navbar from './components/Navbar';

export default function Fiverr() {
  return (
    <>
    <Navbar />
    <section className="section">
      <div className="container" style={{ display: 'flex', position: 'relative', padding: '2rem' }}>
        <h3 className="title is-3">Fiverr services:</h3>
      </div>
      <div className="container" style={{ display: 'flex', position: 'relative', padding: '2rem' }}>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title" style={{ wordBreak: 'normal' }}>Review python code</p>
                <button className="button is-primary is-outlined"><a href="https://www.fiverr.com/s/Q7LkVV1" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title" style={{ wordBreak: 'normal' }}>Review golang code</p>
                <button className="button is-primary is-outlined"><a href="http://www.fiverr.com/s/vvRl5Ne" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title" style={{ wordBreak: 'normal' }}>Review terraform code</p>
                <button className="button is-primary is-outlined"><a href="http://www.fiverr.com/s/rEkKkg7" target="_blank">Website</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
