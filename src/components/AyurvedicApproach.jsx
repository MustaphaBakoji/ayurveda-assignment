import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function AyurvedicApproach() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    const [isMobile, setisMobile] = useState(true)

    window.addEventListener('resize', () => { setisMobile(window.innerWidth < 590) })
    useEffect(() => {

        setisMobile(window.innerWidth < 580)

    }, [])


    return (
        <div className=' bg-white'>
            <h1 className="text-2xl mt-3 underline text-green-900">
                Our AyurVedic Approach

            </h1>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus <br />dolorum illo omnis exercitationem fugiat veritatis eaque.</p>
            {!isMobile ? <div className="grid grid-cols-1 place-items-center sm:flex sm:justify-around sm:mr-auto ml-auto">

                <div className="rounded appr-cards w-44 h-40 bg-orange-200 grid grid-cols-1 place-items-center"><div className="rounded-full h-16 w-16 bg-green-900 text-white text-3xl grid place-items-center">1 </div><div><p className="font-semibold text-green-900"> consultation</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p></div></div>
                <div className="rounded appr-cards w-44 h-40 bg-orange-200 grid grid-cols-1 place-items-center"><div className="rounded-full h-16 w-16 bg-green-900 text-white text-3xl grid place-items-center">2 </div><div><p className="font-semibold text-green-900"> make Appointment</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p></div></div>
                <div className="rounded appr-cards w-44 h-40 bg-orange-200 grid grid-cols-1 place-items-center"><div className="rounded-full h-16 w-16 bg-green-900 text-white text-3xl grid place-items-center">3 </div><div><p className="font-semibold text-green-900">Treatement Planning</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p></div></div>
                <div className="rounded appr-cards w-44 h-40 bg-orange-200 grid grid-cols-1 place-items-center"><div className="rounded-full h-16 w-16 bg-green-900 text-white text-3xl grid place-items-center">4 </div><div><p className="font-semibold text-green-900">Mainatainance</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p></div></div>
            </div> : <Slider {...settings}>

                <div className="rounded appr-cards w-40 h-40 bg-orange-200 grid grid-cols-1 place-items-center"><div className="rounded-full h-16 w-16 bg-green-900 text-white text-3xl grid place-items-center ml-auto mr-auto">1 </div><div><p className="font-semibold text-green-900"> consultation</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p></div></div>
                <div className="rounded appr-cards w-40 h-40 bg-orange-200 grid grid-cols-1 place-items-center"><div className="rounded-full h-16 w-16 bg-green-900 text-white text-3xl grid place-items-center ml-auto mr-auto">2 </div><div><p className="font-semibold text-green-900"> make Appointment</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p></div></div>
                <div className="rounded appr-cards w-40 h-40 bg-orange-200 grid grid-cols-1 place-items-center"><div className="rounded-full h-16 w-16 bg-green-900 text-white text-3xl grid place-items-center ml-auto mr-auto">3 </div><div><p className="font-semibold text-green-900">Treatement Planning</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p></div></div>
                <div className="rounded appr-cards w-40 h-40 bg-orange-200 grid grid-cols-1 place-items-center"><div className="rounded-full h-16 w-16 bg-green-900 text-white text-3xl grid place-items-center ml-auto mr-auto">4 </div><div><p className="font-semibold text-green-900">Mainatainance</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p></div></div>


            </Slider>}


        </div >

    )
}

export default AyurvedicApproach