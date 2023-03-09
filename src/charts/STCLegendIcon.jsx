export function STCLegendIcon({ type }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12">
      <circle
        cx={6}
        cy={6}
        r={5.5}
        fill={`${type === 'current' ? 'white' : 'none'}`}
        stroke={`${type === 'current' ? 'none' : 'white'}`}
        strokeWidth={1.5}
        strokeDasharray={`${type === 'current' ? null : [2, 1.5]}`}
      ></circle>
    </svg>
  )
}
