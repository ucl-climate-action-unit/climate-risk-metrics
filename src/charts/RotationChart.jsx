import { scaleLinear } from 'd3'
import { range } from 'lodash'
import { useMeasure } from 'react-use'

export function RotationChart({ value, hasAxis = true, hasTrack = true }) {
  const [wrapperRef, { width, height }] = useMeasure()
  const RADIUS = Math.min(height, width / 2)
  const RECT_WIDTH = width / 14
  const PADDING = 8
  const PADDINGX = 24
  const PADDINGY = 30
  const SCALE = [-2, -1, 0, 1, 2]
  const IDEAL = 0
  const STEP = 0.2

  const distanceToIdeal = value - IDEAL
  const stepsToIdeal = Math.floor(distanceToIdeal / STEP)
  const { xRectCenter, yRectCenter } = {
    xRectCenter: RECT_WIDTH / 2,
    yRectCenter: RADIUS / 2,
  }
  const { xCenter, yCenter } = { xCenter: width / 2, yCenter: height / 2 }

  const { xi1, yi1 } = {
    xi1: xCenter - xRectCenter,
    yi1: yCenter - yRectCenter,
  }
  const yi2 = yi1 + RADIUS
  const computeDegreeAngle = scaleLinear()
    .domain([-2, +2])
    .range([-Math.PI / 4, Math.PI / 4])

  const computeRadiantAngle = scaleLinear().domain([-2, +2]).range([-45, 45])

  const scale = SCALE.map((v) => {
    return (
      <g key={v}>
        <line
          x1={xCenter}
          y1={yi1}
          x2={xCenter}
          y2={yCenter + yRectCenter}
          transform={`rotate(${computeRadiantAngle(v)},${xi1 + xRectCenter},${yi2})`}
          style={{ stroke: 'rgb(255,255,255,20%)', strokeWidth: '1' }}
        />
        <text
          textAnchor="middle"
          fill={'white'}
          x={xCenter + Math.cos(computeDegreeAngle(v) - Math.PI / 2) * (RADIUS + PADDINGX)}
          y={yi2 - Math.sin(computeDegreeAngle(v) + Math.PI / 2) * (RADIUS + PADDING)}
          className="small"
        >
          {v > 0 ? `+${v}` : v}
        </text>
      </g>
    )
  })
  const track = range(1, stepsToIdeal + 1)
    .map((i) => i * STEP)
    .map((step) => {
      return (
        <rect
          key={step}
          x={xi1}
          y={yCenter - yRectCenter}
          width={RECT_WIDTH}
          height={RADIUS}
          opacity={0.2}
          transform={`rotate(${computeRadiantAngle(step)},${xi1 + xRectCenter},${yi1 + RADIUS})`}
          fill="rgb(255,255,255)"
        />
      )
    })
  return (
    <div ref={wrapperRef} className="h-full relative">
      <svg height={height} width={width} className="absolute ">
        <rect
          x={xi1}
          y={yi1}
          width={RECT_WIDTH}
          height={RADIUS}
          fill="transparent"
          stroke="white"
          strokeWidth={1}
          strokeDasharray={3.75}
        />
        {hasTrack && track}
        <rect
          x={xi1}
          y={yCenter - yRectCenter}
          width={RECT_WIDTH}
          height={RADIUS}
          transform={`rotate(${computeRadiantAngle(value)},${xi1 + xRectCenter},${yi1 + RADIUS})`}
          fill="rgb(255,255,255)"
        />
        {hasAxis && scale}
      </svg>
    </div>
  )
}
