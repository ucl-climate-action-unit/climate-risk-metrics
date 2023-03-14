import { useState } from 'react'
import { MenuItem } from '.'
import intro from '../data/fixed_content.json'
import { BurgerMenuSVG, CloseSVG } from '../icons'
import { MENU_SECTIONS } from '../utils/ids'

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="md:hidden bg-dark text-white fixed w-full z-10">
      <div className="z-50 flex justify-between items-center px-2">
        <h1 className="py-3 text-xs font-bold sm:text-base">{intro.page_title} </h1>
        <div onClick={() => setIsOpen(!isOpen)}>{!isOpen ? <BurgerMenuSVG /> : <CloseSVG />}</div>
      </div>
      <div
        className={`duration-700 -z-10 py-3 fixed top-12 ${
          isOpen ? 'h-60 opacity-100' : 'h-0 opacity-0'
        } w-full bg-light`}
      >
        {isOpen && (
          <div className="px-2 flex flex-col gap-2 -z-10 ">
            {MENU_SECTIONS.map((section) => {
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
