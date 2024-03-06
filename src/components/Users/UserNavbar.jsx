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
                
                <div className={`w-24 bg-red-500 transform transition-transform duration-1000 ${isOpen ? '' : '-translate-x-full'} md:block md:w-56`}>
                    <div className="p-2">
                        <h1 className=" font-extrabold text-neutral-950 shadow-lg shadow-neutral-950 lg:text-base sm:text-sm">BESTWAY COLLEGE</h1>
                    </div>
                  
                    <nav className="mt-16">
                        <ul className="text-white shadow-lg ">
                            <li className="lg:py-2 px-4 mt-32">
                                <a href="#" className="font-semibold text-neutral-950 shadow-lg shadow-neutral-950 bg-red-500 lg:text-base sm:text-sm">DASH</a>
                            </li>
                            <li className="py-2 px-4 mt-12">
                                <a href="#" className="font-semibold text-neutral-950 shadow-lg shadow-neutral-950 bg-red-500 lg:text-base sm:text-sm">ADMISS</a>
                            </li>
                            <li className="py-2 px-4 mt-12">
                                <a href="#" className="font-semibold text-neutral-950 shadow-lg shadow-neutral-950 bg-red-500 lg:text-base sm:text-sm">STATUS</a>
                            </li>
                            <li className="py-2 px-4 mt-12">
                                <a href="#" className="font-semibold text-neutral-950 shadow-lg shadow-neutral-950 bg-red-500 lg:text-base sm:text-sm">PROFILE</a>
                            </li>
                            <li className="py-2 px-4 mt-12">
                                <a href="#" className="font-semibold text-neutral-950 shadow-lg shadow-neutral-950 bg-red-500 lg:text-base sm:text-sm">CONTACT</a>
                            </li>
                            <li className="py-2 px-4 mt-12">
                                <a href="#" className="font-semibold text-neutral-950 shadow-lg shadow-neutral-950 bg-red-500 lg:text-base sm:text-sm">LOGOUT</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={`flex-1 ${isOpen ? 'ml-16' : ''}`}>
                    <div className="flex justify-end p-4 md: ">
                        <button onClick={toggleSidebar} className="text-neutral-950 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="">
                        <h1 className="text-lg font-semibold text-neutral-950">Main Content</h1>
                        <p className='text-neutral-950'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut tortor urna. Vivamus interdum ipsum eu metus ullamcorper, vel lacinia mi volutpat.</p>
                    </div>
                </div>
            </div>

        </main>
        </>
    );
};

export default UserNavbar;
