import { useState } from 'react'

import products from '../data/products'

import ProductCard from './ProductCard'
import OrderModal from './OrderModal'

import './Products.css'


function Products() {

  const [search, setSearch] = useState('')

  const [selectedProduct, setSelectedProduct] = useState(null)

  const [category, setCategory] = useState('all')

  /*
    SEARCH

    Exemple :

    ACC-003
    ou
    003

    les deux vont trouver ACC-003
  */

 const filteredProducts = products.filter((product) => {

  const matchesCategory =
    category === 'all' || product.category === category

  const matchesSearch =
    product.reference
      .toLowerCase()
      .includes(search.toLowerCase())

  return matchesCategory && matchesSearch
})


  return (

    <section className="products" id="collections">


      {/* =========================
          SECTION HEADING
      ========================== */}

      <div className="products-heading">

        <p>NOTRE COLLECTION</p>

        <h2>
          Des détails qui
          <span> vous ressemblent.</span>
        </h2>

        <div className="heading-line"></div>

        <p className="description">
          Découvrez notre sélection d'accessoires élégants,
          pensés pour accompagner chaque moment.
        </p>

      </div>


        <div className="product-filters">

  <button
    className={category === 'all' ? 'active' : ''}
    onClick={() => setCategory('all')}
  >
    All
  </button>

  <button
    className={category === 'femme' ? 'active' : ''}
    onClick={() => setCategory('femme')}
  >
    Accessoires Femme
  </button>

  <button
    className={category === 'homme' ? 'active' : ''}
    onClick={() => setCategory('homme')}
  >
    Accessoires Homme
  </button>

  <button
  className={`category-box ${category === 'cadeaux' ? 'active' : ''}`}
  onClick={() => setCategory('cadeaux')}
>
  <span>Cadeaux & Boxes</span>
</button>

</div>



      {/* =========================
          SEARCH
      ========================== */}

      <div className="product-search">

        <input
          type="text"
          placeholder="Rechercher par référence..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <span>⌕</span>

      </div>



      {/* =========================
          PRODUCTS
      ========================== */}

      <div className="products-container">

        {filteredProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
            onOrder={setSelectedProduct}
          />

        ))}

      </div>



      {/* =========================
          NO PRODUCTS
      ========================== */}

      {filteredProducts.length === 0 && (

        <p className="no-products">
          Aucun produit trouvé.
        </p>

      )}



      {/* =========================
          ORDER MODAL
      ========================== */}

      {selectedProduct && (

        <OrderModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />

      )}

    </section>

  )
}


export default Products