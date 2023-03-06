import { Link } from 'react-scroll'
import { SECTIONS } from '../utils/ids'

export function Menu() {
  return (
    <div className="sticky top-1/2">
      <div className="flex flex-col md:gap-2">
        {SECTIONS.map((m) => {
          const { id, label } = m
          return (
            <Link
              offset={-80}
              key={id}
              activeClass="before:content-['–']"
              className={`font-bold text-xl ${
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
              {label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
