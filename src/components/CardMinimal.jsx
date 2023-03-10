import { useMeasure } from 'react-use'

export function CardMinimal({ id, children, year, value, unit }) {
  const [ref, { width }] = useMeasure()
  return (
    <div className="w-full">
      <div
        ref={ref}
        style={{ height: width }}
        className={`${
          id === 'EEI' ? 'bg-EEI' : id === 'STC' ? 'bg-STC' : 'bg-UWI'
        } w-full rounded-lg lg:p-2 p-1`}
      >
        {children}
      </div>
      <div className="text-lg">
        <div className="font-bold">{year}</div>
        <div>
          {value}&nbsp;
          <span>{unit}</span>
        </div>
      </div>
    </div>
  )
}
