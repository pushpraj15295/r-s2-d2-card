import React from 'react'
import LablePrice from './LablePrice'
import Quantity from './Quantity'

const CartItem = ({id,label, price,qty,handleChangeQty}) => {



  return (
    <div style={{display:"flex", gap:"1rem",padding:"2rem",justifyContent:"center",alignItems:"center",border:"1px solid",margin:"0.5rem"}}>

          <LablePrice lable={label} price={price}/>
          <Quantity  qty={qty} incrementCount={()=>handleChangeQty(id,1)}  decrementCount={()=>handleChangeQty(id,-1)}/>
    </div>
  )
}

export default CartItem