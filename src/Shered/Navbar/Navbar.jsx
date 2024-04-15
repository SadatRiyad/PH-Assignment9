import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { AuthContext } from "../../ContextApi/AuthProvider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);
    // logoutUser

    const handleLogout = () => {
        logoutUser();
    }

    const Links = <>
        <li><NavLink to="/" className="hover:text-red hover:bg-transparent transition-colors duration-75 mr-[2px]">Home</NavLink></li>
        <li><NavLink to="/about" className="hover:text-red hover:bg-transparent transition-colors duration-75 mr-[2px]">About</NavLink></li>
        <li><NavLink to="/contactUs" className="hover:text-red hover:bg-transparent transition-colors duration-75 mr-[2px]">Contact Us</NavLink></li>
        <li><NavLink to="/updateProfile" className="hover:text-red hover:bg-transparent transition-colors duration-75 mr-[2px]">Update Profile</NavLink></li>
    </>

    return (
        <div className="w-full mb-16">
            {/* <!-- navbar start --> */}
            <nav className="top-0 z-10 mx-auto w-full max-w-[1264px] fixed shadow-sm">
                <div className="justify-center items-center">
                    <div className="navbar p-0 py-1 bg-base-100">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden -ml-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <ul tabIndex="0"
                                    className="menu menu-sm dropdown-content mt-3 md:mt-0 z-[10000] p-0 md:p-0 shadow bg-base-100 rounded-box w-52 font-medium">
                                    {Links}
                                </ul>
                            </div>
                            <a className="-ml-4 md:ml-0 w-48" href="/"><img src={logo}></img></a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal md:mr-4 text-base font-medium">
                                {Links}
                            </ul>
                        </div>
                        <div className="navbar-end gap-1 md:gap-2">
                            {
                                user ?
                                    <div className="flex gap-1 items-center">
                                        <div className="dropdown dropdown-end dropdown-hover mt-1">
                                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                                <div className="w-11 rounded-full bg-blue p-1">
                                                    <img className="rounded-full" alt="user pic" src={user.photoURL ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                                </div>
                                            </div>
                                            <ul tabIndex={0} className="menu bg-blue text-white border-2 border-red menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box">
                                                <div className="text-sm flex items-center justify-center">
                                                    <li className="w-full px-2 py-2 text-sm text-center font-semibold bg-red rounded-t-lg">User Profile</li>

                                                </div>
                                                <li className="px-2 mt-4 text-lg">
                                                    {user.displayName ? user.displayName : "UserName"}
                                                </li>
                                                <li className="px-2 mb-2 mt-1 text-sm">
                                                    {user.email ? user.email : "UserEmail"}
                                                </li>
                                                <li className="px-2 mb-2 mt-1 text-sm">
                                                    <Link to="/updateProfile" className="font-medium mb-2 mt-4 bg-red hover:bg-white shadow-xl text-white border border-red focus:text-red hover:text-red hover:bg-transparent transition-colors duration-75">Update Profile</Link>
                                                    <Link to="/login" onClick={() => handleLogout()} className="font-medium hover:bg-white shadow-xl bg-red text-white border border-red focus:text-red hover:text-red hover:bg-transparent transition-colors duration-75">Logout</Link>
                                                </li>

                                            </ul>
                                        </div>
                                        <NavLink to="/login" onClick={() => handleLogout()} className="btn mr-4 bg-red hover:bg-transparent border-red text-white hover:text-red rounded hover:border-red  hover:-translate-y-0 transition-all duration-200">Logout</NavLink>
                                    </div>
                                    :
                                    <NavLink to="/login" className="btn mr-4 bg-red hover:bg-transparent border-red text-white hover:text-red rounded hover:border-red  hover:-translate-y-0 transition-all duration-200">Login</NavLink>
                            }
                        </div>
                    </div>
                </div>
            </nav>
            {/* <!-- navbar end --> */}
        </div>
    );
};

export default Navbar;