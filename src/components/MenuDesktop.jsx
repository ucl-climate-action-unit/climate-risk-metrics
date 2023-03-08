import { MenuItem } from '.'
import { SECTIONS } from '../utils/ids'

export function MenuDesktop() {
  return (
    <div className="sticky top-1/2">
      <div className="flex flex-col md:gap-2">
        {SECTIONS.map((m) => {
          const { id, label } = m
          return <MenuItem key={`${id}Link`} id={id} label={label} />
        })}
      </div>
    </div>
  )
}
