import { CardMinimal } from '.'
import { BarChart, CurveAmplitudeChart } from '../charts'
import { computeCurrentRegionValues } from '../utils/values'

export function RegionsViz({ id }) {
  return (
    <div
      className={`flex w-full gap-4 ${
        id === 'EEI' ? 'bg-EEI' : id === 'STC' ? 'bg-STC' : 'bg-UWI'
      } bg-opacity-10 p-6 rounded-lg lg:mb-14 mb-8`}
    >
      {computeCurrentRegionValues(id).map((region) => {
        return (
          <CardMinimal id={id} key={region.region} year={region.region} value={region.value}>
            {id === 'STC' && <BarChart value={region.value} hasAxis={false} />}
            {id === 'UWI' && (
              <CurveAmplitudeChart value={region.value} hasAxis={false} isMini={true} />
            )}
          </CardMinimal>
        )
      })}
    </div>
  )
}
