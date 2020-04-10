import React from 'react'

function Project({ name, image }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <button>View Project</button>
        <button>View Code</button>
      </div>
    </div>
  )
}

export default Project