import { IconEEI, IconSTC, IconUWI } from '../icons'
import { METRIC_IDS } from '../utils/ids'

export function Summary({ content, children }) {
  return (
    <p className="mt-9 mb-16 w-2/3 text-xl block">
      {METRIC_IDS.map((id) => {
        return (
          <span key={id}>
            {content[`summary_${id}`]}
            <span className="inline-block text-center ml-1">
              {id === 'EEI' ? <IconEEI /> : id === 'STC' ? <IconSTC /> : <IconUWI />}
            </span>
            <span className="font-bold">{` ${this} ${content[`summary_${id}_unit`]} `}</span>
          </span>
        )
      })}
    </p>
  )
}
