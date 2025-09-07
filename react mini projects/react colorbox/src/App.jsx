import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rcolorboxrow from './Rcolorboxrow';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Rcolorboxrow/>
        <Rcolorboxrow/>
        <Rcolorboxrow/>
        <Rcolorboxrow/>
        <Rcolorboxrow/>
    </>
  )
}

export default App
