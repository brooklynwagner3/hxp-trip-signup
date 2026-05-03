import { useState } from 'react'

function App() {
  const [view, setView] = useState('landing')

  return (
    <div>
      <h1>HXP Trip Sign-Up</h1>
      <p>Current view: {view}</p>
    </div>
  )
}

export default App