'use client'
import { useState } from "react";
import "../app/globals.css"

const ProductCreate = ({onCreate}) => {
    const [newProduct,setNewProduct]=useState("")

    const createProduct=()=>{
        if(!newProduct)return;

        const request={
            id:crypto.randomUUID(),
            content:newProduct
        }
        onCreate(request)
        setNewProduct("");
        
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
    }

  return (
    <>
    <div className="product-create">
        <form onSubmit={handleSubmit}> 
        <h2>Alışveriş Listesi</h2>
            <input value={newProduct}
            onChange={(e)=>setNewProduct(e.target.value)}
             type="text"
             placeholder="Ürün Giriniz"/>
            <button onClick={createProduct}>Ekle 🧺</button>
            <div>
            </div>
        </form>
    </div>
    </>
  )
}
export default ProductCreate