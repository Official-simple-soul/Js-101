import React from 'react';
import Modal from './Modal';

const UserAccount = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
        <div className='px-4 py-2 rounded-lg bg-col-3 hidden md:block'>
          <button className='shadow-lg px-3 py-1' onClick={()=>setShowModal(true)}><i class="fa-solid fa-lock mr-2"></i>Sign In</button>
          <button className='shadow-lg px-3 py-1 ml-3'>Create Account</button>
        </div>
        <Modal 
        showModal={showModal}
        setShowModal={setShowModal}/>
    </>
  )
}

export default UserAccount