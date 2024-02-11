// import { useState } from "react";
import { MdFavorite } from "react-icons/md"
import { Cart } from "../"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="navbar bg-primary text-base-100">
      <div className="navbar-start">
        <Link to='/' className="btn btn-ghost text-xl">Ecom</Link>
      </div>
      <div className="navbar-end flex justify-end items-center space-x-4">
        <div className="group inline-block relative z-10">
          <a href="#cat" className="font-semibold py-2 px-4 rounded inline-flex items-center text-black btn btn-sm">
            <span>Categories</span>
          </a>
          <ul className="absolute hidden text-primary pt-1 group-hover:block right-2">
            <li className="py-1 px-4 bg-white hover:bg-gray-200 "><Link to='/products/1'>Spiritual</Link></li>
            <li className="py-1 px-4 bg-white hover:bg-gray-200 "><Link to='/products/2'>Classical</Link></li>
            <li className="py-1 px-4 bg-white hover:bg-gray-200 "><Link to='/products/3'>Horror</Link></li>
            <li className="py-1 px-4 bg-white hover:bg-gray-200 "><Link to='/products/4'>Thriller</Link></li>
            <li className="py-1 px-4 bg-white hover:bg-gray-200 "><Link to='/products/5'>Non-Fiction</Link></li>
            <li className="py-1 px-4 bg-white hover:bg-gray-200 "><Link to='/products/6'>Others</Link></li>
          </ul>
        </div>
        <a className="btn btn-sm">Login</a>
        <Cart />
        <li className="hover:text-gray-800 mx-2"><a href="#"><MdFavorite /></a></li>
      </div>
    </div>
  )
}

export default Navbar