import { Link } from 'react-scroll'

export function MenuItem({ id, label, closeMenu }) {
  return (
    <Link
      onClick={closeMenu}
      offset={-80}
      key={id}
      activeClass="before:content-['–']"
      className={`font-bold cursor-pointer text-base md:text-xl ${
        id === 'EEI'
          ? 'text-EEI'
          : id === 'STC'
          ? 'text-STC'
          : id === 'UWI'
          ? 'text-UWI'
          : 'md:text-dark text-white'
      }`}
      spy={true}
      to={id}
      smooth={true}
    >
      {label}
    </Link>
  )
}
