import { MenuItem } from '.'
import { SECTIONS } from '../utils/ids'

export function MenuDesktop() {
  return (
    <div className="sticky top-[calc(50%_-_108.5px)]">
      <div className="flex flex-col md:gap-2">
        {SECTIONS.map((m) => {
          const { id, label } = m
          return <MenuItem key={`${id}Link`} id={id} label={label} />
        })}
      </div>
    </div>
  )
}
