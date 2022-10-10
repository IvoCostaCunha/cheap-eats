import React from 'react'
import './about2.css'

import ass1 from '../../coreteam/othman_mekouar.png'
import ass2 from '../../coreteam/nassou_keita.png'
import ass3 from '../../coreteam/ivo_costa.png'
import ass4 from '../../coreteam/fatou_seck.png'
import ass5 from '../../coreteam/mamadou_camara.png'


const About = () => {
  return (


    <section id="services">


      <h2>Core Team Devellopement</h2>





      <div className="container about__container">



        <div className="about__cards">



          <div className='about__card'>
            <img src={ass3} />
            <h5>IVO COSTA</h5>
            <br />
            <small>
              DEV BACK END ET GESTION DE PROJET DE CHEAPEAT
            </small>
          </div>


          <div className='about__card'>
            <img src={ass1} />
            <h5>OTHMAN MEKOUAR</h5>
            <br />
            <small>
              Dev Front-end et STRATEGIC MANAGEMENT
            </small>
          </div>

          <div className='about__card'>
            <img src={ass2} />
            <h5>NASSOU KEITA</h5>
            <br />
            <small>
              Gestion de projet et Database manager
            </small>
          </div>

          <div className='about__card'>
            <img src={ass4} />
            <h5>FATOU SECK</h5>
            <br />
            <small> Chef de projet Informatique</small>
          </div>

          <div className='about__card'>
            <img src={ass5} />
            <h5>MAMADOU CAMARA</h5>
            <br />
            <small> Gestion de projet et manager du risque </small>
          </div>



        </div>



      </div>

    </section>


  )

}


export default About