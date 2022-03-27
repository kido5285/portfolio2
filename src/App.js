import './App.css';
import Sidebar from './comps/Sidebar';
import Header from './comps/Header';
import Home from './comps/Home';
import 'remixicon/fonts/remixicon.css';
import { useContext } from 'react';
import { GlobalContext } from './context/GlobalState';
import About from './comps/About';
import Skills from './comps/Skills';
import Projects from './comps/Projects';
import Contact from './comps/Contact';

function App() {
  const {mode, hide} = useContext(GlobalContext);
  let height = document.querySelector('#root').scrollHeight - 67;
  return (
    <div className="App">
      <div className='overlay' onClick={hide} style={{opacity: mode ? '1' : '0', top: mode ? '67px' : '0', left: mode ? '120px' : '0', pointerEvents: mode ? 'visible' : 'none', height: height + 'px'}}></div>
      <Header/>
      <Sidebar/>
      <main>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
