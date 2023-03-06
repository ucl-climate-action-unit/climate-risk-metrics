import React, { useState } from 'react'
import { BarChart, CurveAmplitudeChart, RotationChart } from '../charts'
import { Card } from './Card'

export function CardWithDescription({ id, value, shortDescription, metric }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex-1">
      <Card id={id} number={value} isOpen={isOpen} setIsOpen={setIsOpen}>
        {(id === 'EEI' && <RotationChart value={value} />) ||
          (id === 'STC' && <BarChart value={value} />) ||
          (id === 'UWI' && <CurveAmplitudeChart value={value} />)}
      </Card>
      <div className={`duration-700 ${isOpen ? 'mb-4' : 'hidden'}`}>{shortDescription}</div>
      <a href="/" className={`duration-700 ${isOpen ? 'font-bold underline' : 'hidden'}`}>
        {metric}
      </a>
    </div>
  )
}
