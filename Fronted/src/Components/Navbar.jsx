import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";
import  {Button}  from  "./Button"

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] =useState(true);

    const HandleClick =() => setClick(!click);
    const CloseMobileMenu = () => setClick(false)

    const ShowButton = ()=> {
        if(window.innerWidth <=960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        ShowButton()
    }, []);


    window.addEventListener("resize",ShowButton);


  return (
    <>
    <nav className='Navbar'>
        <div className="navbar-container">
            <Link  to="/" classNamen= "narvar-logo"  onClick={CloseMobileMenu}> 
            Hyatt Hotels<i class="fa-solid fa-earth-europe"></i>
            </Link>
            <div className='menu-icon'>
             <i className={click ? "fas fas-times": "fas fas-bars"}/>
            </div>
        <ul className={click ? "nav-menu active": "nav-menu"}>
            <li className='nav-intem'>
                <Link to="/" className='nav-links' onClick={CloseMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/" className='nav-links' onClick={CloseMobileMenu}>
                    Services
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/" className='nav-links' onClick={CloseMobileMenu}>
                    Products
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/" className='nav-links' onClick={CloseMobileMenu}>
                    Costumers
                </Link>
            </li>
        </ul>
            {button && (
            <Link to="/Signup">
                <Button buttonStyle='btn--outline'>Signup</Button>
             </Link>
            )}
        </div>
    </nav>
    </>
  );
}

export default Navbar;