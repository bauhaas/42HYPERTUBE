import { useToggle } from '../hooks/useToggle';

export const Toggle = () => {
  const [isChecked, setIsChecked] = useToggle();

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
          isChecked ? 'bg-green-400' : 'bg-gray-400'
        } transition-transform duration-300 ease-in-out`}
      >
        <div
          className={` circle mx-1 h-5 w-5 transform rounded-full bg-white pl-1 transition-transform duration-300 ease-in-out ${
            isChecked ? 'translate-x-full' : ''
          }`}
        ></div>
      </div>
    </label>
  );
};
