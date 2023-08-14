import React from 'react'
import zmall from './logos/imagez.png';
import deliver from './logos/imagedel.png';
import debol from './logos/imaged.png';


function Table() {
  return (
    <div className='comp_cont'>


      <div className="grid-item"><img src={zmall} alt="" />Zmall</div>
      <div className="grid-item">Delivers variety of items from different supermarkets
Ability to choose supermarkets and branches of the supermarkets
</div>
      <div className="grid-item">Limited products
Long delivery times</div>
      <div className="grid-item"><img src={deliver} alt="" />Deliver Addis</div>
      <div className="grid-item">Has items that are not found on other apps
Has items for special occasions </div>
      <div className="grid-item">Long deliver time
Does not include a search bar
Does not display essential grocery items
Difficulty finding products because of there is no search bar or category to choose from</div>
      <div className="grid-item"><img src={debol} alt="" /></div>
      <div className="grid-item">Has multiple categories
Displays products images and prices clearly
</div>
      <div className="grid-item">Only has products from one supermarket
Limited products
Inaccurate pricing for items
Inconvienent sign up system</div>
      
    </div>
  )
}

export default Table