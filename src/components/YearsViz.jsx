import { CardMinimal } from '.'
import { CurveAmplitudeChart } from '../charts'
import { computeYearValues } from '../utils/values'

export function YearsViz({ id }) {
  console.log(computeYearValues(id))
  return (
    <div className="flex w-full gap-4 bg-EEI bg-opacity-10 p-6 rounded-lg lg:mb-14 mb-8">
      {computeYearValues(id).map((row) => {
        const { year, value } = row
        return (
          <CardMinimal id={id} key={year} year={year} value={value}>
            <CurveAmplitudeChart axis={false} value={value} />
          </CardMinimal>
        )
      })}
    </div>
  )
}
