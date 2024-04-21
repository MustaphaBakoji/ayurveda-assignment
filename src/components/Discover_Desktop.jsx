import React from 'react'
import { BsHeartPulseFill } from 'react-icons/bs'
import { FaRunning } from 'react-icons/fa'
import { FaHandHoldingMedical, FaHeartCirclePlus, FaHeartPulse } from 'react-icons/fa6'
import { FiBold } from 'react-icons/fi'
import { GiHeartBattery, GiHerbsBundle, GiMedicines } from 'react-icons/gi'
import { MdEnergySavingsLeaf, MdHealthAndSafety } from 'react-icons/md'

import { TbHeartStar } from 'react-icons/tb'
function Discover_Desktop() {
    return (
        <div>
            <div className='grid grid-cols-3 place-items-center'>

                <div className='flex flex-col'>
                    <div className='flex mb-6'>
                        <div className=' grid grid-cols-1'><p className=' font-semibold'>Personalized wellness </p><p> get treatment made just for you based  on<br /> your individual dashes</p></div>
                        <div className='grid grid-cols-1 bg-slate-400 h-16 w-16 rounded-full opacity-80 place-items-center'><TbHeartStar className='w-14 h-14 text-blue-400 font-thin' /></div>

                    </div>


                    <div className='flex mb-8 '>
                        <div className=' grid grid-cols-1'><p className=' font-semibold'>Focus on Prevention </p><p> stops problems even   before they start</p></div>
                        <div className='grid grid-cols-1 bg-slate-400 h-16 w-16 rounded-full opacity-80 place-items-center'><FaHandHoldingMedical className='w-14 h-14 text-green-700' /></div>

                    </div>
                    <div className='flex '>
                        <div className=' grid grid-cols-1'><p className=' font-semibold'>Mind-Body Connection </p><p> Keep mind and Body in sync for happy life</p></div>
                        <div className='grid grid-cols-1 bg-slate-400 h-16 w-16 rounded-full opacity-80 place-items-center'><FaRunning className=' w-14 h-14 text-green-700 ' /></div>

                    </div>

                </div>

                <div className=' w-72 h-72 rounded-full discover-container relative' >
                    <img src={require('../statics/lady.png')} alt="" className=' absolute discover-image h-70 w-70' />

                </div>



                <div className='flex flex-col'>
                    <div className='flex mb-6'>
                        <div className='grid grid-cols-1 bg-slate-400 h-16 w-16 rounded-full opacity-80 place-items-center'><FaHandHoldingMedical className='w-14 h-14 text-green-700' /></div>

                        <div className=' grid grid-cols-1'><p className=' font-semibold'>Personalized wellness </p><p> get treatment made just for <br />you based  on your individual dashes</p></div>

                    </div>


                    <div className='flex mb-8  ml-5'>
                        <div className='grid grid-cols-1 bg-slate-400 h-16 w-16 rounded-full opacity-80 place-items-center'>
                            <GiHerbsBundle className=' text-green-700 w-7 h-7' />
                            <GiMedicines className=' text-green-700 w-7 h-7' /></div>

                        <div className=' grid grid-cols-1'><p className=' font-semibold'>Boosting Immunity </p><p className='ml-5'> stay strong and healthy not only for today</p></div>

                    </div>
                    <div className='flex '>
                        <div className='grid grid-cols-1 bg-slate-400 h-16 w-16 rounded-full opacity-80 place-items-center'><MdEnergySavingsLeaf className=' w-14 h-14 text-green-700 ' /></div>

                        <div className=' grid grid-cols-1'><p className=' font-semibold'>Mind-Body Connection </p><p> Keep mind and Body in sync for happy life</p></div>

                    </div>

                </div>








            </div>
        </div>
    )
}

export default Discover_Desktop