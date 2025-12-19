import { Link, NavLink } from "react-router-dom"
import LogoPL from '../../assets/images/PL.webp'
import LogoSubtitle from '../../assets/images/sub-logo.png'
import { useState } from 'react'

const Sidebar = () => {
    const[showNav, setShowNav] = useState(false);
    return(
        <div className='nav-bar'>
            <Link className="logo" to="/">
                <img src={LogoPL} alt="logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="PremierZone" />
            </Link>
    <div className="hamburger-icon" onClick={() => setShowNav(true)}/>
        </div>
    )
}

export default Sidebar