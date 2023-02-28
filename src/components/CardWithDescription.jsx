import { BarChart, CurveAmplitudeChart, RotationChart } from '../charts'
import { Card } from './Card'

export function CardWithDescription({ id, value, shortDescription, metric }) {
  return (
    <div className="flex-1">
      <Card id={id} number={value}>
        {(id === 'EEI' && <RotationChart value={value} />) ||
          (id === 'STC' && <BarChart value={value} />) ||
          (id === 'UWI' && <CurveAmplitudeChart value={value} />)}
      </Card>
      <div className="mb-4">{shortDescription}</div>
      <a className="font-bold underline">{metric}</a>
    </div>
  )
}
