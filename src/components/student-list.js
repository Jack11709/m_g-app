import React from 'react'
import Layout from './layout'
import StudentCard from './student-card'

const courseData = {
  sei: 'SEI is General Assembly’s Software Engineering Immersive track. Think of it as a bootcamp. We certainly do. To us, immersive means all day, every day, weekends and weeknights, for 12 weeks straight. Students with completely different backgrounds, all retrained as web developers. Graduates are trained in a variety of skills including HTML, CSS, JavaScript, React, Node.js and Python, and they are all eager to put their new skills to work.',
  uxdi: 'The 10 week User Experience Design Immersive is designed to have students living and breathing User Experience Design. Composed of classes delivered by top practitioners, workshops intended to build students’ portfolios, and social events that immerse students into the UX community, UXDI is made for those seriously looking to enter the world of User Experience. Students work on building their UX portfolios and basic prototyping using HTML & CSS.',
  dsi: 'The 12 week Data Science Immersive is designed to have students take on real world problems by analysing data sets for insights and presenting findings using statistics, programming, data modeling, and business knowledge. They will program with Python, visualise the data with Tableau and Matplotlib, clean it with Pandas and NumPy, as well as working with SQL for database management. They’ll complete a few mini projects, but they’ll spend most of their course working on one large capstone project.'
}

const StudentList = props => {
  
  const students = props.pageContext.students
  
  return (
    <Layout>
      <section className="section profile-top">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            <div className="column is-12-mobile is-10-tablet is-offset-1-tablet">
              <section className="course-description">
                <p className="title is-6">{courseData[props.path.replace('/', '')]}</p>
              </section>
            </div>
            {students.map(({ node }) => <StudentCard key={node.id} {...node}/>)}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default StudentList