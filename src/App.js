import './App.css'
import intro from './data/intro.json'
import content from './data/content.json'
import { Summary } from './components/Summary'
import { CardWithDescription } from './components/CardWithDescription'

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
      <div className="bg-dark text-white">
        <div className="lg:max-w-[1440px] lg:px-8 md:px-4 sm:px-2 m-auto">
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
          <div className="bg-light"></div>
        </div>
      </div>
    </div>
  )
}

export default App
