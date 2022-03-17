import data from '../data.json'
import search from '../images/search.png'
// import {Link} from 'react-router-dom'

const Catalog = (props) => {

  setTimeout(() => {
    document.getElementById('qty').innerText = data.length;
  }, 500);

  return (

    <>
      <div className="company-info">
        <div className="container">
          <h1>Shoe Company Name</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur similique minus eligendi. Nam odio sunt fuga explicabo veritatis neque! Repellat</p>

          <img src={search} alt="lens" id="lens" />
          <input type="text" id='search-input' placeholder='Search Shoes' />
          <button id="btn">Search</button>
        </div>
      </div>

      <h3 id="prod-qty"><span id="qty">0</span> Products</h3>
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
