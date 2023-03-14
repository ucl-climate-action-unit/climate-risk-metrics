import { RotationChart } from '../charts'
import { computeGlobalValueByYear } from '../utils/values'
import { CardMinimal } from '.'
import fixed_content from '../data/fixed_content.json'

export function DecadesViz({ id }) {
  const DECADES = [2010, 2016, 2022]
  return (
    <div className="grid grid-cols-3 w-full lg:gap-4 gap-2 bg-EEI bg-opacity-10 md:p-6 p-3 rounded-lg lg:mb-14 mb-8">
      {DECADES.map((year) => {
        const value = computeGlobalValueByYear(year, id)
        return (
          <CardMinimal
            id={id}
            key={year}
            year={year}
            value={value}
            unit={fixed_content[`card_mini_${id}_detail`]}
          >
            {id === 'EEI' && <RotationChart hasAxis={false} value={value} hasTrack={false} />}
          </CardMinimal>
        )
      })}
    </div>
  )
}
