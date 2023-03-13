import { Element } from 'react-scroll/modules'
import { MetricSection, Wrapper, MenuDesktop } from '.'
import { SECTIONS } from '../utils/ids'

export function DeepeningSection({}) {
  return (
    <Wrapper classes="bg-light pt-20">
      <div className="flex lg:gap-6 w-full">
        <div className="hidden md:block flex-1 w-1/3">
          <MenuDesktop />
        </div>
        <div className="md:w-2/3 w-full">
          {SECTIONS.map((m) => {
            const { id, content } = m
            return (
              <Element key={`${id}Section`} name={id} className="first:mt-0 mt-20">
                <MetricSection content={content} id={id} />
              </Element>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
