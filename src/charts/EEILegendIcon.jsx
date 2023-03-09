export function EEILegendIcon({ type }) {
  return (
    <svg width="11" height="8" viewBox="0 0 11 7">
      <rect
        x={0}
        y={0}
        width={11}
        height={7}
        fill={`${type === 'current' ? 'white' : 'none'}`}
        stroke={`${type === 'current' ? 'none' : 'white'}`}
        strokeWidth={1.5}
        strokeDasharray={`${type === 'current' ? null : [2, 1.5]}`}
      ></rect>
    </svg>
  )
}
