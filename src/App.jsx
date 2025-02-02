import { useState } from 'react'
import './App.css'
import WelcomePage from './Components/WelcomePage'
import ReportCrimeForm from './Pages/ReportCrimeForm'
import Dashboard from './Pages/Dashboard'
import ReportDetails from './Pages/ReportDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
         
        <Route path="/report" element={<ReportCrimeForm/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/report/:id" element={<ReportDetails/>}/>
      </Routes>
    </Router>
     

       
    </>
  )
}

export default App
