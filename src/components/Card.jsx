import React from 'react'
import content from '../data/fixed_content.json'
import { IconArrow, IconEEICardMobile, IconSTCCardMobile, IconUWICardMobile } from '../icons'
import { useBreakpoints } from '../hooks/useBreakPoints'

export function Card({ id, children, number, measureRef, isOpen, setIsOpen }) {
  const { isMd } = useBreakpoints()

  return (
    <div
      onClick={() => {
        !isMd && setIsOpen(!isOpen)
      }}
      style={{ height: isMd ? 390 : isOpen ? 390 : 80 }}
      className={`${
        isMd ? 'duration-0' : 'duration-700'
      } relative flex flex-col flex-1 min-w-0 justify-between  ${
        id === 'EEI' ? 'bg-EEI' : id === 'STC' ? 'bg-STC' : 'bg-UWI'
      } p-3 text-white rounded-lg`}
      ref={measureRef}
    >
      <div className="flex items-center">
        <h1 className="text-xl font-bold mr-1">{content[`card_${id}_inf_name`]}</h1>
        <div className="md:hidden">
          <IconArrow />
        </div>
      </div>

      <div className={`${isMd ? 'show' : isOpen ? 'show' : 'hidden'}`}>
        {content[`card_${id}_sci_name`]}
      </div>
      <div className={`grow ${isMd ? 'show' : isOpen ? 'show' : 'hidden'}`}>{children}</div>
      <div className="w-100 flex items-center lg:flex-col lg:items-end">
        <h1 className="text-xl font-bold mr-1">
          {(id === 'EEI' || id === 'STC') && number > 0 ? `+${number}` : number}
        </h1>
        <div>{content[`card_${id}_number_detail`]}</div>
      </div>
      {!isMd && (
        <div className={`absolute right-3`}>
          {(id === 'EEI' && <IconEEICardMobile />) ||
            (id === 'STC' && <IconSTCCardMobile />) ||
            (id === 'UWI' && <IconUWICardMobile />)}
        </div>
      )}
    </div>
  )
}
