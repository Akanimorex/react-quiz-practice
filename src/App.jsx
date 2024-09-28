import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quiz from './Quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-white rounded-lg shadow-lg p-8 max-w-xl w-full mx-auto border'>
        <h1 className='text-black'>Quiz</h1>
        <Quiz />
      </div>
    </>
  )
}

export default App