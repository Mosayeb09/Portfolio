import { Link } from 'react-scroll';
import './Nav.css'
import { useEffect, useState } from 'react';
import menu_icon from '../../../public/Portfolio_assets/menu-icon.png'


const Nav = () => {
    const [sticky, setSticky]=useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''} `}>
             <a href="hero" className='ptflo' >Portfolio.</a>

            
             <ul>
                <li><Link to={'home'} >Home</Link></li>
                <li><Link to={'About'}>About</Link> </li>
                <li> <Link to={'portfolio'}>Portfolio</Link></li>
                <li> <Link to={'contact'}>Contact</Link></li>
                <li></li>
            </ul>
  
            {/* <img src={menu_icon} alt="" /> */}
   

                
           
        </nav>
    );
};

export default Nav;