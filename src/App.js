import React, { useEffect } from 'react'
import './App.css'
import { IntroSection, DeepeningSection, MenuMobile, Footer } from './components/index'
import intro from './data/fixed_content.json'

function App() {
  useEffect(() => {
    document.title = intro.page_title
  }, [])
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
