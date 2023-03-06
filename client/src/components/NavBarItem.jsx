export default function NavbarItem({ content, link }) {
  return (
    <li className="nav-item">
      <a
        href={link}
        className=" flex justify-end text-xs font-bold uppercase text-white hover:opacity-75"
      >
        <i className=" text-lg text-white opacity-75"></i>
        <span className="ml-2">{content}</span>
      </a>
    </li>
  );
}
