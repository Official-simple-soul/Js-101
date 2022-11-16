import React, { useState, useEffect, useRef} from 'react';
import Nav from './Nav';
import UserAccount from './UserAccount';
import MobileNav from './MobileNav';

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    
    const menuRef = useRef();

    useEffect(()=> {
        let handler = (event) => {
            if(!menuRef.current.contains(event.target)){
                setShowNav(false)
            }
        }
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

  return (
    <header className='border-b-4 border-white'>
        <div className="mx-auto bg-col-1 text-white py-2 px-2 flex justify-between items-center">
            <div className="header-logo">
                <h1 className='text-2xl font-bold'><i className="fa-solid fa-eye mr-2"></i>Js-101</h1>
            </div>
            <Nav />
            <UserAccount />
            <i className={`fa-solid fa-bars text-2xl md:hidden ${showNav?'fa-xmark':'fa-bars'}`} onClick={()=>setShowNav(!showNav)} ref={menuRef}></i>
        </div>
        <MobileNav showNav={showNav}/>
    </header>
  )
}

export default Header