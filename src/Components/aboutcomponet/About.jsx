import { HeadText } from '../common/HeadTex'
import './about.css'
import { VerticalLine } from './CircularLine/VerticalLine'

export const About = () => {
  return (
    <section id='about'>
      <h5>Ge to know </h5>
      <HeadText text="About Me "/>

      <div className="container about__container">
        
          <div className="about">
            <p>I am a person who is willing to learn, and willing to help others and encourage them 
              when they are weak. I can work with people of different categories irrespective of their
              age, gender,race, beliefs. Am a good team player

            </p>
          
        </div>
        <div className='education-wrapper'>
          <div className="education">
          <VerticalLine year='2021 - 2022' degree='Bachelor in Technology' institution="Higher Institute of Management Studies(HIMS) Buea"/>
         
          
          <VerticalLine degree='Higher National Diploma'
           institution='Higher Institute of Management Studies(HIMS) Buea' year='2019 - 2021'/>
          
          </div>
          <br/> 
        <a href="#contact" className='btn-primary'>let's talk</a>
        </div>

      </div>
    </section>
  )
}
