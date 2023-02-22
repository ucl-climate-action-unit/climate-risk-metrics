import { scaleLinear } from 'd3'

export function BarChart({ value, height, width }) {
  const PADDING = 20
  const IDEAL_VALUE = 0
  const STEP = 0.1
  const SCALE = [-1, -0.5, 0, 0.5, 1]

  const distanceToIdeal = value - IDEAL_VALUE
  const stepsToIdeal = Math.floor(distanceToIdeal / STEP)
  const { x0, y0 } = { x0: width / 2, y0: height / 2 }
  const r = height / 4

  const computeDistance = scaleLinear()
    .domain([-1, 1])
    .range([PADDING, width - PADDING])

  const scale = SCALE.map((v) => {
    const x1 = computeDistance(v)
    return (
      <g key={v}>
        <line
          x1={x1}
          y1={PADDING}
          x2={x1}
          y2={height - PADDING - 16}
          style={{ stroke: 'rgb(255,255,255,20%)', strokeWidth: '1' }}
        />
        <text textAnchor="middle" fill={'white'} x={x1} y={height - PADDING} className="small">
          {v}
        </text>
      </g>
    )
  })

  const track = [...Array(stepsToIdeal).keys()]
    .filter((k) => !!k)
    .map((i) => i * STEP)
    .map((step) => {
      const value = computeDistance(step)
      return <circle key={value} r={r} fill="white" opacity={0.2} cy={y0} cx={value}></circle>
    })

  return (
    <svg height={height} width={width}>
      {scale}
      <circle
        r={r}
        cy={y0}
        cx={x0}
        fill={'none'}
        stroke={'white'}
        strokeWidth={1}
        strokeDasharray={3.75}
      />
      {track}
      <circle fill="white" r={r} cy={y0} cx={computeDistance(value)} />
    </svg>
  )
}
