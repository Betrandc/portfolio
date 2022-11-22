import logo from './logo.svg';
import './App.css';
import { Header } from './Components/headerComponent/Header';
import { Nav } from './Components/navComponent/Nav';
import { About } from './Components/aboutcomponet/About';
import { Experience } from './Components/expirenceComponent/Experience';
import { Contact } from './Components/ContactComponent/Contact';
import { Footer } from './Components/footerComponent/Footer';
import { Service } from './Components/serviceComponents/Service';
import { DesktopNav } from './Components/navComponent/DesktopNav';




function App() {
  return (
    <div >
        
      <DesktopNav/>
      <Header/>
      <Nav/>
     
      <About/>
      <Service/>
      <Experience/>
      
      <Contact/>
      
    </div>
  );
}

export default App;
