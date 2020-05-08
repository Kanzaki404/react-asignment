import React from 'react'

const FavItems = ({favData}) => {
    console.log(favData)
    const elements = favData.map(e => (
        <div className="card"  key={e.name}>
            <div className="container">
                <div>Name: {e.name}</div>
                <div>Age: {e.birth_year}</div>
                <button className="favBtn" >Remove from Favorites</button>
            </div>
        </div>
    ))
    
    return (
        <div className="listContainer">        
            <div className ="listItem">
                <div className= "Item">
                    {elements}
                </div>
            </div>
        </div>
        
      );
}

export default FavItems