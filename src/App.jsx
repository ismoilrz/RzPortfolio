import './App.css'
import Aside from './components/aside'
import MenuBar from './components/menuBar'

function App() {

  return (
    <>
     <div className="wrap container">
        <Aside />
        <div className="content">
          <header>
            <MenuBar />
          </header>
        </div>
     </div>
    </>
  )
}

export default App
