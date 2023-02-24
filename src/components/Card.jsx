import content from '../data/content.json'

export function Card({ id, children, number, measureRef }) {
  return (
    <div
      className={`flex flex-col flex-1 min-w-0 justify-start flex-start bg-${id} p-2 text-white`}
      ref={measureRef}
    >
      <h1 className="font-l">{content[`card_${id}_inf_name`]}</h1>
      <div>{content[`card_${id}_sci_name`]}</div>
      {children}
      <div className="w-100 flex items-end flex-col">
        <h1>{number}</h1>
        <div>{content[`card_${id}_unit`]}</div>
      </div>
    </div>
  )
}
