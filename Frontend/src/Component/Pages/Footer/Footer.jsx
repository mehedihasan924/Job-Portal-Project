import React from 'react'

const Footer = () => {
  return (
    <footer className="footer p-10 mt-5 text-white lg:px-[100px] bg-primary text-base-content">
    <nav className='text-white'>
      <header className="footer-title">Services</header> 
      <a className="link link-hover">Branding</a>
      <a className="link link-hover">Design</a>
      <a className="link link-hover">Marketing</a>
      <a className="link link-hover">Advertisement</a>
    </nav> 
    <nav className='text-white'>
      <header className="footer-title">Company</header> 
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav> 
    <nav className='text-white'>
      <header className="footer-title text-white">Legal</header> 
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav> 
    <form>
      <header className="footer-title text-white">Newsletter</header> 
      <fieldset className="form-control w-80">
        <label className="label">
          <span className="label-text text-white">Enter your email address</span>
        </label> 
        <div className="join">
          <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
          <button className="btn btn-secondary join-item text-white">Subscribe</button>
        </div>
      </fieldset>
    </form>
  </footer>
  )
}

export default Footer