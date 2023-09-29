import { FaBars } from "react-icons/fa"
import { useGlobalContext } from "./Context"
import { useState, } from "react"
const Navbar = () => {
  const {openSidebar} = useGlobalContext()
    return (
    <nav>
        <div className="nav-center">
            <h3 className='logo'>strapi</h3>
            <button className="toggle-btn-2" onClick={openSidebar}>
                <FaBars/>
            </button>
            {/* Will be added later {NavLinks} */}   
        </div>
    </nav>
  )
}
export default Navbar