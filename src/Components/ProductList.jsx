
import Product from './Product';
import React, {useEffect, useState} from "react";
import axios from "axios";


function ProductList() {
const [products, setProducts] = useState ([]);
  useEffect(() =>{
    const getProducts = async()=> {
      const results = await axios.get("https://api.escuelajs.co/api/v1/products");
      setProducts(results.data);
    };
    getProducts();
  }, []);
  
  return (
    <div className="flex justify-center flex-wrap gap-2 items-centers mt-4">{
        products.map((product)=>(
          <Product product = {product}/>
        ))}
    </div>
  )
}

export default ProductList;
