import React from 'react'
import content from '../data/fixed_content.json'
import { IconArrow } from '../icons'

export function Card({ id, children, number, measureRef, isOpen, setIsOpen }) {
  return (
    <div
      style={{ height: isOpen ? 380 : 90 }}
      className={`flex flex-col flex-1 min-w-0 justify-between  duration-700 ${
        id === 'EEI' ? 'bg-EEI' : id === 'STC' ? 'bg-STC' : 'bg-UWI'
      } p-2 text-white rounded-lg`}
      ref={measureRef}
    >
      <div className="flex items-center">
        <h1 className="text-xl font-bold mr-1">{content[`card_${id}_inf_name`]}</h1>
        <div
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          className="lg:hidden"
        >
          <IconArrow />
        </div>
      </div>

      <div className={`${isOpen ? 'show' : 'hidden'}`}>{content[`card_${id}_sci_name`]}</div>
      <div className={`grow ${isOpen ? 'show' : 'hidden'}`}>{children}</div>
      <div className="w-100 flex items-center lg:flex-col lg:items-end">
        <h1 className="text-xl font-bold mr-1">
          {(id === 'EEI' || id === 'STC') && number > 0 ? `+${number}` : number}
        </h1>
        <div>{content[`card_${id}_number_detail`]}</div>
      </div>
    </div>
  )
}
