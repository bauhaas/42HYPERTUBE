export default function NavBarItem({ content, link }) {
  return (
    <a
      href="#"
      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
    >
      {content}
    </a>
  );
}
