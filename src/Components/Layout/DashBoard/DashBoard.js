import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { SiKingstontechnology, SiGoogleclassroom } from 'react-icons/si';
import { AiFillHome } from 'react-icons/ai';





const DashBoard = () => {
    const isAdmin = true;
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay">

                    </label>
                    <ul className="menu p-4 w-max h-full bg-base-300 text-base-content">

                        {isAdmin ? <>
                            <li><Link to='/DashBoard/instructor'>Instructor</Link></li>
                            <li><Link to='/DashBoard/class'>Class</Link></li>
                            <li><Link to='/DashBoard/add'>1</Link></li>
                            <li><Link to='/DashBoard/add'>2</Link></li>
                            <li><Link to='/DashBoard/add'>3</Link></li>
                            <li><Link to='/DashBoard/users'>All Users</Link></li>
                        </> :
                            <>
                                <li><Link to='/'>home</Link></li>
                                <li><Link to='/'>home</Link></li>
                                <li><Link to='/'>home</Link></li>
                            </>}


                            
                        <div className="divider"></div>

                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/'>home</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;