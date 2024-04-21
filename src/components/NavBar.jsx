import React, { useState } from 'react'
import { GiCancel, GiHamburgerMenu } from 'react-icons/gi'
import { motion } from 'framer-motion'
import { FaCross } from 'react-icons/fa'
import { CgCross } from 'react-icons/cg'
import { MdCancel } from 'react-icons/md'
import { TiCancel } from 'react-icons/ti'
function NavContent() {

    return (
        <motion.div className='nav-content place-items-center bg-slate-400 text-green-700'
            initial={{ opacity: 0, rotate: 90, scale: 0 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 1 }}


        >
            <p> <a href="#about"> About Us</a></p>
            <p><a href="#experts"> our Experts</a></p>

            <p><a href="#get-app">Get the App</a></p>


        </motion.div>
    )
}
function NavBar() {
    const [showNav, setshowNav] = useState(false)
    let NavHandler = () => {
        setshowNav((prev) => (!prev))
    }
    return (
        <div className='navBar '>
            <div className='inner-nav pl-2  grid grid-cols-2 place-items-center '>{!showNav ? <GiHamburgerMenu className=' w-8 h-8  text-green-800' onClick={NavHandler} /> : <GiCancel className=' w-8 h-8  text-green-800' onClick={NavHandler} />}
                <h1 className=' text-green-800'> AMRUTAM </h1></div>
            {showNav && <NavContent />}
        </div>
    )
}

export default NavBar