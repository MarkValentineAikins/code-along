import React from "react";
import { Link } from "react-router-dom";

// import watch from "../assets/img/watch.jpg"

function Product({ item }) {
  return (
    <div className="w-full max-w-sm  bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="h-72 overflow-hidden">
      <a href="#">
        <img
          className="p-8 rounded-t-lg"
          src={item.category.image}
          alt="product image"
        />
      </a>
      </div>
      
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {item.title}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">{item.description}
        {Product.description.subtring(0,150)}
        </div>

        
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${item.price}
          </span>
          <Link
            to={`/product-list/${item.id}`}
            className="text-white bg-blue-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Product;
