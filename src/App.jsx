import './App.css'
import Home from './pages/Home/Home'
import { Link, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <h2>RTK quer</h2>
      <Link to={"/"}>Home</Link>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
