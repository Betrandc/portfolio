
import './Header.css'
import { CV} from './CV'

export const Header = () => {
  return (
    <header className='header'>
        <div className=" header-container ">
            <h5>Hello I'm </h5>
            <h1>Sakwe  BetrandCliff</h1>
            {/* <h5 className="text_light">fullstack flutter deverloper</h5> */}
             <CV/> 
         </div>
             <div className="profilePicture">
               <div className="profilePicture-background"></div>
             </div>

             

       
    </header>
  )
}
