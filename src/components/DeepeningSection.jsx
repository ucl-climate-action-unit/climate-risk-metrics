import { Element } from 'react-scroll/modules'
import { MetricSection, Wrapper, Menu } from '.'
import { SECTIONS } from '../utils/ids'
import EEI_content from '../data/EEI_content.json'
import STC_content from '../data/STC_content.json'
import UWI_content from '../data/UWI_content.json'
import decades_content from '../data/decades_content.json'
import about_the_metrics from '../data/about_the_metrics.json'

export function DeepeningSection({}) {
  return (
    <Wrapper classes="bg-light pt-20">
      <div className="flex lg:gap-6">
        <div className="flex-1 w-1/3">
          <Menu />
        </div>
        <div
          className="flex-initial w-2/3"
          data-spy="scroll"
          data-target=".navbar"
          data-ofsett="50"
        >
          {SECTIONS.map((m) => {
            const { id, label } = m
            return (
              <Element name={id} className="first:mt-0 mt-20">
                {id === 'EEI' && <MetricSection content={EEI_content} id={'EEI'} />}
                {id === 'STC' && <MetricSection content={STC_content} id={'STC'} />}
                {id === 'UWI' && <MetricSection content={UWI_content} id={'UWI'} />}
                {id === 'decades_content' && <MetricSection content={decades_content} />}
                {id === 'about_the_metrics' && <MetricSection content={about_the_metrics} />}
              </Element>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
