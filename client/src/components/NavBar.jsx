import { useState } from 'react';

import NavbarItem from './NavBarItem';

export default function Navbar({ fixed }) {
  return (
    <>
      <nav className="relative mb-3 flex  flex-wrap justify-end bg-gray-500 px-2 py-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className=" relative flex justify-between lg:static lg:block lg:w-auto lg:justify-start">
            <a className="mr-4 inline-block whitespace-nowrap py-2 text-sm font-bold uppercase text-white">
              Hypertube
            </a>
          </div>

          <ul className="flex list-none flex-row justify-end lg:ml-auto lg:flex-row ">
            <NavbarItem content="friends" link="friends" />
            <NavbarItem content="movies" link="" />
            <NavbarItem content="user" link="" />
          </ul>
        </div>
      </nav>
    </>
  );
}
