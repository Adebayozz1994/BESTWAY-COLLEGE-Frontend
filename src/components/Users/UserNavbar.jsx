import React, { useState } from 'react';

const UserNavbar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <main className='bg-yellow-500'>
            <div className="flex h-screen ">
                
                <div className={`w-24 bg-red-700 transform transition-transform duration-300 ${isOpen ? '' : '-translate-x-full'} md:block md:w-52`}>
                    <div className="p-2">
                        <h1 className=" text-lg font-semibold text-cyan-600 shadow-md">BESTWAY COLLEGE</h1>
                    </div>
                  
                    <nav className="mt-16">
                        <ul className="text-white shadow-md shadow-slate-700 my-20">
                            <li className="py-2 px-4 mt-10">
                                <a href="#" className="text-cyan-600 shadow-md bg-red-700">DASH</a>
                            </li>
                            <li className="py-2 px-4 mt-3">
                                <a href="#" className="text-cyan-600 shadow-md bg-red-700">ADMISS</a>
                            </li>
                            <li className="py-2 px-4 mt-3">
                                <a href="#" className="text-cyan-600 shadow-md bg-red-700">STATUS</a>
                            </li>
                            <li className="py-2 px-4 mt-3">
                                <a href="#" className="text-cyan-600 shadow-md bg-red-700">PROFILE</a>
                            </li>
                            <li className="py-2 px-4 mt-3">
                                <a href="#" className="text-cyan-600 shadow-md bg-red-700">CONTACT</a>
                            </li>
                            <li className="py-2 px-4 mt-3">
                                <a href="#" className="text-cyan-600 shadow-md bg-red-700">LOGOUT</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* Main Content */}
                <div className={`flex-1 ${isOpen ? 'ml-4' : ''}`}>
                    {/* Toggle Button (visible on small screens) */}
                    <div className="flex justify-end p-4 md:hidden ">
                        <button onClick={toggleSidebar} className="text-red-600 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                    {/* Page Content */}
                    <div className="p-0">
                        <h1 className="text-lg font-semibold text-cyan-600">Main Content</h1>
                        <p className='text-cyan-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut tortor urna. Vivamus interdum ipsum eu metus ullamcorper, vel lacinia mi volutpat.</p>
                    </div>
                </div>
            </div>

        </main>
        </>
    );
};

export default UserNavbar;
