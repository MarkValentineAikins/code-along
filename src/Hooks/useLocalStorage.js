
//import { Result } from 'postcss';
//import React from 'react'
import {useState, useEffect} from "react"

function useLocalStorage(key, initailvalue) {
  const [data, setData] = useState(() => {
    const result = localStorage.getItem(key);
    if (!result) return initailvalue;
    return JSON.parse(result);
  });
const setValue = (value) => {
    const newData = [value, ...data];
    setData(newData);
}
useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(data));
}, [data, key]);

return{data, setValue};

}

export default useLocalStorage;