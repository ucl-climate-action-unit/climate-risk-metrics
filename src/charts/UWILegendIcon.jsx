export function UWILegendIcon({ type }) {
  return (
    <svg width="17" height="3" viewBox="0 0 17 3">
      <line
        x1={0}
        y1={0}
        x2={17}
        y2={0}
        stroke={'white'}
        strokeWidth={3}
        strokeDasharray={`${type === 'current' ? null : [2, 1.5]}`}
      ></line>
    </svg>
  )
}
