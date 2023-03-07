import { Paragraph, Subtitle, Title, EEIDataviz, ImageGDrive } from '.'

export function MetricSection({ id, content }) {
  return (
    <div>
      {content.map((row, index) => {
        return (
          <div key={index}>
            {(row.type === 'title' && <Title value={row.content} metric={id} />) ||
              (row.type === 'subtitle' && <Subtitle value={row.content} metric={id} />) ||
              (row.type === 'text' && <Paragraph value={row.content} />) ||
              (row.type === 'dataviz' && <EEIDataviz type={row.content} />) ||
              (row.type === 'image' && <ImageGDrive src={row.content} alt={row.alt} />)}
          </div>
        )
      })}
    </div>
  )
}
