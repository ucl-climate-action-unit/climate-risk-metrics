import './App.css'
import { BarChart, RotationChart, CurveAmplitudeChart } from './components/charts/index.js'
import { useControls } from 'leva'

function App() {
  const { imbalanceValue, speedValue, unusualnessValue } = useControls({
    imbalanceValue: 1.07,
    speedValue: 0.57,
    unusualnessValue: 4,
  })

  const cardHeight = 440
  const cardWidth = window.innerWidth / 3

  return (
    <div className="App">
      <RotationChart value={imbalanceValue} height={cardHeight} width={cardWidth} />
      <BarChart value={speedValue} height={cardHeight} width={cardWidth} />
      <CurveAmplitudeChart value={unusualnessValue} height={cardHeight} width={cardWidth} />
    </div>
  )
}

export default App
