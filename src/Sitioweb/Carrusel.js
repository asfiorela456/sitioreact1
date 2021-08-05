import React from 'react'

const Carrusel = () => {
    return (
       
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
			        	<div className="carousel-indicators">
				  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
				  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
				  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
				  <div className="carousel-item active">
					<img src="https://i.ibb.co/n00CZ3W/IMG1.jpg" className="d-block w-100" alt="..."/>
					<div className="carousel-caption d-none d-md-block">
					  <h5>Se parte de nuestra familia IDAT</h5>
					  <p>Estudia en menos tiempo mientras trabajas.</p>
					</div>
				  </div>
				  <div className="carousel-item">
					<img src="https://i.ibb.co/4Vn2kQj/IMG2.jpg" className="d-block w-100" alt="..."/>
					<div class="carousel-caption d-none d-md-block">
					  <h5>Se parte de nuestra familia IDAT</h5>
					  <p>Estudia en menos tiempo mientras trabajas.</p>
					</div>
				  </div>
				  <div className="carousel-item">
					<img src="https://i.ibb.co/smKTCr6/IMG3.png" className="d-block w-100" alt="..."/>
					<div className="carousel-caption d-none d-md-block">
					  <h5>Se parte de nuestra familia IDAT</h5>
					  <p>Estudia en menos tiempo mientras trabajas.</p>
					</div>
				  </div>
				</div>
				
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
				  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
				  <span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
				  <span className="carousel-control-next-icon" aria-hidden="true"></span>
				  <span className="visually-hidden">Next</span>
				</button>
			  </div>
       
    )
}

export default Carrusel
