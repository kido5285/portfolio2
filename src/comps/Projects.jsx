import React, { useState } from 'react'
import swal from 'sweetalert'

const Projects = () => {

  const expand = (link) => {
    var img = document.createElement('img');
    img.classList.add('expanded');
    img.src = link;
    swal({
      content: img,
      button: false
    });
  }

  return (
    <section className='projects' id='projects'>
        <div className="title">Projects</div>
        <div className='content'>
          <div className="project">
            <div className="image">
              <i className="las icon la-expand-arrows-alt" style={{color: 'white'}}></i>
              <img src="https://i.ibb.co/Xj9hW7p/Screenshot-40.png" alt="movie site img" onClick={() => expand("https://i.ibb.co/Xj9hW7p/Screenshot-40.png")}/>
            </div>
              <div className="container">
                <h1>Movieflix</h1>
                <p>This website is a 123movies clone, where you can watch your favourite movies and tvshows for free.</p>
                <span className='t'>Built With:</span>
                <div className="techs">
                  <div className="tech">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-plain.svg" alt="html5" width="50px" height="50px"/>
                      <span>HTML</span>
                  </div>
                  <div className="tech">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-plain.svg" alt="css" width="50px" height="50px"/>
                      <span>CSS</span>
                  </div>
                  <div className="tech">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-plain.svg" alt="js" width="50px" height="50px"/>
                      <span>Javascript</span>
                  </div>
                  <div className="tech">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/python/python-original.svg" alt="python" width="50px" height="50px"/>
                      <span>Python</span>
                  </div>
                  <div className="tech">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/flask/flask-original.svg" alt="flask" width="50px" height="50px"/>
                      <span>Flask</span>
                  </div>
                </div>
                <a href="https://movieflix234.herokuapp.com" target="_blank" rel='noreferrer'>Live app</a>
              </div>
          </div>
          <div className="project">
            <div className="image">
              <i className="las icon la-expand-arrows-alt" style={{color: 'white'}}></i>
              <img src="https://i.ibb.co/zf1RCGZ/chatting.png" alt="movie site img" onClick={() => expand("https://i.ibb.co/zf1RCGZ/chatting.png")}/>
            </div>
              <div className="container">
                <h1>Chatting Application</h1>
                <p>Chatting application using a chat engine called React Chat Engine</p>
                <span className='t'>Built With:</span>
                <div className="techs">
                  <div className="tech">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-plain.svg" alt="html5" width="50px" height="50px"/>
                      <span>HTML</span>
                  </div>
                  <div className="tech">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-plain.svg" alt="css" width="50px" height="50px"/>
                      <span>CSS</span>
                  </div>
                  <div className="tech">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-plain.svg" alt="js" width="50px" height="50px"/>
                      <span>Javascript</span>
                  </div>
                  <div className="tech">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg" alt="react" width="50px" height="50px"/>
                      <span>React</span>
                  </div>
                </div>
                <a href="https://chatty111.netlify.app/" target="_blank" rel='noreferrer'>Live app</a>
              </div>
          </div>
          <div className="project">
            <div className="image">
              <i className="las icon la-expand-arrows-alt" style={{color: 'white'}}></i>
              <img src="https://i.ibb.co/dmpX60w/Screenshot-2022-04-01-at-08-35-53-React-App.png" alt="movie site img" onClick={() => expand("https://i.ibb.co/dmpX60w/Screenshot-2022-04-01-at-08-35-53-React-App.png")}/>
            </div>
              <div className="container">
                <h1>Image posting</h1>
                <p>Post your picture here</p>
                <span className='t'>Built With:</span>
                <div className="techs">
                  <div className="tech">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-plain.svg" alt="html5" width="50px" height="50px"/>
                      <span>HTML</span>
                  </div>
                  <div className="tech">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-plain.svg" alt="css" width="50px" height="50px"/>
                      <span>CSS</span>
                  </div>
                  <div className="tech">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-plain.svg" alt="js" width="50px" height="50px"/>
                      <span>Javascript</span>
                  </div>
                  <div className="tech">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg" alt="react" width="50px" height="50px"/>
                      <span>React</span>
                  </div>
                </div>
                <a href="https://img109.herokuapp.com/" target="_blank" rel='noreferrer'>Live app</a>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Projects