'use client'
import ProductCreate from "@/components/ProductCreate"
import ProductList from "@/components/ProductList"
import { useState } from "react"

export const App = () => {

    const [product,setProduct]=useState([])

    const createProduct=(newProduct)=>{
        setProduct([...product,newProduct])
    }
    console.log(product);

    const deleteProduct=(productId)=>{

        setProduct([...product.filter((product)=>product.id !== productId)])
    }
  return (
    <div>
        <ProductCreate onCreate={createProduct}/>
        <ProductList  onRemoveProduct={deleteProduct} products={product}/>
    </div>
  )
}