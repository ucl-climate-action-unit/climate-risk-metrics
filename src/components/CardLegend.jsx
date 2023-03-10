import { EEILegendIcon, STCLegendIcon, UWILegendIcon } from '../charts'

export function CardLegend({ id, card_legend1, card_legend2 }) {
  return (
    <div className="flex gap-2 md:gap-0 md:flex-col xl:gap-2 flex-row xl:flex-row">
      <div className="flex items-center gap-1">
        {id === 'EEI' && <EEILegendIcon type={'current'} />}
        {id === 'STC' && <STCLegendIcon type={'current'} />}
        {id === 'UWI' && <UWILegendIcon type={'current'} />}
        {card_legend1}
      </div>
      <div className="flex items-center gap-1">
        {id === 'EEI' && <EEILegendIcon type={'ideal'} />}
        {id === 'STC' && <STCLegendIcon type={'ideal'} />}
        {id === 'UWI' && <UWILegendIcon type={'ideal'} />}
        {card_legend2}
      </div>
    </div>
  )
}
