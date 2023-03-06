export function Subtitle({ value, metric }) {
  return (
    <h2
      className={`font-bold mb-4 ${
        metric === 'EEI'
          ? 'text-EEI'
          : metric === 'STC'
          ? 'text-STC'
          : metric === 'UWI'
          ? 'text-UWI'
          : 'text'
      }`}
    >
      {value}
    </h2>
  )
}
