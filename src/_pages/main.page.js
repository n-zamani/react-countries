import React from 'react';
import world from '../images/world.svg';
import {Input} from '../_components';

function Main() {
    return <div className='main-page'>
            <img src={world} alt='world'></img>
            <Input/>
      </div>
  }

export {Main};