import React from 'react'
import Layout from './layout'

const courseTitle = {
  SEI: 'Software Engineering Immersive',
  DSI: 'Data Science Immersive',
  UXDI: 'User Experience Design Immersive'
}

const Student = props => {
  
  const { image, name, course, headline, skills, q1, a1, q2, a2 } = props.pageContext

  return (
    <Layout>
      <section className="section profile-container">
        <div className="container">
          <section className="section profile-top">
            <div className="columns">
              <div className="column is-half-desktop is-fullwidth-tablet is-fullwidth-mobile student-image">
                <figure className="image">
                  <img className={`is-rounded ${course.toLowerCase()} image-border`} src={image} alt={name} />
                </figure>
              </div>
              <div className="column is-half-desktop is-fullwidth-tablet is-fullwidth-mobile">
                <p className="title has-text-centered-mobile">{name}</p>
                <p className="subtitle has-text-centered-mobile">{courseTitle[course]}</p>
                <p className="subtitle is-6 has-text-centered-mobile"><i>&quot{headline}&quot</i></p>
                <p className="subtitle">Top skills:</p>
                <table className="table is-bordered">
                  <tbody>
                    <tr>
                      {skills.split(',').map(s => s.trim()).map(skill => <td key={skill}>{skill}</td>)}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
        <div className="container">
          <section className="section profile-top">
            <div className="columns">
              <div className="column is-half-desktop">
                <p className="title is-6 has-text-centered-mobile">{q1}</p>
                <p className="subtitle is-6 has-text-centered-mobile"><i>&quot{a1}&quot</i></p>
              </div>
              <div className="column is-fullwidth column is-half-desktop">
                <p className="title is-6 has-text-centered-mobile">{q2}</p>
                <p className="subtitle is-6 has-text-centered-mobile"><i>&quot{a2}&quot</i></p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  )
}
export default Student


