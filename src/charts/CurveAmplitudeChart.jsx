import { Sinusoid } from './Sinusoid'

export function CurveAmplitudeChart({ value, height, width }) {
  const SCALE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <svg width={width} height={height}>
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
  )
}
