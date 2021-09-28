import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop-data.component";


class Shop extends React.Component{
    constructor (){
        super();
        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        return(<div className='shop-page directory'>
            <h1>Collection</h1>
             {this.state.collections.map( ({id, ...otherProps}) =>
             <CollectionPreview key={id} {...otherProps}/>
             )}
        </div>);
    }    
}

export default Shop;