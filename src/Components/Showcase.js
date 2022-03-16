import React from 'react'
import search from '../images/search.png'

const Showcase = () => {
    return (
        <>
            <div className="company-info">
                <div className="container">
                    <h1>Shoe Company Name</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur similique minus eligendi. Nam odio sunt fuga explicabo veritatis neque! Repellat</p>

                    <img src={search} alt="lens" id="lens"/>
                    <input type="text" id='search-input' placeholder='Search Shoes' />
                    <button id="btn">Search</button>
                </div>

            </div>
        </>
    )
}

export default Showcase
