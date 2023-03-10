import React from 'react'
import content from '../data/fixed_content.json'
import { IconArrow, IconEEICardMobile, IconSTCCardMobile, IconUWICardMobile } from '../icons'
import { useBreakpoints } from '../hooks/useBreakPoints'
import { useMeasure } from 'react-use'
import { CardLegend } from '.'
import { altTextVisualizations } from '../utils/alt'

export function Card({ id, children, number, isOpen, setIsOpen }) {
  const { isMd } = useBreakpoints()
  const [wrapperRef, { width }] = useMeasure()
  return (
    <div
      onClick={() => {
        !isMd && setIsOpen(!isOpen)
      }}
      style={{ height: isMd ? width : isOpen ? width : 80 }}
      className={`${
        isMd ? 'duration-0' : 'duration-700'
      } relative flex flex-col flex-1 min-w-0 justify-between  ${
        id === 'EEI' ? 'bg-EEI' : id === 'STC' ? 'bg-STC' : 'bg-UWI'
      } md:p-2 p-3 md:min-h-[360px] text-white rounded-lg`}
      ref={wrapperRef}
      alt={altTextVisualizations(id, content, number)}
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
      <div className="flex w-full justify-between items-end md:flex-row-reverse leading-5">
        <div className="w-100 flex items-center md:flex-col md:items-end ">
          <h1 className="text-xl xl:text-2xl font-bold mr-1">
            {(id === 'EEI' || id === 'STC') && number > 0 ? `+${number}` : `x${number}`}
          </h1>
          <div className="leading-5 ">{content[`card_${id}_number_detail`]}</div>
        </div>
        {(isMd || isOpen) && (
          <CardLegend
            id={id}
            card_legend1={content[`card_${id}_legend1`]}
            card_legend2={content[`card_${id}_legend2`]}
          />
        )}
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
