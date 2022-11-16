import React, { useState, useEffect} from 'react';
import FirstImage from '../assets/MainImage.jpg'
import SecondImage from '../assets/SecondImage.jpg'
import ThirdImage from '../assets/ThirdImage.jpg'

const Carousel = () => {
    const [active, setActive] = useState(2);
    const next =()=> {
        data===1?setActive(1)
        :active<data.length?setActive(active+1)
        :setActive(1)
    }
    const prev =()=> {
        data===1?setActive(1)
        :active>1?setActive(active-1)
        :setActive(data.length)
    }
    useEffect(()=>{
        setTimeout(()=>{
            active<data.length?setActive(active+1):setActive(1)
        }, 5000)
    })

    const data = [
        {
            img: FirstImage,
            id: 1,
            title: 'one'
        },
        {
            img: SecondImage,
            id: 2,
            title: 'two'
        },
        {
            img: ThirdImage,
            id: 3,
            title: 'three'
        },
    ]


  return (
    <div className='grid grid-cols-1 md:grid-cols-5 mx-auto text-col-3 bg-black relative'>
        <div className="previous absolute left-0 bottom-48 md:bottom-60 opacity-80 z-20" onClick={prev}>
            <i className="fa-solid fa-angle-left text-white  px-1 bg-col-1 text-4xl md:bg-col-3 md:text-6xl"></i>
        </div>
        {
            data && data.map(item=>{
                const {id, title, img} = item
                return (
                    <div key={id} className={`${active===id?'col-span-3 w-full justify-self-center scale-100 z-10':'hidden opacity-20 md:block'}`}>
                        <div className="content relative">
                            <img src={img} alt="" className='h-96 object-cover md:h-100 w-full' loading='lazy'/>
                        </div>
                    </div>
                )
            })
        }
        <div className="next absolute right-0 bottom-48 md:bottom-60 opacity-80 z-20" onClick={next}>
            <i className="fa-solid fa-angle-right text-white px-1 bg-col-1 text-4xl md:bg-col-3 md:text-6xl"></i>
        </div>
    </div>
  )
}

export default Carousel