import React from "react";

const CartNavFooter = ({ title, link, link2, link3, link4, link5, email,title2 }) => {
  return (
    <div className="container-cart-footer" >
      <h3>{title}</h3>
      <ul>
        <li><a href="#">{link}</a></li>

        <li><a href="#">{link2}</a></li>

        <li> <a href="#">{link3}</a></li>

        <li><a href="#">{link4}</a></li>

        <li><a href="#">{link5}</a></li>
      </ul>
      <h3>{title2}</h3>
      <a href="#" style={{color:"white" }}>{email}</a>
    </div>
  );
};

export default CartNavFooter;
