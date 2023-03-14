import { useMeasure } from 'react-use'

export function CardMinimal({ id, children, year, value, unit, isMini = false, total }) {
  const [ref, { width }] = useMeasure()
  return (
    <div ref={ref} className={`${isMini ? 'w-14' : 'min-w-[88px]'}`}>
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
          {id === 'UWI' ? 'x' : ''}
          {value}&#160;
          {!isMini && <span>{unit}</span>}
        </div>
        {total && (
          <div className="w-fit mt-2 px-2 py-1 bg-STC bg-opacity-10 rounded-lg font-bold text-STC">
            {total}
          </div>
        )}
      </div>
    </div>
  )
}
