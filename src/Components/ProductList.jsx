
import Product from './Product';
//import React, {useState} from "react";
//import axios from "axios";
import useAxios from '../Hooks/useAxios';
import Spinner from './Spinner';



function ProductList() {
// const [products, setProducts] = useState ([]);
const {data, isloading, error} = useAxios("https://api.escuelajs.co/api/v1/products");

  /* useEffect(() =>{
    const getProducts = async()=> {
      const results = await axios.get("https://api.escuelajs.co/api/v1/products");
      setProducts(results.data);
    };
    getProducts();
  }, []); */
  
  if (isloading) return <Spinner/>;
  if (error) return<p>{error}</p>;
  return (
    <div className="flex justify-center flex-wrap gap-4 items-centers mt-6">{
        data.map((data)=>(
          <Product product = {data}/>
        ))}
      
    </div>
  )
}

export default ProductList;
