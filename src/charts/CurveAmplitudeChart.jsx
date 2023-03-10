import { useMeasure } from 'react-use'
import { Sinusoid } from './Sinusoid'
import { round } from 'lodash'

export function CurveAmplitudeChart({ axis = true, value }) {
  const [wrapperRef, { width, height }] = useMeasure()
  const PADDINGX = 24
  const PADDINGY = 30
  // const SPACE_FOR_SCALE = 24
  const SCALE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const valueInt = round(value, 0)
  return (
    <div ref={wrapperRef} className="h-full relative">
      {width > 0 && height > 0 && (
        <svg width={width} height={height} className="absolute ">
          {/* coordinates for scale are computed empirically */}
          {axis && (
            <>
              <text x={width - PADDINGX + 4} y={height * 0.125} fill="white">
                10
              </text>
              <line
                x1={PADDINGX}
                y1={height * 0.125 - 1}
                x2={width - PADDINGX}
                y2={height * 0.125 - 1}
                stroke="white"
                strokeWidth={1}
                opacity={0.3}
              />
              <text x={width - PADDINGX + 4} y={height / 2} fill="white">
                1
              </text>
              <line
                x1={PADDINGX}
                y1={height - height * 0.125 + 1}
                x2={width - PADDINGX}
                y2={height - height * 0.125 + 1}
                stroke="white"
                strokeWidth={1}
                opacity={0.3}
              />
            </>
          )}
          <mask id="maskForSinusoids">
            <rect x={PADDINGX} y={0} width={width - 2 * PADDINGX} height={height} fill="white" />
          </mask>
          <g mask="url(#maskForSinusoids)">
            {SCALE.map((i) => (
              <Sinusoid
                key={i}
                value={i}
                selected={i === valueInt}
                onTrack={i < valueInt}
                width={width - 2 * PADDINGX}
                height={height}
                paddingx={PADDINGX}
              />
            ))}
          </g>
        </svg>
      )}
    </div>
  )
}
