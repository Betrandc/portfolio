import { HeadText } from '../common/HeadTex'
import './Service.css'

export const Service = () => {
  return (
    <section id='services'>
        <h5>What I offer</h5>
        <HeadText text='Services'/>

        <div className="container services__container">

          {/* THIS PART IS FOR MY FIGMA DESIGN */}
          <article className="services">
            <div className="service__head">
              <h3>Mobile App</h3>
            </div>

            <ul className="service__list">
            <li>
              <p className='whiteBall'></p>
              <span>I develop cross-platform application With both the frontend and the backend of the application </span>
              </li>
              <li>
              
              </li>
             
             
            </ul>
          </article>
        {/* THIS PART IS FOR MY WEBDESIGNING SERVICES */}
          <article className="services">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>

            <ul className="service__list">
              <li>
              <p className='whiteBall'></p>
              <span>I develop web application both the frontend and backend of the application</span>
              </li>
              <li>
              
              </li>
             
             
            </ul>
          </article>
        {/*  THI PAR IS FOR MY MOBILE SERVICE THAT I OFFER */}

        
        </div>
    </section>
  )
}
