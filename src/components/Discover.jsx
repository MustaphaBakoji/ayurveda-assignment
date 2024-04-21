import React, { useEffect, useState } from 'react'
import { BsHeartPulseFill } from 'react-icons/bs'
import { FaRunning } from 'react-icons/fa'
import { FaHandHoldingMedical, FaHeartCirclePlus, FaHeartPulse } from 'react-icons/fa6'
import { FiBold } from 'react-icons/fi'
import { GiEnergyBreath, GiHealingShield, GiHealthIncrease, GiHealthNormal, GiHeartBattery, GiHerbsBundle, GiMedicines } from 'react-icons/gi'
import { MdEnergySavingsLeaf, MdHealthAndSafety } from 'react-icons/md'
import { PiArrowElbowDownLeftBold } from 'react-icons/pi'
import { RiHeartPulseLine } from 'react-icons/ri'
import { SlEnergy } from 'react-icons/sl'
import { TbHeartStar } from 'react-icons/tb'
import Discover_Desktop from './Discover_Desktop'
import Discover_Mobile from './Discover_Mobile'

function Discover() {
    const [isMobile, setisMobile] = useState(true)

    window.addEventListener('resize', () => { setisMobile(window.innerWidth < 590) })
    useEffect(() => {

        setisMobile(window.innerWidth < 580)

    }, [])


    {
        return <div id='about'>
            <div>

                <h2 className=' text-green-700 text-2xl underline '> Discover Ayurveda's Magic with Us </h2>
                <p className='text-green-700'> ayurevedic treatment aims to balance you body and mind ,bringing harmony <br />and vitality ,it is like a journey to health using ancient wisdom,<br />a totally effective approuch for a better life</p>
            </div>


            {!isMobile ? (<Discover_Desktop />)
                :

                (<Discover_Mobile />)}

        </div>
    }

}

export default Discover