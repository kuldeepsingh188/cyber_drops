import React from 'react'
import logo from '../assests/img/png/cyber_logo.png'
const Lodaing = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("d-none");
    document.body.style.overflow = "unset";
  }, 3000);
  return (
    <>
      <div className='loder' id="none" >
        <span id="none" className='bg_black h-100 w-100 d-flex justify-content-center align-items-center '><img className='lr_br' src={logo} alt="" /></span>
      </div>
    </>
  )
}

export default Lodaing;