import React from 'react'
import { BiConversation, BiHealth, BiMessageAltDetail, BiShieldPlus, BiSolidConversation } from 'react-icons/bi'
import { BsChatHeart } from 'react-icons/bs'
import { FaUserDoctor } from 'react-icons/fa6'
import { FcOnlineSupport } from 'react-icons/fc'
import { GiBodyBalance, GiConversation, GiDoctorFace, GiElbowPad, GiEnergise, GiEnergyBreath, GiEnergyShield, GiHealing, GiHealthNormal, GiMuscleFat, GiMuscleUp, GiNurseMale, GiWell } from 'react-icons/gi'
import { IoMedical } from 'react-icons/io5'
import { MdHealthAndSafety, MdMedicalInformation } from 'react-icons/md'
import { PiArrowElbowRightBold } from 'react-icons/pi'
import { SiBoost } from 'react-icons/si'
import { SlEnergy } from 'react-icons/sl'
import { TbMessageCircleHeart, TbReportAnalytics, TbReportMedical } from 'react-icons/tb'
import Svg1 from '../SVGs/conversation-2.svg'
function Description() {
    return (
        <div>
            <div className=' h-96 sm:h-16 sm:w-full bg-orange-200 sm:flex grid grid-cols-1 place-items-center  sm:flex-row justify-between items-center'>
                <div className='flex text-green-700 sm:ml-8 discription'>

                    <div className=' w-8 h-8 sm:h-6 text-green-700 bg-white border-2 border-solid rounded-full grid grid-cols-1 place-items-center border-green-700'><GiConversation /> </div>
                    <p>
                        convinient online & in-clinic consulatation
                    </p>
                </div>
                <div className='flex text-green-700 discription'>

                    <div className=' w-8 h-8 sm:h-6 text-green-700 bg-white border-2 border-solid rounded-full grid grid-cols-1 place-items-center border-green-700'><BiShieldPlus /> </div>
                    <p>
                        convinient online & in-clinic consulatation
                    </p>
                </div>
                <div className='flex text-green-700 discription'>

                    <div className=' w-8 h-8 sm:h-6 text-green-700 bg-white border-2 border-solid rounded-full grid grid-cols-1 place-items-center border-green-700'><GiNurseMale /> </div>
                    <p>
                        convinient online & in-clinic consulatation
                    </p>
                </div>
                <div className='flex text-green-700 sm:mr-8 discription'>

                    <div className=' w-8 h-8 sm:h-6 text-green-700 bg-white border-2 border-solid  rounded-full grid grid-cols-1 place-items-center border-green-700'>  <TbReportMedical /> </div>
                    <p>
                        convinient online & in-clinic consulatation
                    </p>
                </div>

            </div>





        </div>
    )
}

export default Description;