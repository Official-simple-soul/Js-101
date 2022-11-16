import React from "react";
import google from '../assets/google.png'
import facebook from '../assets/facebook.jpeg'
import github from '../assets/github.png'

export default function Modal({showModal, setShowModal}) {
  const [user, setUser] = React.useState(true)
  const handleUser =()=>{
    setUser(!user)
  }

  let signin = <>
  <div
    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
  >
    <div className="relative w-auto my-6 mx-auto max-w-3xl text-white">
      <div className="border-0 rounded-lg text-center modalbg shadow-lg px-4 md:px-8 py-4 relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <div className="header text-2xl text-center mb-6 text-white">Sign In</div>
        <div className="body">
            <form action="">
                <label htmlFor="name">Username</label><br></br>
                <input type="text"
                className="border mt-2 mb-4 rounded px-2 w-64 md:w-80"/><br></br>
                <label htmlFor="password">Password</label><br></br>
                <input type="password"
                className="border mt-2 rounded px-2 w-64 md:w-80"/><br></br>
                <input type="submit"
                value='Sign in' 
                className="border px-3 mt-3 rounded"/>
            </form>
        </div>
        <div className="others">
            <p className="text-sm font-light my-3 underline">Login with</p>
            <div className="flex justify-center border border-white bg-white w-48 mx-auto rounded py-1 space-x-4 items-center">
                <img src={github} alt="" width='20px'/>
                <img src={google} alt="" width='20px'/>
                <img src={facebook} alt="" width='20px'/>
            </div>
        </div>
        <div className="footer">
            <p className="font-light text-sm mt-3">Dont have an account?<span className="ml-2 font-bold" onClick={handleUser}>{user?'Sign up':'Sign in'}</span></p>
        </div>
        <div className="flex items-center justify-center border-t border-solid border-slate-200 rounded-b">
          <button
            className="text-[red] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
</>
let signup = <>
<div
  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
>
  <div className="relative w-auto my-6 mx-auto max-w-3xl text-white">
    <div className="border-0 rounded-lg text-center modalbg shadow-lg px-4 md:px-8 py-4 relative flex flex-col w-full bg-white outline-none focus:outline-none">
      <div className="header text-2xl text-center mb-4">Sign Up</div>
      <div className="body">
          <form action="">
              <label htmlFor="name">Full Name</label><br></br>
              <input type="text"
              className="mt-1 mb-1 rounded px-2 w-64 md:w-80"/><br></br>
              <label htmlFor="email">Email</label><br></br>
              <input type="email"
              className="mt-1 mb-1 rounded px-2 w-64 md:w-80"/><br></br>
              <label htmlFor="name">Username</label><br></br>
              <input type="username"
              className="mt-1 mb-1 rounded px-2 w-64 md:w-80"/><br></br>
              <label htmlFor="password">Password</label><br></br>
              <input type="password"
              className="mt-1 mb-1 rounded px-2 w-64 md:w-80"/><br></br>
              <label htmlFor="password">Confirm Password</label><br></br>
              <input type="password"
              className="mt-1 rounded px-2 w-64 md:w-80"/><br></br>
              <input type="submit"
              value='Sign up' 
              className="px-3 mt-3 rounded"/>
          </form>
      </div>
      <div className="others">
          <p className="text-sm font-light my-3 underline">Sign up with</p>
          <div className="flex justify-center bg-white w-48 mx-auto rounded py-1 space-x-4 items-center">
              <img src={github} alt="" width='20px'/>
              <img src={google} alt="" width='20px'/>
              <img src={facebook} alt="" width='20px'/>
          </div>
      </div>
      <div className="footer">
          <p className="font-light text-sm mt-3">Already have an account?<span className="ml-2 font-bold" onClick={handleUser}>{user?'Sign up':'Sign in'}</span></p>
      </div>
      <div className="flex items-center justify-center border-t border-solid border-slate-200 rounded-b">
        <button
          className="text-[red] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  </div>
</div>
<div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
</>
  return (
    <>
      {showModal ?user?(
        signin
      ):(signup):null}
    </>
  );
}