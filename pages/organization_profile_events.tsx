import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import HamburgerMenu from '../components/hamburger_menu';
import OrganizationProfileMenu from './organization_profile_menu';
import '../app/globals.css';

const OrganizationProfileEvents: React.FC = () => {
  const router = useRouter();
  const { orgName } = router.query;
  return (
    <>
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 999, height: '70px', backgroundColor: 'white' }} className="shadow-md">
        <div style={{ float: 'right', marginRight: '30px', marginTop: '25px' }}>
          <HamburgerMenu />
        </div>
      </div>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-start">

      <div style={{ paddingTop: '100px', paddingBottom: '40px' }}>
          <h1 className="text-5xl md:text-7xl sm:text-7xl font-bold" style={{ color: 'rgb(19, 41, 75)' }}>{orgName}</h1>
        </div>

        < OrganizationProfileMenu />

        <div className="flex flex-wrap w-full justify-around" style={{ alignItems: 'center', width: '80vw', paddingTop: '5vh' }}>

        {/* Placeholder for the events section */}
        <div className="w-full p-4">
            <div style={{ backgroundColor: 'white' }} className="p-4 rounded-md shadow-md">
              <h2 style={{ color: 'rgb(19, 41, 75)' }} className="text-1xl md:text-2xl sm:text-2xl font-semibold mb-2">EVENT 2</h2>
              <p className="text-1xl md:text-1xl sm:text-1xl" style={{ color: 'rgb(19, 41, 75)', overflowWrap: 'break-word' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
          </div>
          <div className="w-full p-4">
            <div style={{ backgroundColor: 'white' }} className="p-4 rounded-md shadow-md">
              <h2 style={{ color: 'rgb(19, 41, 75)' }} className="text-1xl md:text-2xl sm:text-2xl font-semibold mb-2">EVENT 1</h2>
              <p className="text-1xl md:text-1xl sm:text-1xl" style={{ color: 'rgb(19, 41, 75)', overflowWrap: 'break-word' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
          </div>
        </div>
    </div>
    </>
  );
};

export default OrganizationProfileEvents;