export function Title({ value, metric }) {
  return (
    <h1
      className={`font-bold text-5xl text-black mb-4 ${
        metric === 'EEI' ? 'text-EEI' : metric === 'STC' ? 'text-STC' : 'text-UWI'
      }`}
    >
      {value}
    </h1>
  )
}
