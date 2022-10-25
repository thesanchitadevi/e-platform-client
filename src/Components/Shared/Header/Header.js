import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Toggle from '../Toggle/Toggle';

const Header = () => {
    const [navbar, setNavbar] = useState(false);

    const { user, providerSignOut } = useContext(AuthContext);
    console.log(user);

    const handleSignOut = () => {
        providerSignOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <nav className="w-full bg-slate-200 shadow-lg">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-2 md:py-5 md:block">
                        <Link className='flex' to='/'>                       
                            <img className='h-9'
                                src="https://img.icons8.com/external-others-inmotus-design/67/000000/external-E-alphabet-others-inmotus-design-13.png" alt="..."/>
                            <h2 className="text-3xl font-bold text-slate-800">
                                -Platform
                            </h2>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0  text-gray-300 ">
                            <Toggle></Toggle>
                            <li className=" text-slate-900 hover:text-slate-700">
                                <Link to='/'>Home</Link>
                            </li>
                            <li className=" text-slate-900 hover:text-slate-700">
                                <Link to='/courses/:id'>Courses</Link>
                            </li>
                            <li className=" text-slate-900 hover:text-slate-700">
                                <Link to='/faq'>Faq</Link>
                            </li>
                            <li className=" text-slate-900 hover:text-slate-700">
                                <Link to='/blog'>Blog</Link>
                            </li>
                            <div className="flex space-x-2">

                                <li>
                                    {
                                        user?.uid ?
                                            <div className='flex space-x-2'>
                                                <button className= "text-slate-900 hover:text-slate-700" onClick={handleSignOut}>Sign Out</button>
                                                <Link className='font-semibold px-2 text-slate-900'>{user?.displayName}</Link>

                                            </div>
                                            :
                                            <div className='flex'>
                                                <li className=" text-slate-900 hover:text-slate-700 pr-5">
                                                    <Link to='/login'>Log in</Link>
                                                </li>
                                                <li className=" text-slate-900 hover:text-slate-700">
                                                    <Link to='/register'>Register</Link>
                                                </li>
                                            </div>
                                    }
                                </li>
                                <li >
                                    <div>
                                        {
                                            user?.photoURL ?
                                                <img alt="" src={user?.photoURL} className="w-6 h-6 rounded-full" />
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  text-slate-900">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                </svg>

                                        }
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;