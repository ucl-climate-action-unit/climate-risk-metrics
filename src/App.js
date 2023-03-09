import './App.css'
import { IntroSection, DeepeningSection, MenuMobile, Footer } from './components/index'

function App() {
  return (
    <div className="App font-satoshiRegular">
      <MenuMobile />
      <IntroSection />
      <DeepeningSection />
      <Footer />
    </div>
  )
}

export default App
