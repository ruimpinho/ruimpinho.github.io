import React, { FC } from 'react';
import ruipic from '../logo512.png';
import htmlcssjs from '../htmlcssjs.png';

const Home: FC = () => {
  return (
    <div className="content">
      <h1>Welcome</h1>
      <br />
      <img src={ruipic} width="150px" alt="Rui Pinho" />
      <br /> <br />
      <h3>Hello! I'm Rui.</h3>
      <p>
        Welcome to my online CV. This simple website was built using React and
        TypeScript. <br /> Feel free to resize the window (dynamic header) and
        navigate the various pages.
        <br /> If you want to go dark, try the night mode toggle below (footer).
        🌌🌙
      </p>

      <div className="lista">
        <p>
          - Navbar and other UI components: Bootstrap. <br />
          - React Router for building 3 different pages. <br />
          - styled-components, react-switch and usePersistedState for the dark
          theme. <br />
          - Next version will fix some bugs and include new content. <br />
        </p>
        <img className="center" src={htmlcssjs} alt="HTML CSS Javascript" />
      </div>
    </div>
  );
};

export default Home;
