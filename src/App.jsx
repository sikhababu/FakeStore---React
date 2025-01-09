import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ProductCard from './Components/ProductCard'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [Products, setProducts] = useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {

      setProducts(res.data)

    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <Header />
     
     <div className="container my-4">

      <div className="row g-4">

        {

          Products.map((product) => (

            <div className="col-md-3 g-4 d-flex">

              <ProductCard item={product} />

            </div>

          ))

        }


      </div>
      </div>

      <Footer />

    </>
  )
}

export default App
