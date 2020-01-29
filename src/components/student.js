import React from 'react'
import Layout from './layout'

const courseTitle = {
  SEI: 'Software Engineering Immersive',
  DSI: 'Data Science Immersive',
  UXDI: 'User Experience Design Immersive'
}

const Student = props => {
  const { image, name, course, quote } = props.pageContext
  console.log(quote)
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half-desktop is-fullwidth-tablet is-fullwidth-mobile student-image">
              <figure className="image">
                <img className={`is-rounded ${course.toLowerCase()} image-border`} src={image} alt={name} />
              </figure>
            </div>
            <div className="column is-half-desktop is-fullwidth-tablet is-fullwidth-mobile">
              <p className="title has-text-centered-mobile">{name}</p>
              <p className="subtitle has-text-centered-mobile">{courseTitle[course]}</p>
              <p className="subititle has-text-centered-mobile"><i>"{quote}"</i></p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Student