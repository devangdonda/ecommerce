import React from 'react';
import'./breadcrumb.css';
import arrow_icon from '../assets/breadcrum_arrow.png';

const Breadcrumbs = (props) => {
    const {product} = props
  return (
    <div className='breadcrumb'>
        HOME <img src={arrow_icon}/>
        SHOP <img src={arrow_icon}/>
        {product.category} <img src={arrow_icon}/>
        {product.name}
    </div>
  )
}

export default Breadcrumbs