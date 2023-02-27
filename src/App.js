import './App.css'
import { BarChart, RotationChart, CurveAmplitudeChart } from './charts/index.js'
import { useControls } from 'leva'
import { Card } from './components/Card'
import content from './data/content.json'
import { Summary } from './components/Summary'

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
  console.log(this)

  return (
    <div className="App">
      <div className="bg-dark text-white">
        <div className="lg:max-w-[1440] lg:mx-8 md:mx-4">
          <h1>{content.page_title}</h1>
          <Summary content={content} />
          <div className="flex justify-center lg:gap-6 gap-3">
            <Card id={'EEI'} number={EEIValue}>
              <RotationChart value={EEIValue} />
            </Card>
            <Card id={'STC'} number={STCValue}>
              <BarChart value={STCValue} />
            </Card>
            <Card id={'UWI'} number={UWIValue}>
              <CurveAmplitudeChart value={UWIValue} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
