import { useState } from 'react'
import './OrderModal.css'

function OrderModal({ product, onClose }) {

  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState("1")
  const [location, setLocation] = useState('')
const [phone, setPhone] = useState('')
const [error, setError] = useState('')


const deliveryFee = 8
const subtotal = product.price * (Number(quantity) || 0)
const total = subtotal + deliveryFee


  const createMessage = () => {
    return `Bonjour 👋

Je souhaite passer une commande.

Référence : ${product.reference}
Prix unitaire : ${product.price} DT
Quantité : ${quantity}
Sous-total : ${subtotal} DT
Frais de livraison : ${deliveryFee} DT
Total à payer : ${total} DT

Nom : ${name}
Téléphone : ${phone}

Ville : ${location}`
  }

  const handleWhatsApp = () => {

if (!name || !phone || !location || !quantity || Number(quantity) < 1) {
  alert('Veuillez remplir tous les champs correctement.')
  return
}
  setError('')

    const phoneNumber = '21652116668'

    const message = createMessage()

    const whatsappUrl =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="modal-overlay">

      <div className="order-modal">

        <button
          className="close-modal"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="modal-heading">

          <p>PASSER UNE COMMANDE</p>

          <h2>
            Votre <span>commande</span>
          </h2>

        </div>

        <div className="order-form">

          {/* REFERENCE */}

          <div className="form-group">

            <label>Référence</label>

            <input
              type="text"
              value={product.reference}
              readOnly
            />

          </div>


          {/* NAME */}

          <div className="form-group">

            <label>Nom</label>

            <input
              type="text"
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

          </div>

    {/* tel */}
            <div className="form-group">
    <label>Numéro de téléphone</label>

    <input
        type="tel"
        placeholder="Ex: 20 123 456"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
    />
    </div>


          {/* QUANTITY */}

          <div className="form-group">

            <label>Quantité</label>

            <input
            type="number"
            min="1"
            placeholder="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          </div>


          {/* LOCATION */}

          <div className="form-group">

            <label>Ville / Localisation</label>

            <input
              type="text"
              placeholder="Ex: Tunis"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

          </div>

          
          {error && (
  <p className="form-error">
    {error}
  </p>
)}

          {/* SUMMARY */}

          <div className="order-summary">
            <div>
              <span>Prix unitaire</span>
              <strong>{product.price} DT</strong>
            </div>

            <div>
              <span>Quantité</span>
              <strong>{Number(quantity) || 0}</strong>
            </div>

            <div>
              <span>Sous-total</span>
              <strong>{subtotal} DT</strong>
            </div>

            <div>
              <span>Frais de livraison</span>
              <strong>{deliveryFee} DT</strong>
            </div>

            <div className="total-row">
              <span>Total à payer</span>
              <strong>{total} DT</strong>
            </div>
          </div>


          {/* WHATSAPP */}

          <div className="order-buttons">

            <button
              className="whatsapp-btn"
              onClick={handleWhatsApp}
            >
              Commander via WhatsApp
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default OrderModal