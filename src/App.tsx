import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useScreenSize } from './ScreenSize'

function App() {
  const [count, setCount] = useState(0)
  const screenSize = useScreenSize();

  const getBackgroundColor = (screenSize: string) => {
    switch (screenSize) {
      case 'xs':
        return 'lightcoral';
      case 'sm':
        return 'lightgreen';
      case 'md':
        return 'lightblue';
      case 'lg':
        return 'lightyellow';
      case 'xl':
        return 'lightgray';
      default:
        return 'white';
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        <div style={{
          minHeight: '100px',
          backgroundColor: getBackgroundColor(screenSize),
        }}></div>

      </div>
    </>
  )
}

export default App
