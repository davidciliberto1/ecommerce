import React from 'react'
import './cardDataContent.css';
import {Datos} from '../../Data';

const CardDataContent = (props) => {

  return (
    <div id='holis' className='cardDataContent'>
        {Datos.description}
    </div>
  );
}

export default CardDataContent;