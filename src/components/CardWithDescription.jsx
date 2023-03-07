import React, { useState } from 'react'
import { BarChart, CurveAmplitudeChart, RotationChart } from '../charts'
import { Card } from './Card'
import { useBreakpoints } from '../hooks/useBreakPoints'

export function CardWithDescription({ id, value, shortDescription, metric }) {
  const { isLg } = useBreakpoints()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex-1">
      <Card id={id} number={value} isOpen={isOpen} setIsOpen={setIsOpen}>
        {(id === 'EEI' && <RotationChart value={value} />) ||
          (id === 'STC' && <BarChart value={value} />) ||
          (id === 'UWI' && <CurveAmplitudeChart value={value} />)}
      </Card>
      <div className={`${isLg ? 'mb-4' : `duration-700 ${isOpen ? 'mb-4' : 'hidden'}`}`}>
        {shortDescription}
      </div>
      <a
        href="/"
        className={` ${
          isLg ? 'font-bold underline' : `duration-700 ${isOpen ? 'font-bold underline' : 'hidden'}`
        }`}
      >
        {metric}
      </a>
    </div>
  )
}
