import React from 'react'
import {useParams} from "react-router-dom";
import useAxios from '../Hooks/useAxios';


function ProductDetails() {
  const {productId} = useParams();
  const {data} = useAxios("https://api.escuelajs.co/api/v1/products/1");
  return (
    <div className='text-5xl rounded-md bg-gray-200 p-4 min-h-screen flex justify-center items-center'>
      <div className='max-w-5xl bg-white flex '>
        <div className='p-2'>
          <img src={data?.category.image} alt=""/>
          <div className='flex'>
            {data?.images.map((image, index) => (
              <img key = {index} src={image} alt="" className='w-40 flex-1 p-2'/>
            ))}
            
          </div>
        </div>
        <div className='p-10'>
          <h1>read</h1>
        </div>

      </div>
      
      </div>
  )
}

export default ProductDetails;
