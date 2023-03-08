import { useState } from 'react'
import { Menu } from '.'
import intro from '../data/fixed_content.json'
import { BurgerMenuSVG, CloseSVG } from '../icons'

export function MenuMobile({}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="md:hidden bg-dark text-white fixed w-full">
      <div className="flex justify-between items-center px-2">
        <h1 className="py-3 font-sans font-bold">{intro.page_title}</h1>
        <div onClick={() => setIsOpen(!isOpen)}>{!isOpen ? <BurgerMenuSVG /> : <CloseSVG />}</div>
      </div>
      {isOpen && <div className="py-3 fixed top-12 w-full bg-dark">something</div>}
    </div>
  )
}
