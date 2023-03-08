import { useMeasure } from 'react-use'
import { Sinusoid } from './Sinusoid'
import { round } from 'lodash'

export function CurveAmplitudeChart({ value }) {
  const [wrapperRef, { width, height }] = useMeasure()
  const SPACE_FOR_SCALE = 24
  const SCALE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const valueInt = round(value, 0)
  return (
    <div ref={wrapperRef} className="h-full relative pl-[24px]">
      <svg width={width} height={height} className="absolute">
        {/* coordinates for scale are computed empirically */}
        <text x={width - SPACE_FOR_SCALE + 4} y={36} fill="white">
          10
        </text>
        <line
          x1={0}
          y1={30}
          x2={width - SPACE_FOR_SCALE}
          y2={30}
          stroke="white"
          strokeWidth={1}
          opacity={0.3}
        />
        <text x={width - SPACE_FOR_SCALE + 4} y={height / 2} fill="white">
          1
        </text>
        <line
          x1={0}
          y1={height - 30}
          x2={width - SPACE_FOR_SCALE}
          y2={height - 30}
          stroke="white"
          strokeWidth={1}
          opacity={0.3}
        />
        <mask id="maskForSinusoids">
          <rect x={0} y={0} width={width - SPACE_FOR_SCALE} height={height} fill="white" />
        </mask>
        <g mask="url(#maskForSinusoids)">
          {SCALE.map((i) => (
            <Sinusoid
              key={i}
              value={i}
              selected={i === valueInt}
              onTrack={i < valueInt}
              width={width - SPACE_FOR_SCALE}
              height={height}
            />
          ))}
        </g>
      </svg>
    </div>
  )
}
