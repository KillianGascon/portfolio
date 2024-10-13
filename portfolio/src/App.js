// import Nav from "./components/public/Nav"
import Work from "./pages/Work"
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom"

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>

          <Route path="/home" element={<Home/>}/>
          <Route path="/work" element={<Work/>}/>

          {/* <Route path="*" element={<NotFound/>}/> */}

        </Routes>
      </BrowserRouter>
      {/* <div className="bg-tranparent">
        <Nav/>
      </div>
      <div className="">
        <Body/>
      </div> */}
    </div>
  )
}

export default App
