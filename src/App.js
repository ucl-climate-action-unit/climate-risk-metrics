import './App.css'
import intro from './data/fixed_content.json'
import { CardWithDescription, Wrapper, Summary } from './components'
import { ImbalanceSection } from './components/ImbalanceSection'

function App() {
  // const { imbalanceValue, speedValue, unusualnessValue } = useControls({
  //   imbalanceValue: 1.07,
  //   speedValue: 0.57,
  //   unusualnessValue: 4,
  // })
  const { EEIValue, STCValue, UWIValue } = {
    EEIValue: 1.07,
    STCValue: 0.57,
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
        <h1>{intro.page_title}</h1>
        <Summary content={intro} />
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
