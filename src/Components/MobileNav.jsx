import React from 'react'
import UserAccount from './UserAccount';
import Modal from './Modal';

const MobileNav = ({showNav}) => {
  const [showModal, setShowModal] = React.useState(false);

  
  return (
    <nav className='relative text-white font-bold z-50'>
        <ul className={`md:hidden transition-all ease-in-out duration-500 bg-col-1 text-center absolute space-y-10 overflow-hidden w-full ${showNav?'h-80 py-12 z-50 border-t-4 border-white':'h-0'}`}>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CLASSESS</li>
            <li><div className='px-4 py-2 rounded-lg bg-col-3 w-80 mx-auto md:hidden block'>
                <button className='shadow-lg px-3 py-1' onClick={()=>setShowModal(true)}><i class="fa-solid fa-lock mr-2"></i>Sign In</button>
                <button className='shadow-lg px-3 py-1 ml-3'>Create Account</button>
            </div></li>
        </ul>
        <Modal 
        showModal={showModal}
        setShowModal={setShowModal}/>
    </nav>
  )
}

export default MobileNav