import React from 'react'

const LablePrice = ({lable,price}) => {
  return (
    <div style={{display: 'flex',gap:"1rem"}}>
    

      <div>{lable}</div>
      <div> ₹ {price}</div>

    </div>
  )
}

export default LablePrice