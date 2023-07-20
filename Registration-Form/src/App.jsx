

import Register from "./Components/Register"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "../src/Components/Home"
function App() {
  

  return (
    <>

     <Router>
     <Routes>
     <Route path="/" element={<Register/>}></Route>
      <Route path="registration126881ag16a" element={<Home/>}></Route>
     </Routes>
     </Router>
    </>
  )
}

export default App
