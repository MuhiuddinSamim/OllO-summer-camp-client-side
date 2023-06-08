import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { SiKingstontechnology, SiGoogleclassroom } from 'react-icons/si';
import { AiFillHome } from 'react-icons/ai';
import UseAdmin from '../../Hooks/UseAdmin';
import UseInstructor from '../../Hooks/UseInstructor';





const DashBoard = () => {
    // samimhossain@gmail.comA
    // const isAdmin = true;
    const [isAdmin] = UseAdmin();
    // console.log(isAdmin)

    // const isInstructor = true;
    // instructor@gmail.comA
    const [isInstructor] = UseInstructor();
    // console.log(isInstructor)
    // 
    // student@gmail.comA

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-max h-full bg-base-300 text-base-content">
                        <div>
                            {isAdmin ? (
                                <div>
                                    <ul>
                                        <li><Link to='/DashBoard/instructor'>Admin</Link></li>
                                        <li><Link to='/DashBoard/class'>Class</Link></li>
                                        <li><Link to='/DashBoard/add'>1</Link></li>
                                        <li><Link to='/DashBoard/add'>2</Link></li>
                                        <li><Link to='/DashBoard/add'>3</Link></li>
                                        <li><Link to='/DashBoard/users'>All Users</Link></li>
                                    </ul>
                                    <div className="divider"></div>
                                </div>
                            ) : null}

                            {isInstructor ? (
                                <div>
                                    <ul>
                                        <li><Link to="/DashBoard/instructor">Instructor 1</Link></li>
                                        <li><Link to="/DashBoard/class">Class</Link></li>
                                    </ul>
                                    <div className="divider"></div>
                                </div>
                            ) : null}



                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">My Classes</Link></li>
                            </ul>

                        </div>



                    </ul>
                </div>
            </div>
        </div>
    );
};


export default DashBoard;