import React from 'react'
import { Link } from 'gatsby'
import _ from 'lodash'

const StudentCard = props => (
  <Link to={`/${props.course.toLowerCase()}/${_.kebabCase(props.name)}`} >
    <div className="column is-fullwidth-mobile">
      <div className="card">
        <div className="card-content media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img className={`is-rounded ${props.course.toLowerCase()} image-border-small`} src={props.image} alt={props.name} />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p className="title is-6">{props.name}</p>
            </div>
            <div className="content">
              <p className="title is-6">Table No: {props.id}</p>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </Link>
)

export default StudentCard