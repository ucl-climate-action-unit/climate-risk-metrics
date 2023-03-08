import React, { useState } from 'react'
import { BarChart, CurveAmplitudeChart, RotationChart } from '../charts'
import { Card } from './Card'
import { useBreakpoints } from '../hooks/useBreakPoints'
import { Link } from 'react-scroll'

export function CardWithDescription({ id, value, shortDescription, metric }) {
  const { isMd } = useBreakpoints()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`flex-1 ${isOpen ? 'mb-10 lg:mb-0' : ''}`}>
      <Card id={id} number={value} isOpen={isOpen} setIsOpen={setIsOpen}>
        {(id === 'EEI' && <RotationChart value={value} />) ||
          (id === 'STC' && <BarChart value={value} />) ||
          (id === 'UWI' && <CurveAmplitudeChart value={value} />)}
      </Card>
      <div
        className={`leading-5 mt-4 ${isMd ? 'mb-4' : `duration-700 ${isOpen ? 'mb-4' : 'hidden'}`}`}
      >
        {shortDescription}
      </div>
      <Link
        smooth={true}
        to={id}
        offset={-80}
        className={`cursor-pointer ${
          isMd ? 'font-bold underline' : `duration-700 ${isOpen ? 'font-bold underline' : 'hidden'}`
        }`}
      >
        {metric}
      </Link>
    </div>
  )
}
