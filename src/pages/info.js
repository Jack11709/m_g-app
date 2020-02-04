import React from 'react';

import Layout from '../components/layout';

const InfoPage = () => (
  <Layout>
    <section className="section">
      <div className="container">
        <p className="title is-5 has-text-centered">HOW TO HIRE</p>
        <div className="columns">
          <div className="column">
            <p className="title is-6">Full-time:</p>
            <p className="subtitle is-6">Make them a permanent member of the team.</p>
          </div>
          <div className="column">
            <p className="title is-6">Contract Work:</p>
            <p className="subtitle is-6">Hire them freelance, work out an agreement for a capstone project or assemble a “contract to full time”arrangement.</p>
          </div>
        </div>
        <p className="title is-5 has-text-centered">ANY QUESTIONS?</p>
        <div className="columns">
          <div className="column">
            <p className="title is-6">Casey Nailer</p>
            <p className="title is-6">Astrid Haizet-Blanco</p>
            <p className="title is-6">John Furno</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default InfoPage;
