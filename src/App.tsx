
import Navbar from './components/navbar/Navbar'
import './layout.scss'
import HomePage from './pages/homePage/homePage'

function App() {


  return (
 <>
 <div className="layout">

  <div className="navbar"></div>
  <Navbar/>
 </div>
 <div className="content">
  <HomePage/>
 </div>
 </>
  )
}

export default App
