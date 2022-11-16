import React from 'react'
import class1 from '../assets/class-1.jpg'
import class2 from '../assets/class-2.jpg'

const SecondSection = () => {
  return (
    <>
        <div className='py-14 container mx-auto'>
            <h1 className='text-4xl underline text-center md:text-left'>OUR CLASSES</h1>
        </div>
        <div className="class-images py-4 space-y-4 grid justify-items-stretch md:w-full lg:w-100 md:px-8">
            <div className="image md:flex items-center md:justify-start mx-auto md:mx-0 text-center">
                <img src={class1} alt="" width='300px' height='300px' className='rounded-full md:mr-8'/>
                <h1 className='text-3xl'>Javascript</h1>
            </div>
            <div className="image md:justify-self-end md:flex items-center justify-between mx-auto md:mx-0 text-center">
                <h1 className='text-3xl hidden md:block'>Python</h1>
                <img src={class2} alt="" width='300px' height='300px' className='rounded-full md:ml-8'/>
                <h1 className='text-3xl md:hidden'>Python</h1>
            </div>
            <div className="image  md:flex items-center justify-start mx-auto md:mx-0 text-center">
                <img src={class1} alt="" width='300px' height='300px' className='rounded-full md:mr-8'/>
                <h1 className='text-3xl'>Data Science</h1>
            </div>
            
        </div>
    </>
    
  )
}

export default SecondSection