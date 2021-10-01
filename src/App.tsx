import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css' //importar bootstrap
import NavbarComp from './components/NavbarComp';


//darkmode
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePeristedState from './utils/usePersistedState'

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Home from './components/Home';


const App = () => {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        
        <Header toggleTheme={toggleTheme} />
        <Home/>

        <Footer toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider>
  );
}


/*function App() {
  return (
      <div className="App">

      
        <NavbarComp />

      </div>
  );
}*/

export default App;
