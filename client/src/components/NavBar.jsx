import { Transition } from '@headlessui/react';
import React, { useRef, useState } from 'react';

import NavBarItem from './NavBarItem';
import SvgNavBar from './SvgNavBar';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null); // Create a ref object using useRef

  return (
    <nav className="fixed top-0 z-50 w-screen bg-gray-800">
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="m-2 flex-shrink-0">
            <img
              className="h-8 w-8 invert"
              src="https://img.icons8.com/ios/50/null/h-key.png"
              alt="Workflow"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline justify-end space-x-4">
              <NavBarItem content="Movies" />
              <NavBarItem content="Bisous" />
              <NavBarItem content="User" />
            </div>
          </div>
          <div className="m-2 mt-2 flex  justify-end md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="burger-menu inline-flex items-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <SvgNavBar
                  link="http://www.w3.org/2000/svg"
                  dimension="M4 6h16M4 12h16M4 18h16"
                />
              ) : (
                <SvgNavBar
                  link="http://www.w3.org/2000/svg"
                  dimension="M6 18L18 6M6 6l12 12"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div
              ref={(node) => (mobileMenuRef.current = node)}
              className="space-y-1 px-2 pt-2 pb-3 sm:px-3"
            >
              <NavBarItem content="Movies" />
              <NavBarItem content="Bisous" />
              <NavBarItem content="User" />
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default NavBar;
