import React from 'react'
import Layout from './layout'
import StudentCard from './student-card'

const StudentList = props => {

  const students = props.pageContext.students
  
  return (
    <Layout>
      <section className="section profile-top">
        <div className="container">
          <div className="columns">
            {students.map(({ node }) => <StudentCard key={node.id} {...node}/>)}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default StudentList