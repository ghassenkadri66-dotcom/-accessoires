import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/products'
import OrderModal from './OrderModal'
import './ProductPage.css'

function ProductPage() {

  const { reference } = useParams()
  const [selectedProduct, setSelectedProduct] = useState(null)

  const product = products.find(
    (item) =>
      item.reference.toLowerCase() === reference.toLowerCase()
  )

  if (!product) {
    return (
      <section className="product-not-found">
        <h2>Produit introuvable</h2>

        <Link to="/">
          Retour à la collection
        </Link>
      </section>
    )
  }

  return (
    <section className="single-product">

      <div className="single-product-container">

        <div className="single-product-image">
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

        <div className="single-product-info">

          <span className="single-product-reference">
            Réf. {product.reference}
          </span>

          <h1>
            Une pièce qui vous ressemble.
          </h1>

          <p className="single-product-price">
            {product.price} DT
          </p>

          <p className="single-product-description">
            Découvrez cet accessoire élégant,
            pensé pour ajouter une touche unique
            à votre style.
          </p>

          {product.stock ? (
            <button
              className="single-product-order"
              onClick={() => setSelectedProduct(product)}
            >
              Commander
              <span>→</span>
            </button>
          ) : (
            <button
              className="single-product-order out-of-stock"
              disabled
            >
              Hors stock
            </button>
          )}

          <Link
            to="/"
            className="back-to-collection"
          >
            ← Retour à la collection
          </Link>

        </div>

      </div>

      {selectedProduct && (
        <OrderModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

    </section>
  )
}

export default ProductPage