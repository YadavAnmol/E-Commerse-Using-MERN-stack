import { styled } from "styled-components"
import {popularProducts} from "../data"
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios"

const Container=styled.div`
    padding: 30px;
    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat,filters,sort} ) => {
  const[products,setProducts]=useState([])
  const[filtered,setFiltered]=useState([])

  // For getting the data from the backend
  useEffect(()=>{
    const getProducts=async()=>{
      try{
        const res=await axios.get(cat?`http://localhost:5000/user/api/product?category=${cat}`:"http://localhost:5000/user/api/product")
        setProducts(res.data);
        console.log(res)
      }
      catch(err){

      }
      
    } 
    getProducts()
  },[cat])


  //For filtering the items from the category
  useEffect(()=>{
    cat && setFiltered(
    products.filter((item)=>
       Object.entries(filters).every(([key,value])=>
       item[key].includes(value))))
  },[products,cat,filters])


//For sorting the items
useEffect(()=>{
  if((sort==="newest")){
    setFiltered((prev)=>
      [...prev].sort((a,b)=>a.createdAt-b.createdAt)
    )
  }
  else if((sort==="asc")){
    setFiltered((prev)=>
      [...prev].sort((a,b)=>a.price-b.price)
    )
  }
  else{
    setFiltered((prev)=>
      [...prev].sort((a,b)=>b.price-a.price)
    )
  }
},[sort])

  return (
    <Container>
        {cat
          ?filtered.map((item)=>(<Product item={item} key={item.id}/>))
          :products.slice(0,8).map((item)=>(<Product item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Products