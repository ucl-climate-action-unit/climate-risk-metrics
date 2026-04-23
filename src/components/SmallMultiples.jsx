import { RegionsViz, DecadesViz, YearsViz } from '.'

export function SmallMultiples({ id, type }) {
  const [baseType, year] = type.split(':')
  return (
    <div className="w-full">
      {baseType === 'DECADES' && <DecadesViz id={id} />}
      {baseType === 'REGIONS' && <RegionsViz id={id} year={year} />}
      {baseType === 'YEARS' && <YearsViz id={id} />}
    </div>
  )
}
