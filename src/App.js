import './App.css'
import { BarChart, RotationChart, CurveAmplitudeChart } from './charts/index.js'
import { useControls } from 'leva'
import { Card } from './components/Card'
import content from './data/content.json'

function App() {
  // const { imbalanceValue, speedValue, unusualnessValue } = useControls({
  //   imbalanceValue: 1.07,
  //   speedValue: 0.57,
  //   unusualnessValue: 4,
  // })
  const { imbalanceValue, speedValue, unusualnessValue } = {
    imbalanceValue: 1.07,
    speedValue: 0.57,
    unusualnessValue: 4,
  }

  return (
    <div className="App">
      <div className="bg-dark text-white">
        <div className="lg:max-w-[1440] lg:mx-8 md:mx-4">
          <h1>{content.page_title}</h1>
          <div className="flex justify-center lg:gap-6 gap-3">
            <Card id={'EEI'} number={imbalanceValue}>
              <RotationChart value={imbalanceValue} />
            </Card>
            <Card id={'STC'} number={speedValue}>
              <BarChart value={speedValue} />
            </Card>
            <Card id={'UWI'} number={unusualnessValue}>
              <CurveAmplitudeChart value={unusualnessValue} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
