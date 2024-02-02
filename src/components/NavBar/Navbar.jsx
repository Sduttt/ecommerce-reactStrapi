import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { MdFavorite } from "react-icons/md"
import { Cart } from "../"
const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);


  return (
    <div className="navbar bg-primary text-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="text-gray-700 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          <li><a>Item 1</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="list-none flex mx-4 text-xl">
          <li className="hover:text-gray-800 mx-2 flex cursor-pointer" onClick={() => setCartOpen(!cartOpen)}>
            {/* <a href="#" className="flex"> */}
              <FaCartPlus />
              <div className="rounded-full w-4 h-4 flex justify-center items-center text-sm relative bottom-1 right-1 font-semibold text-white bg-error p-1">7</div>
            {/* </a> */}
            {cartOpen ? <Cart /> : ""}
          </li>
          <li className="hover:text-gray-800 mx-2"><a href="#"><MdFavorite /></a></li>
        </ul>
        <a className="btn btn-sm">Login</a>
      </div>
    </div>
  )
}

export default Navbar