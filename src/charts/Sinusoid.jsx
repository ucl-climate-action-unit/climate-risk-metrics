import { scaleLinear } from 'd3'
export function Sinusoid({
  value,
  width,
  height,
  onTrack = false,
  isScale,
  paddingx,
  isMini = false,
}) {
  const bPercentage = 0.3
  const NUM_PEAKS = isMini ? 4 : 6
  const k = width / (NUM_PEAKS - 1)
  const b = k * bPercentage
  const yStartingPoint = height / 2
  const computeAmplitude = scaleLinear()
    .domain([1, 10])
    .range([isMini ? 1 : 10, height / 2])
  let path = `M 0,${yStartingPoint}`

  ;[...Array(NUM_PEAKS).keys()].forEach((i) => {
    const f = i % 2 ? -1 : 1
    path = path.concat(
      ` C ${k * i + b},${yStartingPoint + computeAmplitude(value) * f} ${k * (i + 1) - b},${
        yStartingPoint + computeAmplitude(value) * f
      } ${k * (i + 1)},${yStartingPoint}`
    )
  })
  return (
    <path
      transform={`translate(${-width / ((NUM_PEAKS - 1) * 2) + paddingx})`}
      d={path}
      opacity={!isScale || value === 1 ? 1 : 0.3}
      stroke="white"
      strokeWidth={(isScale && !onTrack) || (isScale && value === 1) ? 1 : isMini ? 3 : width / 27}
      strokeDasharray={isScale && value === 1 ? 3.75 : null}
      strokeLinecap="square"
      fill="none"
    />
  )
}
