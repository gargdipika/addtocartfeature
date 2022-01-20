import React from 'react'

const CartContext = React.createContext({
  itemList: [],
  addItemInCart: () => {},
  deleteItemInCart: () => {},
})

export default CartContext
