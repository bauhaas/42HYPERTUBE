import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import BurgerButton from './BurgerButton';
import BurgerMenu from './BurgerMenu';
import DropdownMenu from './DropDownMenu';
import NavBarItem from './NavBarItem';
import SearchBar from './SearchBar';
import { Avatar } from './ui/Avatar';

function NavBar({ avatarUrl }) {
  const [isOpen, setIsOpen] = useState(false);
  const items = ['Profile', 'Settings', 'Log Out'];

  return (
    <nav className="bg-brand">
      <div className=" sm:px-6">
        <div className="mx-4 flex items-center justify-between">
          <Avatar
            imageAttribute={'h-8 w-8'}
            imagePath={'https://img.icons8.com/ios/50/null/h-key.png'}
          />
          <div className="flex h-16 items-center">
            <div className=" hidden md:block">
              <div className="right-0 ml-10 flex  items-center space-x-16">
                <SearchBar />
                <NavBarItem content="Movies" />
                <NavBarItem content="Movies" />
                <DropdownMenu
                  items={['Profile', 'Settings', 'Log Out']}
                  avatarUrl={avatarUrl}
                />
              </div>
            </div>
          </div>
          <div className=" flex md:hidden">
            <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
      <BurgerMenu isOpen={isOpen} />
    </nav>
  );
}

export default NavBar;
