import React from 'react'
import SponsorsPartners from './SponsorsPartners'

const FirstSection = () => {
  return (
    <>
        <div className='container mx-auto py-12 px-2 md:px-0'>
            <div  className='space-y-8 mb-14'>
                <h1 className='text-2xl md:text-4xl'>Learn to code - for free</h1>
                <h1 className='text-2xl md:text-4xl'>Overcome your javascript fear</h1>
                <h1 className='text-2xl md:text-4xl'>Build Projects and become a Senior Javascript Developer</h1>
            </div>
            <div className="flex justify-center">
                <button className='px-12 py-4 rounded-md bg-col-3 text-white text-2xl md:text-4xl'>Get Started (for free)</button>
            </div>
        </div>
        <SponsorsPartners />
    </>
  )
}

export default FirstSection