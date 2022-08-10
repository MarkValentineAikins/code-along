//This component branch to import image from assets folder
//to be use by the Image function to display in image in the browser

import logo from "../assets/image/logo.png";

export const Image = () => {

    return <img src={logo} alt=""/>;

}
