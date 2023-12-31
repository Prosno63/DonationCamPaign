import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {


    const links = <>
        <li><NavLink to='/' >Home</NavLink></li>
        <li><NavLink to='/donation' >Donation</NavLink></li>
        <li><NavLink to='/stastistics' >Statistics</NavLink></li>





    </>

    return (
        <div className="navbar flex justify-around pl-3 pr-3 ">
            <div className="navbar-start items-center">


                <img src="https://i.ibb.co/FqjGkrs/Logo.png" alt="" />

                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">
                        {links}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex md:flex">
                <ul className="menu menu-horizontal px-4">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Header;