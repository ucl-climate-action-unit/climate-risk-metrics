import { CardMinimal } from '.'
import { CurveAmplitudeChart } from '../charts'
import { computeYearValues } from '../utils/values'
import fixed_content from '../data/fixed_content.json'

export function YearsViz({ id }) {
  return (
    <div
      className={`flex flex-wrap w-full gap-4 ${
        id === 'EEI' ? 'bg-EEI' : id === 'STC' ? 'bg-STC' : 'bg-UWI'
      } bg-opacity-10 md:p-6 p-3 rounded-lg lg:mb-14 mb-8`}
    >
      {computeYearValues(id).map((row) => {
        const { year, value } = row
        return (
          !isNaN(value) && (
            <CardMinimal
              id={id}
              key={year}
              year={year}
              value={value}
              isMini={true}
              unit={fixed_content[`card_mini_${id}_detail`]}
            >
              {id === 'UWI' && <CurveAmplitudeChart hasAxis={false} value={value} isMini={true} />}
            </CardMinimal>
          )
        )
      })}
    </div>
  )
}
