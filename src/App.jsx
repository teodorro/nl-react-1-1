// import { useState } from 'react'
import './css/main.css'
import { ShopCompFunc } from './components/ShopCompFunc'

function App() {
  // return ShopCompFunc();
  // const [item] = useState(0)

  return (
    <>
      <div className="container">
        <div className="background-element">
        </div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <ShopCompFunc />
        </div>
      </div>
    </>
  )
}

export default App
