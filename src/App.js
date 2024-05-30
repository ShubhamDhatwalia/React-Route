
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from "./Pages/layouts";
import Home from "./Pages/home";
import Blog from "./Pages/blogs";
import Contact from "./Pages/contact";


function App(){
  return(

    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='blogs' element={<Blog/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;