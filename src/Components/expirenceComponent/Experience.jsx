import { HeadText } from '../common/HeadTex'
import './Experience.css'

export const Experience = () => {
  return (
    <section id='experience'>
        <h5>the skills I have</h5>
        <HeadText text="Experience"/>
        
        <div className="container experience__container">
        <div className="experience__frontend">
            <h3>Fronend Development</h3>

            <div className="experience__content">
              <article className="experience__details">
                <p className='whiteBall'></p>
                 <div>
                 <h4>React</h4>
                  <small className='text-light'>Experience</small>
                 </div>
              </article>
              <article className="experience__details">
                <p className='whiteBall'></p>
                  <div>
                  <h4>Flutter</h4>
                  <small className='text-light'>Experience</small>
                  </div>
              </article>
              <article className="experience__details">
                <p className='whiteBall'></p>
                 <div>
                 <h4>PHP</h4>
                  <small className='text-light'>Experience</small>
                 </div>
              </article>
              <article className="experience__details">
                <p className='whiteBall'></p>
                  <div>
                  <h4>TypeScript</h4>
                  <small className='text-light'>Experience</small>
                  </div>
              </article>
            </div>

          </div>
          <div className="experience__backend">
            <h3>Backend Development</h3>

            <div className="experience__content">
              <article className="experience__details">
                <p className='whiteBall'></p>
                 <div>
                 <h4>MySQl</h4>
                  <small className='text-light'>Experience</small>
                 </div>
              </article>
              <article className="experience__details">
                <p className='whiteBall'></p>
                  <div>
                  <h4>Spring Boot</h4>
                  <small className='text-light'>Experience</small>
                  </div>
              </article>
              <article className="experience__details">
                <p className='whiteBall'></p>
                  <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Experience</small>
                  </div>
              </article>
              <article className="experience__details">
                <p className='whiteBall'></p>
                 <div>
                 <h4>Firebase</h4>
                  <small className='text-light'>Experience</small>
                 </div>
              </article>
            </div>

          </div>


        </div>
    </section>
  )
}
