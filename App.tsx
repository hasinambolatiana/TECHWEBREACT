import React from 'react';
import logo3 from'./logo3.jpg'
import photo0 from'./photo0.jpg'
import photo1 from'./photo1.jpg'
import photo3 from'./photo3.jpg'
import photo4 from'./photo4.jpg'
import photo5 from'./photo5.jpg'
import photo6 from'./photo6.jpg'
import './App.css';
import './tech.css'
import Composant from './component/Composant';
function App() {
  return (
<div>

<div className="darkgreen">
  	<section className="section-1">
  			<header className="header">
  				<div id="menu0">
					  <p>RANDRIAMAHATANA Hasina Mbolatiana 
						 N:19
						  IGGLIA3</p>
  				</div>
  				<div id="menu">
  					<a id="image1" href="#"><img src={logo3} alt="menu"/></a>
  				</div>
  			</header>
  	</section>
  
    <section className="section-2">
  			<span><b><a href="#">Messages</a></b></span>
  			<span><b><a href="#">Historique</a></b></span>
  			<span><b><a href="#">Appels</a></b></span>
  	</section>

	  <section className="section-3">
    <article>
      <div className="first">
         <img src={photo0} alt=""/> 
      </div>

      <div className="second">
        <b>annah</b>
        <p>ca va toi</p>
      </div>

      <div className="third">
        <p>Samedi 09:53PM</p>
      </div>
    </article>

    <article>
      <div className="first">
         <img src={photo1} alt=""/> 
      </div>

      <div className="second">
        <b>marley</b>
        <p>HELLO</p>
      </div>

      <div className="third">
        <p>Lundi  12:00PM</p>
     </div>
	 </article>
	 </section>

		<section className="section-3">
           <article>
      <div className="first">
         <img src={photo4} alt=""/> 
      </div>

      <div className="second">
        <b>GRITTE</b>
        <p>CC</p>
      </div>

      <div className="third">
        <p> Mardi 1:16PM</p>
      </div>
    </article>

    <article>
      <div className="first">
         <img src={photo5} alt=""/> 
      </div>

      <div className="second">
        <b>sophie</b>
        <p>quoi?</p>
      </div>

      <div className="third">
        <p> Jeudi 10:35PM</p>
      </div>
    </article>


    <article>
      <div className="first">
         <img src={photo6} alt=""/> 
      </div>

      <div className="second">
        <b>sweety</b>
        <p>humm</p>
      </div>

      <div className="third">
        <p> Lundi 1:53PM</p>
      </div>
    </article>

    <article>
      <div className="first">
         <img src={photo3} alt=""/> 
      </div>

      <div className="second">
        <b>katty</b>
        <p>bye</p>
      </div>

      <div className="third">
        <p> Vendredi 10:50PM</p>
      </div>
    </article>
</section>
	</div>

</div>
  );
  }
export default App;
