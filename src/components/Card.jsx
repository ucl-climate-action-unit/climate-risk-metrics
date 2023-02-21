export function Card({ children, color, title, subtitle, unit, number }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'flex-start',
        backgroundColor: `${color}`,
        padding: '8px',
        color: '#ffffff',
      }}
    >
      <h1>{title}</h1>
      <div>{subtitle}</div>
      {children}
      <div
        style={{ width: '100%', display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}
      >
        <h1>{number}</h1>
        <div>{unit}</div>
      </div>
    </div>
  )
}
