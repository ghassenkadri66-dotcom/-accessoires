import './Footer.css'

function Footer() {

  const phoneNumber = '21652116668'

  const whatsappUrl = `https://wa.me/${phoneNumber}`

  return (
    <footer className="footer" id='about'>

      <div className="footer-container">

        {/* Logo */}
        <div className="footer-brand">

          <h2>من اجلك </h2>

          <span>ACCESSOIRES</span>

          <p>
            Des détails qui font
            <br />
            toute la différence.
          </p>

        </div>


        {/* Navigation */}
        <div className="footer-column">

          <h3>Navigation</h3>

          <a href="#home">Accueil</a>

          <a href="#collections">Collections</a>

          <a href="#about">À propos</a>


        </div>


        {/* Contact */}
        <div className="footer-column">

          <h3>Contact</h3>

          <p>
            Vous souhaitez passer
            <br />
            une commande ?
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
          >
            Commander via WhatsApp
            <span>→</span>
          </a>

        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 من اجلك ACCESSOIRES — Tous droits réservés.
        </p>

        <p>
          Fait avec ♡
        </p>

      </div>

    </footer>
  )
}

export default Footer