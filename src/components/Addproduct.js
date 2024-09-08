import './Addproduct.css';
import Data from './Data.json';
import { useNavigate } from 'react-router-dom';

export default function Product(props) {
  const navigate = useNavigate();

  const addToCartBtn = (index) => {
    let product = Data[index];
    props.purchaseItems(product);
    alert(product.title + ' Item has been added to cart');
    if (window.confirm('Proceed to MyCart??')) {
      navigate("/MyCart");
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        {Data.map((d, index) => (
          <div className='col-sm-4' key={index}>
            <img src={d.url} alt="ArtPhoto" className='product-image' />
            <p>{d.title}</p>
            <p className='price'>Rs.{d.price}/-</p>
            <button className='butn' onClick={() => addToCartBtn(index)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
