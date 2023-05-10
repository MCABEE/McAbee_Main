import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { WhoWeAre } from './pages/whoweare/WhoWeAre'
import { WhatWeDo } from './pages/whatwedo/WhatWeDo'
import {Products} from "./pages/products/Products"
import {Services} from "./pages/services/Services"
import {Careers} from "./pages/careers/Careers"
import { Contact } from './pages/contact/Contact'


function App() {

  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/whoweare' element={ <WhoWeAre/> } />
        <Route path='/whatwedo' element={ <WhatWeDo/> } />
        <Route path='/products' element={ <Products/> } />
        <Route path='/services' element={ <Services/> } />
        <Route path='/careers' element={ <Careers/> } />
        <Route path='/contact' element={ <Contact/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
