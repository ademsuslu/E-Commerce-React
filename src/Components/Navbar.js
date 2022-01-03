import React from 'react'
import SelectList from './SelectList'

const Navbar = () => {
    return (
        <div >
            <ul className="navbar">
                <li className="nav"><a href="#">Home</a></li>
                <li className="nav"><a href="#">Typografy</a></li>
                <li className="nav"><a href="#">Contact</a></li>
                <li className="nav"><a href="#">My Account</a></li>
            </ul>
            <div className="deneme">
                <h1 className="baslık">SÜSLÜ</h1>
            </div>
            <SelectList />
        </div>
    )
}

export default Navbar
