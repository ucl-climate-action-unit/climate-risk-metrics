import { useMeasure } from 'react-use'
import { Sinusoid } from './Sinusoid'

export function CurveAmplitudeChart({ value }) {
  const [wrapperRef, { width, height }] = useMeasure()
  const SCALE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div ref={wrapperRef} className="h-full relative">
      <svg width={width} height={height} className="absolute">
        {SCALE.map((i) => (
          <Sinusoid
            key={i}
            value={i}
            selected={i === value}
            onTrack={i < value}
            width={width}
            height={height}
          />
        ))}
      </svg>
    </div>
  )
}
