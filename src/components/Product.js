import React from 'react';
import Data from './Data.json';
import { useNavigate } from 'react-router-dom';
import './Product.css'; // Importing the CSS file

export default function Product(props) {
  const navigate = useNavigate();

  const addToCartBtn = (index) => {
    let product = Data[index];
    props.purchaseItems(product);
    alert(product.title + ' Item has been added to cart');
    if (window.confirm('Proceed to MyCart?')) navigate("/MyCart");
  };

  return (
    <div className="container mx-auto">
      <div className="row">
        {Data.map((d, index) => (
          <div className="col-sm-4 mt-3 product-card-wrapper" key={index}>
            <div className="product-card">
              <img src={d.url} alt="ArtPhoto" />
              <div className="title">{d.title}</div>
              <div className="price">Rs. {d.price}/-</div>
              <button className="butn" onClick={() => addToCartBtn(index)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
