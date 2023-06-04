import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {

    const WebsiteName = <>
        <Link to='/'>common</Link>

    </>


    const Navber_Menu = <>
        <li><Link to='/'>Home</Link></li>
        <li tabIndex={0}>
            <details>
                <summary>Parent</summary>
                <ul className="p-2">
                    <li><Link>Submenu 1</Link></li>
                    <li><Link>Submenu 2</Link></li>
                </ul>
            </details>
        </li>

        <li><Link to='/'>item</Link></li>
        <li><Link to='/'>item</Link></li>
        <li><Link to='/'>item</Link></li>
        <li><Link to='/'>item</Link></li>

    </>

    const Navber_Profile_image = <>
        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='' />
    </>

    const Navber_Profile_menu = <>
        <li><Link>joan@gmail.com </Link></li>
        <li className='mt-1'>User name</li>
        <li><Link to='/'>Logout</Link></li>

    </>





    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {Navber_Menu}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">{WebsiteName}</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Navber_Menu}
                    </ul>
                </div>

                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {Navber_Profile_image}
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3  shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-fit">
                            {Navber_Profile_menu}
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default NavigationBar;