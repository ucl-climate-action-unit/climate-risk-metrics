import { CardWithDescription, Summary, Wrapper } from '.'
import {
  computeEEIcurrentValueGlobal,
  computeSTCcurrentGlobalValue,
  computeUWIcurrentGlobalValue,
} from '../utils/values'
import intro from '../data/fixed_content.json'
import about_the_project from '../data/fixed_content.json'
import { Element } from 'react-scroll'
import { Link } from 'react-scroll'

export function IntroSection() {
  const { EEIValue, STCValue, UWIValue } = {
    EEIValue: computeEEIcurrentValueGlobal(),
    STCValue: computeSTCcurrentGlobalValue(),
    UWIValue: computeUWIcurrentGlobalValue(),
  }
  const values = [
    { id: 'EEI', value: EEIValue },
    { id: 'STC', value: STCValue },
    { id: 'UWI', value: UWIValue },
  ]
  return (
    <Element name={'intro'}>
      <Wrapper classes="bg-dark text-white pb-14">
        <div className="flex justify-between items-center">
          <h1 className="hidden md:block pt-4 font-bold">{intro.page_title}</h1>
          <Link
            className="hidden md:block pt-4 font-bold underline cursor-pointer"
            spy={true}
            smooth={true}
            offset={-80}
            to={about_the_project.foooter_title.toLowerCase().replaceAll(' ', '_')}
          >
            {about_the_project.foooter_title}
          </Link>
        </div>

        <Summary content={intro} EEIValue={EEIValue} STCValue={STCValue} UWIValue={UWIValue} />
        <div className="flex flex-col justify-center d-block gap-1 md:flex-row lg:gap-6 md:gap-3">
          {values.map((metric, i) => {
            return (
              <CardWithDescription
                key={i}
                id={metric.id}
                value={metric.value}
                shortDescription={intro[`${metric.id}_short_description`]}
                metric={intro.link_to_metric_explainer}
              />
            )
          })}
        </div>
      </Wrapper>
    </Element>
  )
}
