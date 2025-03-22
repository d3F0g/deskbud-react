import { Route, Routes } from 'react-router'
import './App.css'
import Landing from './pages/Landing'
import Experiences from './pages/Experiences'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/experiences' element={<Experiences/>}/>
    </Routes>
  )
}

export default App
