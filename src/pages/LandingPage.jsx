import React from 'react'
import LandingHeader from '../components/landing-page/header/Header'
import { testProduct } from '../lib/test-product'

const LandingPage = () => {

    const product = testProduct;

    return (
        <div className="flex flex-col px-4 lg:px-32 xl:px-48 py-16 w-full min-h-screen bg-background">

            <LandingHeader product={product} />

        </div>
    )
}

export default LandingPage