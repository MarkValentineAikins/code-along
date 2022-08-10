//These functions display buttons in the browsers

/* export const Button1 = () => {

    return <button className="bg-gray-200 px-5 py-2 m-1 text-white rounded-full">Register</button>;

};

export const Button2 = () => {

    return <button className="bg-orange-200 px-5 py-2  m-1 text-white rounded-full">Login</button>;



};

export const Button3 = () => {

    return <button className="bg-red-200 px-5 py-2  m-1 text-white rounded-full">Add Cart</button>;
};

export const Button4 = () => {

    return <button className="bg-blue-200 px-5 py-2  m-1 text-white rounded-full">Sign out</button>;
}; */

function Button({label}){
    return <Button className ="border-2 border-orange-500 py-2 px-5 rounded-full text-orange-100 hover:bg-slate-100 hover:text-white">{label}</Button>;

}
export default Button;