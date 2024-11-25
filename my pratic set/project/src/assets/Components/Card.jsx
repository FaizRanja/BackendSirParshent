import React, { Fragment } from 'react'

const Card = () => {
  return (
    <Fragment>

<div className="card" >
  <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

    </Fragment>
  )
}

export default Card
