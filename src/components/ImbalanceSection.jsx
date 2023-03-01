import { Paragraph, Wrapper, Subtitle, Title, EEIDataviz } from '.'
import content from '../data/content.json'

export function ImbalanceSection({}) {
  return (
    <Wrapper classes="bg-light pt-20">
      <div className="flex lg:gap-6 pt-14">
        <div className="flex-1 w-1/3">MENU</div>
        <div className="flex-initial w-2/3">
          {content.map((row) => {
            switch (row.type) {
              case 'title':
                return <Title value={row.content} metric={row.metric} />
              case 'subtitle':
                return <Subtitle value={row.content} metric={row.metric} />
              case 'text':
                return <Paragraph value={row.content} />
              case 'dataviz':
                return <EEIDataviz type={row.content} />
              default:
                console.log(`type of content ${row.type} not permitted`)
            }
          })}
        </div>
      </div>
    </Wrapper>
  )
}
