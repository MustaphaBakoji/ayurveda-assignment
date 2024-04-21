import React from 'react'
import { FaStar } from 'react-icons/fa'
import { GiGraduateCap } from 'react-icons/gi'
let list = [1, 1, 1]
function WebReview() {

    return (
        <div className=' flex justify-between ml-auto mr-auto w-full web-review'>
            {list.map((i) => (
                <div className=" courosel-effect w-60 h-60  bg-white  rounded grid place-items-center ml-auto mr-auto review-cards">

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

                </div>
            ))}
        </div>
    )
}

export function WebDr() {
    return (
        <div className='flex justify-between w-4/5 ml-auto mr-auto'>
            {list.map((i) => (
                <div className="grid place-items-center doctor w-56 h-56 rounded">
                    <img src={require('../statics/Dr.jpg')} alt="" className=' dr-image w-16 h-16 rounded-full bg-orange-200' style={{ height: '5rem', width: '5rem' }} />
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
            ))}
        </div>
    )
}


export default WebReview
