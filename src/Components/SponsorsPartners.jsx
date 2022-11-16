import React from 'react';
import google from '../assets/google.png';
import microsoft from '../assets/microsoft.png';
import kodehauz from '../assets/kodehauz.png';
import dsc from '../assets/dsc.webp';
import akwaibom from '../assets/akwaibom.jpeg';
import facebook from '../assets/facebook.jpeg';
import github from '../assets/github.png';


const SponsorsPartners = () => {
  return (
    <div className='grid grid-cols-2 px-8 md:flex justify-between items center flex-wrap py-10'>
        <img src={google} alt="" width='80px' className='justify-self-center'/>
        <img src={microsoft} alt="" width='80px'className='justify-self-center'/>
        <img src={kodehauz} alt="" width='80px'className='justify-self-center'/>
        <img src={dsc} alt="" width='80px'className='justify-self-center'/>
        <img src={github} alt="" width='80px' className='justify-self-center'/>
        <img src={facebook} alt="" width='80px' className='justify-self-center'/>
    </div>
  )
}

export default SponsorsPartners