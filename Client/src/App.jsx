import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Home2 from './pages/home2/Home2'
import  WhoWeAre2  from './pages/whoweare2/WhoWeAre2'
import { Products } from "./pages/products/Products"
import Services2 from "./pages/services2/Services2"
import { Careers } from "./pages/careers/Careers"
import Contact2 from './pages/contact2/Contact2'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home2 />} />
        <Route path='/whoweare' element={<WhoWeAre2 />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services' element={<Services2 />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
