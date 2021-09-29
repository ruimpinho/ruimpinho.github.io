import React from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';

function About() {
  return (
    <div class="content">
        <h1>About me</h1>
        <br/>
        <h4>Hello! My name is Rui Pinho. Here's some information about me:</h4>
        <br />
        <Button variant="success" href="https://www.icloud.com/iclouddrive/02896siJQ5T5Gsw93w2lxtlqg#ruiPinho_githubpages" target="_blank" rel="noopener noreferrer">Download CV (iCloud)</Button>{' '}
        <br /> <br />
        <p>Brief summary:</p>
          <ul class="lista">
      <li><strong>2021</strong> - Always improving using <a href="https://www.theodinproject.com/paths/foundations/courses/foundations" target="_blank" rel="noopener noreferrer">The Odin Project</a> and <a href="https://www.codewars.com/" target="_blank" rel="noopener noreferrer">Codewars</a>. Built more side projects (Node.js, React.js). Improved knowledge in Git.</li>
      <li><strong>2021</strong> - Decided to become full-time software developer. Had some fun building some begginer projects with <a href="https://www.freecodecamp.org/ruimpinho" target="_blank" rel="noopener noreferrer">FreeCodeCamp</a> and <a href="https://codepen.io/ruimpinho" target="_blank" rel="noopener noreferrer">CodePen</a>. Got some <a href="https://www.freecodecamp.org/certification/ruimpinho/responsive-web-design" target="_blank" rel="noopener noreferrer">certifications</a> from the bootcamp.</li>
       <li><strong>2017</strong> - Joined <a href="https://sensingfuture.com/en/" target="_blank" rel="noopener noreferrer">Sensing Future Technologies</a> as a software developer and project manager. Main stack: C#, WPF and HTML/CSS/JS</li>
       <li><strong>2015</strong> - Completed his Master's Degree in Biomedical Engineering. Learned fundamentals of CS.</li>
     </ul>
    </div>
  );
}

export default About;
