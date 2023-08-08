import {createContext} from 'react'

const CartContext = createContext({
  // Dummy default data
  items:[],
  totalAmount:0,
  addItem:(item)=>{},
  removeItem:(id)=>{}
})

export default CartContext;