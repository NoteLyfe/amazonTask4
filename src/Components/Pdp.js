import React from 'react'
import data from '../data.json'
import star from '../images/Star.png'

const Pdp = () => {

  setTimeout(() => {
    let qty = document.getElementById('qty-change-input');
    let add = document.getElementById('btn-inc');
    let sub = document.getElementById('btn-dec');
    let addToCart = document.getElementById('btn-add');

    let count = 0;

    add.addEventListener('click', function () {
      count += 1;
      qty.innerText = count;
    })

    sub.addEventListener('click', function () {
      if(count>0){
        count -= 1
        qty.innerText = count;
      }  
    })

    addToCart.addEventListener('click', function () {
      if(count === 0 ){
        alert("Please select valid Quantity..")
      }
      else{
        alert(count + " Product added to cart Successfully")
      }  
    })

  }, 500);

  return (
    <div className="pdp">
      <div className="pdp-img">

      </div>

      <div className="pdp-info">

        <div className="name-rating">
          <h3 className="b-name">Reebok Sports</h3>
          <div className="rating">
            <span><img src={star} alt="" /></span>
            <span>5.0</span>
          </div>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestias ut veniam quas quaerat, cum nihil tenetur facilis laborum! Deleniti eaque harum vitae, explicabo illo nostrum ex dolores. Nulla, facere.</p>

        <h2 className="price pdp-price">₹<span className="price_tag">2000.00</span></h2>

        <small className='pdp-delivery'>Delivery by: <span className="delivery ">today</span></small>

        <h6>Qty</h6>
        <div className="pdp-qty-control">
          <button id="btn-dec" className="btn-qty">-</button>
          <div id="qty-change-input">0</div>
          <button id="btn-inc" className="btn-qty">+</button>
        </div>

        <button id="btn-add">Add to Cart</button>

      </div>

    </div>
  )
}

export default Pdp
