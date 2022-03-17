import React from 'react'
import data from '../data.json'
import star from '../images/Star.png'

const Pdp = () => {
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
          <button className="btn-neg btn-qty">-</button>
          <input type="text" id="qty-change-input"/>
          <button className="btn-pos btn-qty">+</button>
        </div>

        <button className="btn-add">Add to Cart</button>

      </div>

    </div>
  )
}

export default Pdp
