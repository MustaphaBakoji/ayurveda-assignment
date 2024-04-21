import React from 'react'

function GetApp() {
    return (
        <div id='get-app' className=' grid grid-cols-1 sm:grid-cols-2 place-items-center bg-orange-200 '>
            <div>  <h1 className=' text-green-700 sm:text-3xl sm:font-semibold place-items-center'>
                Amrutam Home App
            </h1>
                <p className=' '>Lorem ipsum dolor sit amet, consectetur adipisicing niam</p>

                <p className=' text-2xl  font-semibold'>Get A diet And LifeStyle consultation with Ayurvedic Experts Acrosss the globe</p>
                <img src={require('../statics/pngwing.com.png')} alt="" srcset="" className=' w-36 h-20' />
            </div>
            <div className="the-app-home w-64">
                <img src={require('../statics/home-app.png')} alt="" srcset=" " className=' absolute w-40 h-[21.2rem] ml-12 mt-4 rounded' />
                <img src={require('../statics/pngwing.com (1).png')} alt="" srcset="" className=' h-96' />
            </div>
        </div>
    )
}

export default GetApp