import './Mycart.css'; // Import the CSS
import { useEffect, useState } from "react";

export default function MyCart(props) {
  const items = props.purchaseItems;
  const [amount, setAmount] = useState(0);

  // Function to calculate total amount
  const makeTotal = () => {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
      sum += items[i].price;
    }
    setAmount(sum);
  };

  useEffect(() => {
    makeTotal();
  }, [items]); // Dependency on items to recalculate when items change

  return (
    <div className="content">
      <div className="cart">
        <div className="row">
          <div className="col-sm-7 mt-5">
            <h3>Shopping Cart</h3>
            <div className="card">
              {items.length === 0 ? (
                <p>No items in your cart</p>
              ) : (
                items.map((data) => (
                  <div className="cart-item mt-3" key={data.id}>
                    <img src={data.url} alt="photo" />
                    <div className="item-details">
                      <p className="item-title">{data.title}</p>
                      <p>Rs. {data.price}/-</p>
                      <p>{data.description}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="col-sm-5 mt-5">
            <h3>Your Order</h3>
            <table className="table table-light">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {items.map((data, index) => (
                  <tr key={index}>
                    <td>{data.title}</td>
                    <td>Rs. {data.price}/-</td>
                  </tr>
                ))}
                <tr className="total-row">
                  <td>Total:</td>
                  <td>Rs. {amount}/-</td>
                </tr>
              </tbody>
            </table>
            <button className="cartbtn">Place the Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}
