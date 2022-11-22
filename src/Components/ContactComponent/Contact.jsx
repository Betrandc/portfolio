import { HeadText } from '../common/HeadTex'
import './Contact.css'

export const Contact = () => {
  return (
    <section id='contact'>
        <h5>Let's Talk</h5>
        <HeadText text='Contact Me'/>
        <form action="">
        <div className="contact-container">
             <div className="email">
              <span className="email-text">
                Email
              </span>
              <input type="text" placeholder='Enter you email' />
              </div> 

              <div className="subject">
              <span className="subject-text">
                Subject
              </span>
              <input type="text" placeholder='Enter subject' />
              </div> 

              <div className="message">
              <span className="message-text">
               Message
              </span>
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
              </div> 


              <div className="button">
              <span className="button">
              
              </span>
              <a href="#contact" className='btn-primary'>Submit</a>
              </div> 
              
        </div>
       </form>
    </section>
  )
}
