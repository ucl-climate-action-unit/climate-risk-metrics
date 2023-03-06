import { IconEEI, IconSTC, IconUWI } from '../icons'
import { METRIC_IDS } from '../utils/ids'

export function Summary({ content, EEIValue, STCValue, UWIValue }) {
  return (
    <p className="mt-9 mb-16 w-2/3 text-xl block">
      {METRIC_IDS.map((m) => {
        const { id } = m
        return (
          <span key={id}>
            {content[`summary_${id}`]}
            <span className="inline-block ml-2 align-middle">
              {id === 'EEI' && <IconEEI />}
              {id === 'STC' && <IconSTC />}
              {id === 'UWI' && <IconUWI />}
            </span>
            <span className="font-bold">{` ${
              (id === 'UWI' && UWIValue) || (id === 'STC' && STCValue) || (id === 'EEI' && EEIValue)
            } ${content[`summary_${id}_unit`]} `}</span>
          </span>
        )
      })}
    </p>
  )
}
