import React from 'react'
import content from '../data/fixed_content.json'
import { IconArrow, IconEEICardMobile, IconSTCCardMobile, IconUWICardMobile } from '../icons'
import { useBreakpoints } from '../hooks/useBreakPoints'

export function Card({ id, children, number, measureRef, isOpen, setIsOpen }) {
  const { isLg } = useBreakpoints()

  return (
    <div
      onClick={() => {
        !isLg && setIsOpen(!isOpen)
      }}
      style={{ height: isLg ? 390 : isOpen ? 390 : 80 }}
      className={`${
        isLg ? 'duration-0' : 'duration-700'
      } relative flex flex-col flex-1 min-w-0 justify-between  ${
        id === 'EEI' ? 'bg-EEI' : id === 'STC' ? 'bg-STC' : 'bg-UWI'
      } p-3 text-white rounded-lg`}
      ref={measureRef}
    >
      <div className="flex items-center">
        <h1 className="text-xl font-bold mr-1">{content[`card_${id}_inf_name`]}</h1>
        <div className="lg:hidden">
          <IconArrow />
        </div>
      </div>

      <div className={`${isLg ? 'show' : isOpen ? 'show' : 'hidden'}`}>
        {content[`card_${id}_sci_name`]}
      </div>
      <div className={`grow ${isLg ? 'show' : isOpen ? 'show' : 'hidden'}`}>{children}</div>
      <div className="w-100 flex items-center lg:flex-col lg:items-end">
        <h1 className="text-xl font-bold mr-1">
          {(id === 'EEI' || id === 'STC') && number > 0 ? `+${number}` : number}
        </h1>
        <div>{content[`card_${id}_number_detail`]}</div>
      </div>
      {!isLg && (
        <div className={`absolute right-3`}>
          {(id === 'EEI' && <IconEEICardMobile />) ||
            (id === 'STC' && <IconSTCCardMobile />) ||
            (id === 'UWI' && <IconUWICardMobile />)}
        </div>
      )}
    </div>
  )
}
