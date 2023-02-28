import content from '../data/content.json'

export function Card({ id, children, number, measureRef }) {
  return (
    <div
      style={{ height: 380 }}
      className={`flex flex-col flex-1 min-w-0 justify-start ${
        id === 'EEI' ? 'bg-EEI' : id === 'STC' ? 'bg-STC' : 'bg-UWI'
      } p-2 text-white rounded-lg mb-4`}
      ref={measureRef}
    >
      <h1 className="text-xl font-bold">{content[`card_${id}_inf_name`]}</h1>
      <div>{content[`card_${id}_sci_name`]}</div>
      <div className="grow">{children}</div>
      <div className="w-100 flex items-end flex-col">
        <h1 className="text-2xl font-bold">{number}</h1>
        <div>{content[`card_${id}_unit`]}</div>
      </div>
    </div>
  )
}
