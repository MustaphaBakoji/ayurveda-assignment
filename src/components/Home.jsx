import React from 'react'
import { motion } from 'framer-motion'
import { MdNature, MdOutlineAgriculture } from 'react-icons/md'
import { HiCodeBracket } from 'react-icons/hi2'
import { GiHerbsBundle, GiMedicines, GiRemedy } from 'react-icons/gi'


function Home() {
    return (
        <div className='home'>


            <div className='container'>


                <p className='mb-8 mt-8'> namaste,welcome to Amrutam</p>
                <p className=' text-2xl font-bold '> Step into hollistic Healing with  <span>Ayurveda</span></p>
                <p className=' text-2xl font-bold'>Book Consultation with Certified Experts</p>

                <p className=' mt-8 '>Dive into the world of Ayurveda,and experience personalize solution <br /> and holistic guidance from trusted Ayurvedic doctors anytime,anywhere</p>
                <motion.button
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, fontStyle: 'bold' }} className=' w-64 sm:w-72 h-10 bg-green-700 rounded mt-5 home-btn' > BOOK AN APPOINTMENT</motion.button>
            </div>


        </div>
    )
}

export default Home