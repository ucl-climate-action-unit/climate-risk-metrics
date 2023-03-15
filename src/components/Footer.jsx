import { Wrapper } from '.'
import { Data4ChangeLOGO, UCLClimateActionUnitLOGO, AccuratLOGO } from '../icons'
import dataFixed from '../data/fixed_content.json'
import { Element } from 'react-scroll/modules'

export function Footer() {
  const { foooter_title, footer_body, credits } = dataFixed
  const name = foooter_title.toLowerCase().replaceAll(' ', '_')
  return (
    <Wrapper classes="bg-dark pt-20 text-light pb-20">
      <div className="flex justify-end lg:gap-6">
        <div className="md:w-2/3">
          <Element name={name}>
            <div className="mb-64 max-w-[790px]">
              <h1 className='font-bold text-5xl mb-11 text-light"'>{foooter_title}</h1>
              <div>{footer_body}</div>
            </div>
          </Element>
          <p>{credits}</p>
          <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:gap-5">
            <div className="h-6 flex items-center">
              <a
                href="https://www.ucl.ac.uk/climate-action-unit/climate-action-unit-0"
                target="_blank"
                rel="noreferrer"
              >
                <UCLClimateActionUnitLOGO />
              </a>
            </div>
            <div className="h-6 flex items-center">
              <a href="https://www.data4chan.ge/" target="_blank" rel="noreferrer">
                <Data4ChangeLOGO />
              </a>
            </div>
            <div className="h-6 flex items-center">
              <a href="https://www.accurat.it/" target="_blank" rel="noreferrer">
                <AccuratLOGO />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
