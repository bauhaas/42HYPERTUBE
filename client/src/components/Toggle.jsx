import { BsCheck as CheckIcon, BsX as CloseIcon } from 'react-icons/bs';

import { useToggle } from '../hooks/useToggle';

export const Toggle = ({ checked }) => {
  const [isChecked, setIsChecked] = useToggle(checked);

  return (
    <label className="relative inline-block h-6 w-12 cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={setIsChecked}
      />
      <div
        className={`flex h-6 w-12 items-center rounded-full ${
          isChecked ? 'bg-green-500' : 'bg-gray-400'
        } transition-transform duration-300 ease-in-out`}
      >
        <div
          className={`flex h-6 w-6 transform place-items-center rounded-full bg-white  transition-transform duration-300 ease-in-out ${
            isChecked ? 'translate-x-full' : ''
          }`}
        >
          {isChecked ? (
            <CheckIcon className={`h-8 w-8 text-green-500`} />
          ) : (
            <CloseIcon className={`h-6 w-6 text-gray-400`} />
          )}
        </div>
      </div>
    </label>
  );
};
