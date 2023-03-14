import { CardMinimal } from '.'
import { BarChart, CurveAmplitudeChart } from '../charts'
import { computeCurrentRegionValues } from '../utils/values'
import fixed_content from '../data/fixed_content.json'

export function RegionsViz({ id }) {
  return (
    <div
      className={`grid xl:grid-cols-6 grid-cols-3 w-full gap-4 ${
        id === 'EEI' ? 'bg-EEI' : id === 'STC' ? 'bg-STC' : 'bg-UWI'
      } bg-opacity-10 md:p-6 p-3 rounded-lg lg:mb-14 mb-8`}
    >
      {computeCurrentRegionValues(id).map((row) => {
        const { region, value, total } = row
        return (
          <CardMinimal
            id={id}
            key={region}
            year={region}
            value={value}
            unit={fixed_content[`card_mini_${id}_detail`]}
            total={
              id === 'STC' ? `${total} ${fixed_content[`card_mini_${id}_detail_2`]}` : undefined
            }
          >
            {id === 'STC' && <BarChart value={value} hasAxis={false} hasTrack={false} />}
            {id === 'UWI' && <CurveAmplitudeChart value={value} hasAxis={false} isMini={true} />}
          </CardMinimal>
        )
      })}
    </div>
  )
}
