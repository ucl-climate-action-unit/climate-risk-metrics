import { CurveAmplitudeChart } from '../charts'
// import dataEEI from '../data/dataEEI.json'

export function EEIDataviz({ type }) {
  return (
    <div>
      {type === 'IMBALANCE_DECADE' && (
        <div>
          <br />
          <br />
          imbalance decade viz
          <br />
          <br />
        </div>
      )}
      {type === 'IMBALANCE_YEARS' && (
        <div>
          <CurveAmplitudeChart />
        </div>
      )}
    </div>
  )
}
