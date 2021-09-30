import React from "react";
import "../App.css";
import ruipic from "../logo512.png";
import htmlcssjs from "../htmlcssjs.png"

function Home() {
  return (
    <div class="content">
      <h1>Welcome</h1>
      <br/>
      <img src={ruipic} width="150px" alt="Rui Pinho" />
      <br /> <br />
      <h3> Hello! I'm Rui.</h3>
      <p> <br/>
        Welcome to my online CV. This sample website was built using React
        components. Feel free to navigate the navbar and switch the night mode
        on/off.
      </p>
      <div className="lista">
        <p>
          - Navbar and other UI components: Bootstrap. <br />
          - React Router for building 3 different pages. <br />
          - Styled components for the dark theme. <br /> <br />
        </p>
        <img className="center" src={htmlcssjs} alt="HTML CSS Javascript" />
      </div>
    </div>
  );
}

export default Home;
