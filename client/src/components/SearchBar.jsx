export default function SearchBar({}) {
  return (
    <div className="flex ">
      <input
        type="search"
        className="focus:shadow-te-primary relative  m-0 block w-[1%] min-w-0 flex-auto rounded-l border border-solid bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300  ease-in-out focus:text-neutral-700 focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon1"
      />
      <button
        className="text- hover:bg-primary-700 focus:bg-primary-700 active:bg-primary-800 bg-brand-hover relative z-[2] flex items-center rounded-r px-6 py-2.5 text-xs font-medium uppercase leading-tight shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
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
  );
}
