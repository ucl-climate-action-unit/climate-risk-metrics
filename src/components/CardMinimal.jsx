import { useMeasure } from 'react-use'

export function CardMinimal({ id, children, year, value, unit, isMini = false }) {
  const [ref, { width }] = useMeasure()
  return (
    <div ref={ref} className={`${isMini ? 'w-14' : 'w-full'}`}>
      <div
        style={{ height: width }}
        className={`${
          id === 'EEI' ? 'bg-EEI' : id === 'STC' ? 'bg-STC' : 'bg-UWI'
        } w-full rounded-lg lg:p-2 p-1`}
      >
        {children}
      </div>
      <div className={`${isMini ? 'leading-5 text-center' : 'text-lg'}`}>
        <div className="font-bold">{year}</div>
        <div>
          {value}&nbsp;
          <span>{unit}</span>
        </div>
      </div>
    </div>
  )
}
