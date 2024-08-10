import ProductShow from "./ProductShow"
import "../app/globals.css"

const ProductList = ({products,onRemoveProduct}) => {
    if (!products || products.length === 0) {
        return null;
      }
    
  return (
    <div className="product-list">
        {
            products && products.map((product)=>(
                <ProductShow  key={product.id} product={product} onRemoveProduct={onRemoveProduct}/>  
            ))
        }
    </div>
  )
}
export default ProductList