import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductPage from './components/ProductPage'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Footer from './components/Footer'
import './index.css'
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

  <Route
    path="/"
    element={
      <>
        <Hero />
        <Products />
      </>
    }
  />

  <Route
    path="/product/:reference"
    element={<ProductPage />}
  />

</Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App