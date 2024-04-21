import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaStar } from 'react-icons/fa'
import WebReview from './WebReview';
let list = [1, 1, 1, 1, 1, 1, 1, 1, 1,]
let weblist = [1, 1, 1]


function Review() {
    const [isMobile, setisMobile] = useState(true)

    window.addEventListener('resize', () => { setisMobile(window.innerWidth < 590) })
    useEffect(() => {

        setisMobile(window.innerWidth < 580)

    }, [])
    return (
        <div>
            <h1 className=' text-2xl text-green-700 font-semibold underline'>Stories from OurCustumers</h1>

            <div className='   bg-orange-200  h-64 mt-5 sm:flex place-items-center ml-auto mr-auto sm:justify-center sm:ml-auto '>
                {isMobile && (<Carousel showIndicators className=' '>
                    {list.map(() => (<div className=" review-cards w-60 h-60  bg-white  rounded grid place-items-center ml-auto mr-auto">

                        <div className="w-56 h-8  bg-green-300 opacity-40"></div>
                        <div className="flex justify-between ml-auto mr-auto">
                            <div className="flex">
                                <div className="h-10 w-10 rounded-full bg-black mr-2 ml-2 "></div>
                                <div>
                                    <p className=' font-semibold'>Sophie Moore</p>
                                    <p className=' font-thin text-sm'>skin</p></div>
                            </div>
                            <p className='font-thin text-sm'>18/5/024</p>
                        </div>
                        <div className="ml-2 flex mt-6">  {'four'.split('').map((i) => (<FaStar className=' text-yellow-500 ml-2' />))}</div>
                        <div>
                            <p className=' font-semibold'>"one of kind services"</p>
                            <p className=' font-thin text-sm'>Lorem ipsum dolor sit amet consectetur.</p></div>

                    </div>))}
                </Carousel>)}
                {/* large screens */}
                {!isMobile &&
                    <Carousel className='w-full'>

                        {weblist.map((i) => <WebReview />)}

                    </Carousel>

                }



            </div>
        </div>
    )
}

export default Review