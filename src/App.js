// import Header from "./components/Header";
// import Button from "./components/Button";
// import {Image} from "./components/Image";
// import Navbar from "./components/Navbar";
// import Practice from "./components/Practice";
// import Form from "./components/Form"
// import Spinner from "./components/Spinner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskManager from "./Pages/TaskManager";
import ProductList from "./Pages/ProductList";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import NotFound from "./Pages/NotFound";
import ProductDetails from "./Pages/ProductDetails";
//import Product from "./Components/Product";
//import PasswordReset from "./Components/PasswordReset";


function App() {
  return (
    <div>
      
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<ProductList />} />
        <Route path="/Product/:productId" element={<ProductDetails />} />
        <Route path="/task-manager" element={<TaskManager />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
