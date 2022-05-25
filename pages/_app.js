import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  // setCart({})
  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      } else {

      }

    } catch (e) {
      console.log(e)
      localStorage.clear()
    }

  }, [])
  

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))
    localStorage.setItem("subTotal", JSON.stringify(subTotal))
    
    let subt=0;
    let keys= Object.keys(myCart)
    for( let i=0;i<keys.length;i++){
      subt += myCart[keys[i]].price * myCart[keys[i]].qty
    }
    setSubTotal(subt)

  }
  const clearCart = (myCart) => {
    setCart({})
    saveCart({})
  }
  const addToCart = (itemCode, qty, price, name, size, variant,imgUrl) => {
    let myCart = cart
    // console.log(itemCode, qty, price, name, size, variant,imgUrl ,"are the added data")
    if (itemCode in myCart) {
      myCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else {
      myCart[itemCode] = { itemCode,qty: 1, price, name, size, variant,imgUrl }
    }
    setCart(myCart)
    saveCart(myCart)
  }
  const removeFromCart = (itemCode, qty) => {
    let myCart = cart
    if (itemCode in cart) {
      myCart[itemCode].qty = cart[itemCode].qty - 1
    }

    if (myCart[itemCode]["qty"] <= 0) {

      delete myCart[itemCode]
    }
    setCart(myCart)
    saveCart(myCart)
  }
  return <>
    <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}  {...pageProps} />
    <Footer />
  </>
}

export default MyApp
