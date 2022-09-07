import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import React from "react"
import theme from '../images/theme-light-dark.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'
import menu from '../images/menu.png'
import { useState } from 'react'


 const Nav = () =>{
    const [toggleMenu, setToggleMenu] = useState(false)

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
      }

    return (
    <nav>
        <ul className="info-navigation">
            <li onClick={()=>setToggleMenu(!toggleMenu)} className="menu"><img src={menu} alt='menu'  /></li>
            <h1>Boki's Blog</h1>
            <li><img src={theme} alt='theme' /></li>
        </ul>


        <ul className="main-navigation">
            <div>
                <Link to='/'>
                    <li style={{color: 'black'}}>Home</li>
                </Link>
                <li>Blogs</li>
                <li>Portfolio</li>

            </div>
            <div className="icons-container">
                <li><img src={github} alt='github' /></li>
                <li><img src={linkedin} alt='linkedin' /></li>
                <li><img src={twitter} alt='twitter' /></li>
            </div>
        </ul>
        {/* <motion.div 
                animate={toggleMenu ? "open" : "closed"}
                variants={variants}
                className='side-menu'
            // className='side-menu' style={{display: toggleMenu ? 'flex' : 'none'}}
            >
            <div>
                <Link to='/'>
                    <li style={{color: 'black'}} onClick={()=>setToggleMenu(!toggleMenu)}>Home</li>
                </Link>
                <li>Blogs</li>
                <li>Portfolio</li>
                <button onClick={()=>setToggleMenu(!toggleMenu)}>X</button>
            </div>

        </motion.div> */}
    </nav>

    )
 }

 export default Nav