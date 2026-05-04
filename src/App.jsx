import { useState } from 'react'
import HeroSection from './components/HeroSection';
import SignUpForm from './components/SignUpForm';
import Confirmation from './components/Confirmation';


function App() {
  const [view, setView] = useState('landing')

  return (
    <div>
      {view === 'landing' && <HeroSection onSignUp={ () => setView('form')} />}
      {view === 'form' && <SignUpForm onSuccess={ () => setView('confirmation')} onBack={ () => setView('landing')} />}
      {view === 'confirmation' && <Confirmation onHome={ () => setView('landing')} />}
    </div>
  )
}

export default App;

