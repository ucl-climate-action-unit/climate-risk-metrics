import { CardMinimal } from '.'
import { CurveAmplitudeChart } from '../charts'
import { computeYearValues } from '../utils/values'

export function YearsViz({ id }) {
  return (
    <div
      className={`flex flex-wrap w-full gap-4 ${
        id === 'EEI' ? 'bg-EEI' : id === 'STC' ? 'bg-STC' : 'bg-UWI'
      } bg-opacity-10 p-6 rounded-lg lg:mb-14 mb-8`}
    >
      {computeYearValues(id).map((row) => {
        const { year, value } = row
        return (
          !isNaN(value) && (
            <CardMinimal id={id} key={year} year={year} value={value} isMini={true}>
              {id === 'UWI' && <CurveAmplitudeChart hasAxis={false} value={value} isMini={true} />}
            </CardMinimal>
          )
        )
      })}
      <CardMinimal id={id} year={4000} value={10} isMini={true}>
        <CurveAmplitudeChart hasAxis={false} value={10} isMini={true} />
      </CardMinimal>
    </div>
  )
}
