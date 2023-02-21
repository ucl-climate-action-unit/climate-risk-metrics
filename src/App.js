import './App.css'
import { BarChart, RotationChart, CurveAmplitudeChart } from './charts/index.js'
import { useControls } from 'leva'
import { useMeasure } from 'react-use'
import { Card } from './components/Card'

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
  const container = 1440
  const cardHeight = 240
  const cardWidth = (Math.min(container, width) - 64) / 3 - 2 * 24
  console.log(cardWidth)

  return (
    <div className="App">
      <div className="d-flex justify-content-center gap-24 container" ref={ref}>
        <Card
          color={'#D40078'}
          title={'Imbalance'}
          subtitle={'Earth’s Energy Imbalance (EEI)'}
          number={'1.04'}
          unit={'Watt/m2'}
        >
          <RotationChart value={imbalanceValue} height={cardHeight} width={cardWidth} />
        </Card>
        <Card
          color={'#12817A'}
          title={'Speed'}
          subtitle={'Speed of Temperature Change (STC)'}
          number={'0.57'}
          unit={'°C/Decade'}
        >
          <BarChart value={speedValue} height={cardHeight} width={cardWidth} />
        </Card>
        <Card
          color={'#5002D7'}
          title={'Unusualness'}
          subtitle={'Unusual Weather Index (UWI)'}
          number={'x4'}
          unit={'Out of the Ordinary'}
        >
          <CurveAmplitudeChart value={unusualnessValue} height={cardHeight} width={cardWidth} />
        </Card>
      </div>
    </div>
  )
}

export default App
