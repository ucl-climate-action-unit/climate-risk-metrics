import { Paragraph, Subtitle, Title, SmallMultiples, ImageGDrive } from '.'

export function MetricSection({ id, content }) {
  return (
    <div>
      {content.map((row, index) => {
        return (
          <div key={index} className="w-full">
            {(row.type === 'title' && <Title value={row.content} metric={id} />) ||
              (row.type === 'subtitle' && <Subtitle value={row.content} metric={id} />) ||
              (row.type === 'text' && <Paragraph value={row.content} />) ||
              (row.type === 'dataviz' && <SmallMultiples id={id} type={row.content} />) ||
              (row.type === 'image' && <ImageGDrive src={row.content} alt={row.alt} />)}
          </div>
        )
      })}
    </div>
  )
}
