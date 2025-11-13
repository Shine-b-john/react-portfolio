import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
    <nav>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
      <h2>Routing pages</h2>
      
    </>
  )
}

export default App
