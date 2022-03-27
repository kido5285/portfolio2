import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Sidebar = () => {
  const {mode} = useContext(GlobalContext);
  return (
    <div className={mode ? 'sidebar menu-active' : 'sidebar'}>
        <div className='side-top'>
          <h1>Aw Yong<br/>Tuck Xian</h1>
          <span className='secondary'>Web Developer</span>
        </div>
        <hr/>
        <ul>
          <a href="#about">
            <li className='side-item li-1'>
                <i className="ri-user-fill"></i>
                <span>About</span>
            </li>
          </a>
          <a href="#skills">
            <li className="side-item li-2">
                <i className="ri-line-chart-fill"></i>
                <span>Skills</span>
            </li>
          </a>
          <a href="#projects">
            <li className="side-item li-3">
                <i className="ri-code-box-fill"></i>
                <span>Projects</span>
            </li>
          </a>
          <a href="#contact">
            <li className="side-item li-4">
                <i className="ri-mail-open-fill"></i>
                <span>Contact</span>
            </li>
          </a>
        </ul>
    </div>
  )
}

export default Sidebar;