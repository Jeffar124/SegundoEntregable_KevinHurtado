
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'

import Home from './Pages/Home/Home'
import Characters from './Pages/Characters/Characters'
import Error from './Pages/Error/Error'
import Details from './Pages/Details/Details'

function App() {

  return (
    <>
      <Header />
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/characters/:id' element={<Details />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
