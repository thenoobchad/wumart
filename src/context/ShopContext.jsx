import React, { createContext, useEffect, useState } from 'react'

import axios from "axios"
export const ShopContext = createContext(null)

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({})
  const url = "http://localhost:5000"
  const [token, setToken] = useState("")
  const [all_products, setAllProducts] = useState([])

  const addToCart = async (itemId) => { 
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({...prev, [itemId]: 1}))
    } else {
      setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    if (token) {
      await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } })

    }
  }

  // useEffect(() => {
  //   console.log(cartItems)
  // },[cartItems])

  const removeFromCart = async (itemId) => { 
      setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
     if (token) {
      await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } })
      
    }
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find((product) => product._id === item)
        totalAmount += itemInfo.price * cartItems[item]
      }
    }
    return totalAmount
  }
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      totalItems += cartItems[item];
    }

    return totalItems;
  }

  const fetchProductList = async () => {
    const res = await axios.get(`${url}/api/product/list`)

    setAllProducts(res.data.data)
    
  }

  //get cart state
  const loadCartData = async (token) => { 
    const res = await axios.post(`${url}/api/cart/get`, {}, { headers: { token } })
    
    setCartItems(res.data.cartData)
   
  }
  
  useEffect(() => {
    async function loadData() {
      await fetchProductList();

      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"))
        await loadCartData(localStorage.getItem("token"))
      }
    }

    loadData()

  }, [])

  const contextValue = { all_products, addToCart, removeFromCart, cartItems, getTotalCartAmount, url, token, setToken, getTotalCartItems }
  
  return (
    <ShopContext.Provider value={contextValue}>
          {props.children}
   </ShopContext.Provider>
  )
}
