import React, { useState } from 'react';
import Link from 'next/link';
import '../app/globals.css';
import Image from 'next/image';
import logo from '../components/logo.jpg';

const RSOLogin: React.FC = () => {

    {/* Create user account and login buttons need to be implemented */}
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-start" style={{ paddingTop: '20vh'}}>
        <Image src={logo} alt="Logo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  width: '100px', height: '100px' }} />
        <div style={{ paddingTop: '3vh', paddingBottom: ' 5vh' }}>
            <h1 className="text-5xl md:text-7xl sm:text-7xl font-bold" style={{ color: 'rgb(19, 41, 75)' }}>RSO Login</h1>
        </div>
        <div className="flex mt-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <input
                type="username"
                className="p-2 rounded-l border-2 border-white-300 text-1xl md:text-2xl sm:text-2xl h-auto md:h-12 lg:h-12 xl:h-12"
                style={{ width: '40vw', color: 'rgb(19, 41, 75)' }}
                placeholder="Username..."
            />
        </div>
        <div className="flex mt-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <input
                type="password"
                className="p-2 rounded-l border-2 border-white-300 text-1xl md:text-2xl sm:text-2xl h-auto md:h-12 lg:h-12 xl:h-12"
                style={{ width: '40vw', color: 'rgb(19, 41, 75)' }}
                placeholder="Password..."
            />
        </div>
        <div className="flex mt-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <button
                type="submit"
                className="rounded-l border-2 border-white-300 text-1xl md:text-2xl sm:text-2xl h-auto md:h-12 lg:h-12 xl:h-12"
                style={{ backgroundColor: 'rgb(19, 41, 75)', width: '40vw' }}
            >
                Login
            </button>
        </div>
        <div className="flex mt-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <p
                className="text-1xl md:text-2xl sm:text-2xl h-auto md:h-12 lg:h-12 xl:h-12"
                style={{ color: 'rgb(19, 41, 75)', width: '40vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}

            >
                or
            </p>
        </div>


        <div className="flex mt-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <button
                type="submit"
                className="rounded-l border-2 border-white-300 text-1xl md:text-2xl sm:text-2xl h-auto md:h-12 lg:h-12 xl:h-12"
                style={{ backgroundColor: 'white', color: 'rgb(19, 41, 75)', width: '40vw' }}
            >
                Create RSO account
            </button>
        </div>
        <div className="flex mt-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Link href="/user_login">
        <button
            type="button"
            className="rounded-l border-2 border-white-300 text-1xl md:text-2xl sm:text-2xl h-auto md:h-12 lg:h-12 xl:h-12"
            style={{ backgroundColor: 'white', color: 'rgb(19, 41, 75)', width: '40vw' }}
        >
            Switch to user login
        </button>
    </Link>
</div>

</div>


  );
};

export default RSOLogin;
