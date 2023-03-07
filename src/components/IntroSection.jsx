import { CardWithDescription, Summary, Wrapper } from '.'
import { computeEEIcurrentValueGlobal, computeSTCcurrentGlobalValue } from '../utils/values'
import intro from '../data/fixed_content.json'

export function IntroSection() {
  const { EEIValue, STCValue, UWIValue } = {
    EEIValue: computeEEIcurrentValueGlobal(),
    STCValue: computeSTCcurrentGlobalValue(),
    UWIValue: 4,
  }
  const values = [
    { id: 'EEI', value: EEIValue },
    { id: 'STC', value: STCValue },
    { id: 'UWI', value: UWIValue },
  ]
  return (
    <Wrapper classes="bg-dark text-white pb-14">
      <h1 className="pt-4 font-sans">{intro.page_title}</h1>
      <Summary content={intro} EEIValue={EEIValue} STCValue={STCValue} UWIValue={UWIValue} />
      <div className="flex flex-col justify-center d-block  gap-1 md:flex-row lg:gap-6">
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
  )
}
