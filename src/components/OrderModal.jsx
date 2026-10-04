import { useState } from 'react'
import './OrderModal.css'

function OrderModal({ product, onClose }) {

  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [location, setLocation] = useState('')
const [phone, setPhone] = useState('')
const [error, setError] = useState('')
  const total = product.price * quantity

  const createMessage = () => {
    return `Bonjour 👋

Je souhaite passer une commande.

Référence : ${product.reference}
Prix unitaire : ${product.price} DT
Quantité : ${quantity}
Total : ${total} DT

Nom : ${name}
Téléphone : ${phone}

Ville : ${location}`
  }

  const handleWhatsApp = () => {

 if (!name || !phone || !location) {
    setError('Veuillez remplir tous les champs.')
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
              value={quantity}
              onChange={(e) =>
                setQuantity(
                  Math.max(1, Number(e.target.value))
                )
              }
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

              <strong>
                {product.price} DT
              </strong>
            </div>

            <div>
              <span>Total</span>

              <strong>
                {total} DT
              </strong>
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