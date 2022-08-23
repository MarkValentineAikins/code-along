
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ProductList from "./Components/ProductList";
import TaskManager from "./Components/TaskManager";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path ="/" element ={<Home/>}/>
      <Route path = "/About" element={<About/>}/>
      <Route path = "/product-list" element={<ProductList/>}/>
      <Route path = "/Task-Manager" element={<TaskManager/>}/>
      <Route path = "/Contact" element={<Contact/>}/>
    </Routes>
    
    </BrowserRouter>

  );
}

/* export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
} */
export default App;
