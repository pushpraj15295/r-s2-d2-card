import React, { useState } from "react";
import styles from "./Card.module.css";
import CardItem from "./Carditem";

const Card = () => {
  const data = [
    { title: "Noodes", price: 30, id: 1 },
    { title: "Biriyani", price: 90, id: 2},
    { title: "Chips", price: 10, id: 3 },
  ];

 const [total,setTotal] = useState(0)

  return (
    <div className={styles.container}>
      {data.map((e) => (
        <CardItem key={e.id} title={e.title} price={e.price} total={total} setTotal={setTotal} id={e.id} />
      ))}
       <br />
       <h2>{total}</h2>
       
    </div>
  );
};

export default Card;
