import { useState } from 'react'
import { Link } from 'react-scroll/modules'
import { Menu, MenuItem } from '.'
import intro from '../data/fixed_content.json'
import { BurgerMenuSVG, CloseSVG } from '../icons'
import { SECTIONS } from '../utils/ids'

export function MenuMobile({}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="md:hidden bg-dark text-white fixed w-full">
      <div className="z-50 flex justify-between items-center px-2">
        <h1 className="py-3 text-base font-bold">{intro.page_title}</h1>
        <div onClick={() => setIsOpen(!isOpen)}>{!isOpen ? <BurgerMenuSVG /> : <CloseSVG />}</div>
      </div>
      <div
        className={`duration-700 -z-10 py-3 fixed top-12 ${
          isOpen ? 'h-52 opacity-100' : 'h-0 opacity-0'
        } w-full bg-dark`}
      >
        {isOpen && (
          <div className="px-2 flex flex-col gap-2 -z-10">
            {SECTIONS.map((section) => {
              return (
                <MenuItem
                  closeMenu={() => setIsOpen(false)}
                  id={section.id}
                  label={section.label}
                  key={`${section.id}Link`}
                />
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
