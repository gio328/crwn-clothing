import React from "react";
import Card from "../UI/card.component";
import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview.scss';


const CollectionPreview = ({title, routeName, items}) => (
   <div className='collection-preview'>
       <h1 className='title'>{title.toUpperCase()}</h1>
       <div className='preview'>
         {items.slice(0,4).map( ({id, ...otherProps }) =>
         <CollectionItem key={id} {...otherProps}/>
         )}
       </div>
   </div>
);
export default CollectionPreview;

