import './Hero.css'
import heroImage from '../images/heroSection.png'

function Hero() {
  
  return (

    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
      id="home"
    >

      <div className="hero-content">

        <p className="hero-small-title">
          DÉTAILS QUI FONT LA DIFFÉRENCE
        </p>

        <h1>
          Your everyday
          <span> elegance </span>
          starts here.
        </h1>

        <p className="hero-description">
          Discover delicate accessories designed
          to add a special touch to every look.
        </p>
        <a href="#collections" className='hero-btnn'><button className="hero-btn" >
          Découvrir la collection
          <span>→</span>
        </button></a>
        


        <div className="hero-features">

          <div className="feature">
            <span className="feature-icon">♡</span>

            <p>
              Livraison
              <br />
              partout en Tunisie
            </p>
          </div>


          <div className="feature">
            <span className="feature-icon">♧</span>

            <p>
              Paiement
              <br />
              à la livraison
            </p>
          </div>


          <div className="feature">
            <span className="feature-icon">♡</span>

            <p>
              Des accessoires
              <br />
              pour chaque moment
            </p>
          </div>

        </div>

      </div>

    </section>

  )
}

export default Hero