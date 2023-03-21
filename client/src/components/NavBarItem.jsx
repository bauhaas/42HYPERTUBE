export default function NavBarItem({ content, link }) {
  return (
    <a
      href={link}
      className="text-brand-dark block rounded-md px-3 py-2 text-base font-medium hover:bg-brand-hover hover:text-white"
    >
      {content}
    </a>
  );
}
