import './App.sass'
import HomePage from './components/pages/HomePage'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faMoon, fas } from '@fortawesome/free-solid-svg-icons'

function App() {
  library.add(faSun, faMoon, fas)
  return (
    <div className="App">
      <HomePage />
    </div>
  )
}

export default App
