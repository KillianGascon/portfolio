// import Nav from "./components/public/Nav"
import Work from "./pages/Work"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>

          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/blog" element={<Blog/>}/>

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
