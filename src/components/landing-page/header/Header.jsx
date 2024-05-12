import React from 'react'
import MasaImage from '../../../assets/masa-oakwood.png'

const LandingHeader = ({ product }) => {

    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row gap-16">
                <div className="flex flex-col gap-4 w-full justify-center">
                    <span className='text-header text-6xl font-bold'>{product.name}</span>
                    <span className='text-paragraph'>{product.description}</span>

                    <button className='self-center w-full lg:w-fit lg:self-start px-8 py-4 bg-black text-white text-lg my-8 rounded-md hover:bg-gray-800'>Solicita Oferta</button>
                </div>

                <div className="flex w-full justify-center">
                    <img src={MasaImage} height={600} width={600} />
                </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-8 mt-8 justify-center items-center">
                <img src={MasaImage} width={200} className='hover:border-2 hover:cursor-pointer border-black' />
                <img src={MasaImage} width={200} className='hover:border-2 hover:cursor-pointer border-black' />
                <img src={MasaImage} width={200} className='hover:border-2 hover:cursor-pointer border-black' />
            </div>
        </>
    )
}

export default LandingHeader