import React from 'react'
import download from "../assets/image/download.png"


function Product({product}) {
  return (
   
<div className=" w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className="snap-center flex justify-center items-center rounded-lg"><a href="#">
        <img className="p-4 " src={product.images[0]} alt ="product"/>
    </a></div>
<div className="px-5 pb-5 items-center justify-center m-4 ">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-2">
            {product.description}
        </div>
        <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}</span>
            <a href="#" className="text-white bg-gray-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-600">Add to cart</a>
        </div>
    </div>
</div>
 
  );
}

export default Product;
