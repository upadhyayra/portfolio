import React from 'react'

const About=()=> {
  return (
    <section >
    <div className="container" style={{marginBottom:"100px"}}>
            <div className='aboutMe'>
          <h2>About Me</h2>
        <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
        </div>
           <div className="row aboutskills">
      <div className='col-md-8'>
        <h3>Get to know me?</h3>
        <p>I'm a Fullstack Web Developer building the Front-end and Back-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in theProjects section</p>
        <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
      </div>
      <div className='col-md-4' >
        <h3>My Skills</h3>
        <div className='d-flex'>
          <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>nodeJS</span>
        <span>ExpressJS</span>
        <span>ReactJS</span>
        <span>MongoDB</span>
        </div>
      </div>
    </div>
    </div>
    </section>
  )
}
export default About