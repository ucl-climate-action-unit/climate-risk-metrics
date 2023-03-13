import { RegionsViz, DecadesViz, YearsViz } from '.'

export function SmallMultiples({ id, type }) {
  return (
    <div>
      {type === 'DECADE' && <DecadesViz id={id} />}
      {/* {type === 'REGIONS' && <RegionsViz id={id} />} */}
      {type === 'YEARS' && <YearsViz id={id} />}
    </div>
  )
}
