import { Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

import { Avatar } from './ui/Avatar';

const DropdownMenu = ({ items, avatarUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="">
      <button
        onClick={toggleMenu}
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white focus:outline-none"
      >
        <Avatar
          rounded
          size="sm"
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="profile pic"
        />
      </button>
      <Transition show={isOpen} as={Fragment}>
        <Transition.Child
          enter="transition-opacity ease-in-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-in-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute right-0 top-16 z-50 rounded-b-3xl bg-brand shadow-lg">
            <ul className="">
              {items.slice(0).map((item, index) => (
                <li
                  key={item}
                  className="flex transition-all delay-100 duration-300 ease-in-out hover:bg-gray-100"
                >
                  <a
                    href="#"
                    className="mt-4 mr-10 h-12 w-48 text-end text-lg text-gray-800"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Transition.Child>
      </Transition>
    </div>
  );
};

export default DropdownMenu;
