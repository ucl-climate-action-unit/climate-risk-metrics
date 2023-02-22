import { scaleLinear } from 'd3'
export function Sinusoid({ value, width, height, selected, onTrack }) {
  const bPercentage = 0.3
  const NUM_PEAKS = 6
  const k = width / (NUM_PEAKS - 1)
  const b = k * bPercentage
  const yStartingPoint = height / 2
  const amplitude = value * 10
  const computeAmplitude = scaleLinear()
    .domain([1, 10])
    .range([10, height / 2])
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
      transform={`translate(${-width / 10})`}
      d={path}
      opacity={selected ? 1 : 0.3}
      stroke="white"
      strokeWidth={selected || onTrack ? 10 : 1}
      fill="none"
    />
  )
}
