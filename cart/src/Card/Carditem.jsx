import React, { useState } from 'react'
import styles from "./Card.module.css";

const CardItem = ({title,price,setTotal,total}) => {

    const [count, setCount] = useState(0);
    

  return (
    <div>
     <div className={styles.part}>
          <div>{title}</div>
          <div>₹ {price}</div>
          <div>
            <button disabled={count===0} onClick={()=>{setCount(count-1) ; setTotal(total + count*price)}}>-</button>
            <button>{count}</button>
            <button onClick={()=>{setCount(count+1) ; setTotal(total + count*price)}}>+</button>
          </div>
        </div>

    </div>
  )
}

export default CardItem