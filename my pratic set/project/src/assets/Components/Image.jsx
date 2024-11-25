import React from 'react'

const Image = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg" className="d-block w-100" alt="my imag"/>
    </div>
    <div className="carousel-item">
    <img src="https://cdn.pixabay.com/photo/2023/12/12/21/20/dog-8445917_1280.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src="https://cdn.pixabay.com/photo/2024/01/04/16/48/landscape-8487906_640.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Image