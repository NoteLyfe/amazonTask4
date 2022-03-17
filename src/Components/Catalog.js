import data from '../data.json'

const Catalog = (props) => {

  return (

    <>
      <h3 id="prod-qty"><span id="qty">5</span> Products</h3>

      <div id="catalog">

        {data.map(item => {
          return (
            <div className="box" key={item.id}>
              <div className="image">
                <img src={item.image} alt="image.jpg" />
              </div>
              
              <div className="p_info">
                <div className="brand_star">
                  <div className="b_name">
                    <h3 className="brand">{item.name}</h3>
                  </div>
                  <div className="rating">
                    <span><img src={item.star} alt="" /></span>
                    <span className="random_rating">{item.rating}</span>
                  </div>
                </div>
                <h2 className="price">₹<span className="price_tag">{item.price}</span></h2>
                <small>Delivery by: <span className="delivery">{item.date}</span></small>
              </div>
            </div>
          )
        })}

      </div>

    </>
  )
}

export default Catalog
