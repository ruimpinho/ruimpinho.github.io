import 'bootstrap/dist/css/bootstrap.css';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import NavbarComp from './components/NavbarComp';
import Footer from './components/Footer';
import GlobalStyle from './styles/global';
import usePeristedState from './utils/usePersistedState';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

const App = () => {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <NavbarComp toggleTheme={toggleTheme} />
        <Footer toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
};

export default App;