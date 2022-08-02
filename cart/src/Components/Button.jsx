import React from "react";

const Button = ({ onClick, children, disabled }) => {
  return (
    <button style={{
         padding:"1rem",
         border:0,
         borderWidth:0,
         FontSize:"bold",backgroundColor:"tomato"
         ,color:"white"

    }} disabled={disabled} onClick={onClick}>
      
      {children}
    </button>
  );
};

export default Button;