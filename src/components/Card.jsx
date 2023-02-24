export function Card({ id, children, title, subtitle, unit, number }) {
  return (
    <div className={`flex flex-col justify-start flex-start bg-${id} p-2 text-white`}>
      <h1>{title}</h1>
      <div>{subtitle}</div>
      {children}
      <div className="w-100 flex items-end flex-col">
        <h1>{number}</h1>
        <div>{unit}</div>
      </div>
    </div>
  )
}
