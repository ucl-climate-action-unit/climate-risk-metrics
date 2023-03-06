import { Paragraph, Subtitle, Title, EEIDataviz } from '.'
import content from '../data/EEI_content.json'

export function EEISection({}) {
  return (
    <div>
      {content.map((row, index) => {
        return (
          <div key={index}>
            {(row.type === 'title' && <Title value={row.content} metric={'EEI'} />) ||
              (row.type === 'subtitle' && <Subtitle value={row.content} metric={'EEI'} />) ||
              (row.type === 'text' && <Paragraph value={row.content} />) ||
              (row.type === 'dataviz' && <EEIDataviz type={row.content} />)}
          </div>
        )
      })}
    </div>
  )
}
