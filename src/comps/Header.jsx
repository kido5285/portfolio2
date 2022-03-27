import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Header = () => {
  const {mode, show, hide} = useContext(GlobalContext);
  const click = () => {
    return mode ? hide() : show();
  }
  return (
    <div className='header'>
        <div className='menu-btn' onClick={click}>
          <i className={mode ? "ri-arrow-left-fill primary" : "ri-arrow-right-fill primary"}></i>
        </div>
        <div className='txt'>
          <h1 className='primary'>Aw Yong Tuck Xian</h1>
          <p className='secondary'>Web developer</p>          
        </div>
    </div>
  )
}

export default Header