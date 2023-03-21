import { Transition } from '@headlessui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import DropdownMenu from './DropDownMenu';
import NavBarItem from './NavBarItem';
import SvgNavBar from './SvgNavBar';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const items = ['Profile', 'Settings', 'Log Out'];

  return (
    <nav className="bg-brand">
      <div className="max-w-12xl mx-auto px-2 sm:px-6">
        <div className="mx-4 flex items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <img
              className="h-8 w-8 "
              src="https://img.icons8.com/ios/50/null/h-key.png"
              alt="Workflow"
            />
          </div>
          <div className="flex h-16 items-center ">
            <div className=" hidden md:block">
              <div className="right-0 ml-10 flex  items-center space-x-16">
                <div className="flex ">
                  <input
                    type="search"
                    className="focus:shadow-te-primary relative  m-0 block w-[1%] min-w-0 flex-auto rounded-l border border-solid bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300  ease-in-out focus:text-neutral-700 focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon1"
                  />
                  <button
                    className="text- hover:bg-primary-700 focus:bg-primary-700 active:bg-primary-800 relative z-[2] flex items-center rounded-r bg-brand-hover px-6 py-2.5 text-xs font-medium uppercase leading-tight shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                    type="button"
                    id="button-addon1"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <NavBarItem content="Movies" />
                <NavBarItem content="Movies" />
                <DropdownMenu items={items} />
                {/* <img className="h-8 w-8 rounded-full" src="https://avatars.githubusercontent.com/u/58028782?s=400&amp;u=ce6e6e4b12fc27edf478833298ec36f1ec1d3006&amp;v=4" alt="avatar" /> */}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="hover:text- inline-flex items-center justify-center rounded-md bg-brand p-2 hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only"></span>
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
            <div ref={ref} className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              <div className="flex">
                <input
                  type="search"
                  className="focus:shadow-te-primary relative  m-0 block w-[1%] min-w-0 flex-auto rounded-l border  border-solid bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300  ease-in-out focus:text-neutral-700 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon1"
                />
                <button
                  className="hover:bg-primary-700 focus:bg-primary-700 active:bg-primary-800 relative z-[2] flex items-center rounded-r bg-brand-hover px-8 py-2.5 text-xs  font-medium uppercase leading-tight shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <NavBarItem content="Movies" link="movie/1" />
              <NavBarItem content="Settings" link="settings" />
              <NavBarItem content="Profile" link="User/1" />
              <NavBarItem content="Logout" link="#" />
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Nav;
