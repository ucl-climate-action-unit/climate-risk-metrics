import { scaleLinear } from 'd3'
import { useMeasure } from 'react-use'

export function BarChart({ value }) {
  const [wrapperRef, { width, height }] = useMeasure()
  const PADDINGX = 24
  const PADDINGY = 30
  // const LINE_HEIGHT = 20
  const IDEAL_VALUE = 0
  const STEP = 0.1
  const SCALE = [-1, -0.5, 0, 0.5, 1]

  const distanceToIdeal = value - IDEAL_VALUE
  const stepsToIdeal = Math.floor(distanceToIdeal / STEP)
  const { x0, y0 } = { x0: width / 2, y0: height / 2 }
  const r = width / 9

  const computeDistance = scaleLinear()
    .domain([-1, 1])
    .range([PADDINGX, width - PADDINGX])

  const scale = SCALE.map((v) => {
    const x1 = computeDistance(v)
    console.log(x1)
    return (
      <g key={v}>
        <line
          x1={x1}
          y1={PADDINGY}
          x2={x1}
          y2={height - PADDINGY}
          style={{ stroke: 'rgb(255,255,255,20%)', strokeWidth: '1' }}
        />

        <text
          textAnchor="middle"
          fill={'white'}
          x={x1}
          y={height - PADDINGY + 19}
          className="small"
        >
          {v > 0 ? `+${v}` : v}
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
    <div ref={wrapperRef} className="h-full relative">
      <svg height={height} width={width} className="absolute">
        {/* line to delate */}
        <line
          x1={PADDINGX}
          y1={30}
          x2={width - PADDINGX}
          y2={30}
          stroke="white"
          strokeWidth={1}
          opacity={0.3}
        />
        {/* line to delate */}
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
        {/* line to delate */}
        <line
          x1={PADDINGX}
          y1={height - 30}
          x2={width - PADDINGX}
          y2={height - 30}
          stroke="white"
          strokeWidth={1}
          opacity={0.3}
        />
        {/* line to delate */}
      </svg>
    </div>
  )
}
