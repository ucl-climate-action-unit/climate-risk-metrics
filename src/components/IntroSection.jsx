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
      <h1 className="pt-4">{intro.page_title}</h1>
      <Summary content={intro} EEIValue={EEIValue} STCValue={STCValue} UWIValue={UWIValue} />
      <div className="flex justify-center lg:gap-6 gap-3">
        {values.map((metric) => {
          return (
            <CardWithDescription
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
