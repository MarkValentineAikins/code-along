
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ProductList from "./Pages/ProductList";
import TaskManager from "./Pages/TaskManager";
import NotFound from "./Pages/NotFound";
import ProductDetails from "./Pages/ProductDetails";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path ="/" element ={<Home/>}/>
      <Route path = "/About" element={<About/>}/>
      <Route path = "/product-list" element={<ProductList/>}/>
      <Route path = "/product-list/:productId" element={<ProductDetails/>}/>
      <Route path = "/Task-Manager" element={<TaskManager/>}/>
      <Route path = "/Contact" element={<Contact/>}/>
      <Route path = "*" element={<NotFound/>}/>
    </Routes>
    
    </BrowserRouter>

  );
}
export default App;
