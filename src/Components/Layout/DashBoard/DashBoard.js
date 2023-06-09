import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import UseAdmin from '../../Hooks/UseAdmin';
import UseInstructor from '../../Hooks/UseInstructor';
import useClassCart from '../../Hooks/UseClassCart';






const DashBoard = () => {
    // samimhossain@gmail.comA
    // const isAdmin = false;
    const [isAdmin] = UseAdmin();
  

    // const isInstructor = true;
    // instructor@gmail.comA
    const [isInstructor] = UseInstructor();
    

    // const isStudent = true;
    // student@gmail.comA

    const [student] = useClassCart();
    console.log(student)
   


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
                                        <h1 className='font-extrabold text-center text-3xl'>Admin</h1>

                                        <li><Link to='/DashBoard'>Admin Home</Link></li>
                                        <li><Link to="/DashBoard/instructorAdmin">Instructor Home</Link></li>
                                        <li><Link to='/DashBoard/class'>Class</Link></li>
                                        <li><Link to='/DashBoard/add'>Total Student</Link></li>
                                        <li><Link to='/DashBoard/add'>2</Link></li>
                                        <li><Link to='/DashBoard/add'>Payment</Link></li>
                                        <li><Link to='/DashBoard/users'>All Users</Link></li>
                                        <li><Link to="/">Website Home</Link></li>
                                    </ul>
                                    <div className="divider"></div>
                                </div>
                            ) : isInstructor ? (
                                <div>
                                    <ul>
                                        <h1 className='font-extrabold text-center text-3xl'>Instructor</h1>

                                        <li><Link to="/DashBoard/class">Instructor Home</Link></li>
                                        <li><Link to="/DashBoard/class">Instructor Class</Link></li>
                                        <li><Link to='/DashBoard/add'>Total Student</Link></li>
                                        <li><Link to="/">Website Home</Link></li>
                                    </ul>
                                    <div className="divider"></div>
                                </div>
                            ) : <>
                                <h1 className='font-extrabold text-center text-3xl'>Student</h1>
                                <li>
                                    <Link to="/DashBoard/courseCart">
                                        <button className="btn">
                                            <AiOutlineShoppingCart />
                                            <div className="badge badge-secondary">
                                                + {student?.length || 0}
                                            </div>
                                        </button>
                                    </Link>
                                </li>
                                <li><Link to="/DashBoard/class">My Class</Link></li>
                                <li><Link to='/DashBoard/add'>Payment History</Link></li>
                                <li><Link to="/">Website Home</Link></li>
                                <div className="divider"></div>
                            </>
                            }
                        </div>

                    </ul>
                </div>
            </div >
        </div >
    );
};


export default DashBoard;