import { useState } from 'react';

const DropdownMenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white focus:outline-none"
      >
        <img
          className="h-full w-full rounded-full "
          src="https://avatars.githubusercontent.com/u/58028782?s=400&amp;u=ce6e6e4b12fc27edf478833298ec36f1ec1d3006&amp;v=4"
          alt="profile pic"
        />
      </button>
      {isOpen && (
        <div className="absolute right-0  z-50 bg-brand shadow-lg">
          <ul className="py-2.5">
            {items.map((item) => (
              <li key={item} className="right-0">
                <a
                  href="#"
                  className="block px-12 py-4 text-gray-800 hover:bg-gray-100"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
