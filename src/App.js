import './App.css'
import intro from './data/fixed_content.json'
import { CardWithDescription, Wrapper, Summary } from './components'
import { ImbalanceSection } from './components/ImbalanceSection'
import { computeEEIcurrentValueGlobal, computeSTCcurrentGlobalValue } from './utils/values'

function App() {
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
    <div className="App">
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
      <ImbalanceSection />
    </div>
  )
}

export default App
