import React from 'react'
// import data from './data.JSON'

const Catalog = (props) => {
  return (
    <>
      <h3 id="prod-qty"><span id="qty">5</span> Products</h3>

      <div className="catalog">
        
        <div className="box" >
          <div className="image">
            <img src="./images/image1.png" alt="image.jpg" />
          </div>
          <div className="p_info">
            <div className="brand_star">
              <div className="b_name">
                <h3 className="brand">{props.name}</h3>
              </div>
              <div className="rating">
                <span><img src="./images/Star.png" alt="" /></span>
                <span className="random_rating">3.2</span>
              </div>
            </div>
            <h2 className="price">₹<span className="price_tag">2000.00</span></h2>
            <small>Delivery by: <span className="delivery">Today</span></small>
          </div>
        </div>

      </div>

    </>
  )
}

export default Catalog
