import './App.css'
import { BarChart, RotationChart, CurveAmplitudeChart } from './charts/index.js'
import { useControls } from 'leva'
import { useMeasure } from 'react-use'
import { Card } from './components/Card'
import content from './data/content.json'

function App() {
  const [ref, { width }] = useMeasure()
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
  const cardHeight = 240

  return (
    <div className="App">
      <h1>{content.page_title}</h1>
      <div className="flex justify-center lg:gap-6 gap-3">
        <Card id={'EEI'} number={'1.04'} measureRef={ref}>
          <RotationChart value={imbalanceValue} height={cardHeight} width={width} />
        </Card>
        <Card id={'STC'} number={'0.57'} measureRef={ref}>
          <BarChart value={speedValue} height={cardHeight} width={width} />
        </Card>
        <Card id={'UWI'} number={'x4'} measureRef={ref}>
          <CurveAmplitudeChart value={unusualnessValue} height={cardHeight} width={width} />
        </Card>
      </div>
    </div>
  )
}

export default App
