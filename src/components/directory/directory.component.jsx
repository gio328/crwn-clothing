import React, {Component} from 'react';
import MenuItem from '../menu-item/menu-item.component';
//import Header from '../header/header.component';
import './directory.scss';

class Directory extends Component {
    constructor(){
       super();
        this.state = {
         sections: [
            {
                id: 1,  
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                linkUrl: 'shop/hats'
              },
              {
                id: 2,
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                linkUrl: 'shop/jackets'
              },
              {
                id: 3,
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                linkUrl: 'shop/sneakers'
              },
              {
                id: 4,
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                linkUrl: 'shop/womens'
              },
              {
                id: 5,
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                linkUrl: 'shop/mens'
              }
         ]
        }    
    }

render(){
  
    return (
      <div className='directory-menu'>
      {this.state.sections.map( ({id, title, ...otherSectionProps}) => 
      <MenuItem key={id} title={title} {...otherSectionProps}/>
      )}
      </div>
      
    );
}
}



export default Directory;