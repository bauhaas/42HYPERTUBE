import React from 'react';

import SvgNavBar from './SvgNavBar';

function BurgerButton({ isOpen, setIsOpen }) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      type="button"
      className="hover:text- bg-brand hover:bg-brand-hover inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
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
  );
}

export default BurgerButton;
