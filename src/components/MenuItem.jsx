import { Link } from 'react-scroll'
import { useBreakpoints } from '../hooks/useBreakPoints'

export function MenuItem({ id, label, closeMenu }) {
  const { isMd } = useBreakpoints()

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
          : 'text-dark'
      }`}
      spy={true}
      to={id}
      smooth={true}
    >
      {!isMd ? label : label === 'About the project' ? null : label}
    </Link>
  )
}
