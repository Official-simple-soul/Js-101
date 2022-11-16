import React from 'react'

const UserAccount = () => {
  return (
    <div className='px-4 py-2 rounded-lg bg-col-3 hidden md:block'>
        <button className='shadow-lg px-3 py-1'><i class="fa-solid fa-lock mr-2"></i>Sign In</button>
        <button className='shadow-lg px-3 py-1 ml-3'>Create Account</button>
    </div>
  )
}

export default UserAccount