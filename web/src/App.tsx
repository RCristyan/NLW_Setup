import { useState } from 'react'
import './App.css'
import { Habit } from './components/habit/Habit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Habit completed={3}/>
      <Habit completed={6}/>
      <Habit completed={9}/>
    </div>
  )
}

export default App
