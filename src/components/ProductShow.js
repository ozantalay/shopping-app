const ProductShow = ({product,onRemoveProduct}) => {
    const removeProduct=()=>{
        onRemoveProduct(product.id)
    }
  return (
    <div>
        <div className="product-show">
            <span className="remove-btn">
           {product.content}
            <button onClick={removeProduct}>Sil</button>
            </span>
        </div>
    </div>
  )
}
export default ProductShow