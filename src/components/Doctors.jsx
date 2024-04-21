import React, { useEffect, useState } from 'react'
import { FaHatCowboySide } from 'react-icons/fa'
import { GiGraduateCap, GiTopHat } from 'react-icons/gi'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { WebDr } from './WebReview';
let list = [1, 1, 1, 1, 1, 1, 1, 1, 1],
    weblist = [1, 1, 1]

function Doctors() {
    const [isMobile, setisMobile] = useState(true)

    window.addEventListener('resize', () => { setisMobile(window.innerWidth < 590) })
    useEffect(() => {

        setisMobile(window.innerWidth < 580)

    }, [])
    return (
        <div className=' ml-auto mr-auto mt-4' id='experts'>
            <h1 className="font-semibold text-green-700 text-2xl">
                Meet our Ayurveda Experts
            </h1>
            {
                isMobile && <Carousel className=' w-[100vw] grid place-items-center  ' showStatus={false}>{list.map((i) => (<div className=' mt-6'>
                    <div className="grid place-items-center doctor w-56 h-56 rounded ml-auto mr-auto">
                        <img src={require('../statics/Dr.jpg')} alt="" className=' w-20 h-20 rounded-full bg-orange-200' style={{ height: '5rem', width: '5rem' }} />
                        <div className="text-green-700">
                            <p className="font-semibold ">
                                Dr Vaishali Shamma
                            </p>
                            <p>
                                ayuveda practionner (BAMS,MD)
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <GiGraduateCap className=' text-green-900 w-7 h-7' />
                            <p className=' text-green-900 font-light'>25 years of experience</p>
                        </div>
                    </div>
                </div>))}</Carousel >}
            {
                !isMobile && <Carousel>
                    {weblist.map((i) => (<WebDr />))}
                </Carousel>
            }
        </div>
    )
}

export default Doctors