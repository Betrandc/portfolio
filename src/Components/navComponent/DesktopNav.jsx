import './Nav.css'

export const DesktopNav = () => {
  return (
    <div className='desktop-nav'>
        <a href='#' className='home'><p >Home</p></a>
        <ul className='nav-desktop-container'>
            <a href='#about'><li>About Me</li></a>
            <a href='#services'><li>Services</li></a>
            <a href='#experience'><li>Experience</li></a>
            <a href='#contact'><li>Contact</li>  </a> 
        </ul>
    </div>
  )
}
