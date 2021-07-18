import logo from './logo.svg';
import './App.css';
import Header from './Sitioweb/Header';
import Carrusel from './Sitioweb/Carrusel';
import Aside from './Sitioweb/Aside';
import Formulario from './Sitioweb/Formulario';
import MapaUbic from './Sitioweb/MapaUbic';
import Video from './Sitioweb/Video';
import PiePag from './Sitioweb/PiePag';
import MenuNav from './Sitioweb/MenuNav';
<p>ESTA ES UNA PÁGINA DE PRUEBA</p>
function App() {
  return (
    <div className="container">
      

      <header className="row bg-light" >
        <Header/>
      </header>

	    <nav className="row bg-warning">
      <MenuNav/>
	    </nav>

	  <section className="row bg-primary"> 
		  <article className="col-md-6 bg-warning"> 
        <Carrusel/>
		  </article>
		 
		<aside className="col-md-3 bg-secondary">
			<Aside/>
		</aside>
   
    <article className="col-md-3 bg-primary">
      <Formulario/>
  	</article>
    
  <article className="col-md-5 justify-content-center bg-success">
    <MapaUbic/>
  </article>

  <article className="col-md-7 d-flex justify-content-center bg-secondary">
    <Video/>
  </article>
	</section>

	<footer className="row bg-dark d-flex justify-content-center align-items-center text-light" style={{height:'120px'}}>
		<PiePag/>
	</footer>
    </div>
  );
}

export default App;


