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
      <h1>{content.page_title}</h1>
      <div className="flex justify-center lg:gap-6 gap-3">
        <Card id={'EEI'} number={'1.04'}>
          <RotationChart value={imbalanceValue} />
        </Card>
        <Card id={'STC'} number={'0.57'}>
          <BarChart value={speedValue} />
        </Card>
        <Card id={'UWI'} number={'x4'}>
          <CurveAmplitudeChart value={unusualnessValue} />
        </Card>
      </div>
    </div>
  )
}

export default App
