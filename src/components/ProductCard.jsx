function ProductCard({ product, onOrder }) {
  return (
    <div className="product-card">

      <div className="product-image">
        <img
          src={product.image}
          alt={product.reference}
        />

          {!product.stock && (
    <span className="stock-badge">
      Hors stock
    </span>
  )}


      </div>

      <div className="product-info">

        <span className="product-reference">
          Réf. {product.reference}
        </span>

        <p className="product-price">
          {product.price} DT
        </p>

      {product.stock ? (
  <button
    className="product-order-btn"
    onClick={() => onOrder(product)}
  >
    Commander
    <span>→</span>
  </button>
) : (
  <button
    className="product-order-btn out-of-stock"
    disabled
  >
    Hors stock
  </button>
)}


      </div>

    </div>
  )
}

export default ProductCard