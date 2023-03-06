export function Title({ value, metric }) {
  return (
    <h1
      className={`font-bold text-5xl mb-4 ${
        metric === 'EEI'
          ? 'text-EEI'
          : metric === 'STC'
          ? 'text-STC'
          : metric === 'UWI'
          ? 'text-UWI'
          : 'text-dark'
      }`}
    >
      {value}
    </h1>
  )
}
