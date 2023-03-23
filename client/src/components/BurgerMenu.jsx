import { Transition } from '@headlessui/react';

import NavBarItem from './NavBarItem';
import SearchBar from './SearchBar';

export default function BurgerMenu(props) {
  const isOpen = props.isOpen;

  return (
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
            <SearchBar key="searchBar" />
            <NavBarItem key="movies" content="Movies" link="movie/1" />
            <NavBarItem key="settings" content="Settings" link="settings" />
            <NavBarItem key="profile" content="Profile" link="User/1" />
            <NavBarItem key="logout" content="Logout" link="#" />
          </div>
        </div>
      )}
    </Transition>
  );
}
