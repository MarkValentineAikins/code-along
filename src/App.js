/* import logo from './logo.svg';
import './App.css'; */

import Header from './Components/Header';
import Button from "./Components/Button";
import {Image} from "./Components/image";
import Nav from "./Components/Nav";
import Navbar from './Components/Navbar';
import NavItem from './Components/NavItem';

//This function bring together all components together for rendering on the page
//Every imported component here has been exported from it component function

function App() {
  return (
    <div>
      <Navbar/> 
       <NavItem/>

      <Button label="Add Cart" />
      <Button label="Login" />
      <Button label="Register" />
      <Button label="Sign Out" />
      <Nav/>
      <Header/>
      <Image/>
    </div>
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
