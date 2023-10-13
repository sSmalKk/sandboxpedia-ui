import React from 'react';
import { useEffect, useState } from 'react';
import { createRef } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  useLocation,
  useOutlet,
} from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Container, Navbar, Nav, InputGroup, FormControl } from 'react-bootstrap';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Socialmedia from './components/Socialmedia.js';
import Console from './components/console.js';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './components/Theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FaSearch } from 'react-icons/fa';
import Hud from './components/Hud';

const routes = [
  { path: '/', name: 'Home', element: <Home />, nodeRef: createRef() },
  { path: '/about', name: 'About', element: <About />, nodeRef: createRef() },
  {
    path: '/contact',
    name: 'Contact',
    element: <Contact />,
    nodeRef: createRef(),
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
]);

function Main() {
  const [themeKey, setThemeKey] = useState('theme-key');
  const isDarkTheme = JSON.parse(localStorage.getItem('isDarkTheme'));
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};

  const handleThemeChange = () => {
    setThemeKey(themeKey === 'theme-key' ? 'theme-key-2' : 'theme-key');
    // Atualize o tema (escuro ou claro) aqui
    // Você pode usar a variável `isDarkTheme` para definir o tema atual
  };

  useEffect(() => {
    // Seu código de atualização de tema e/ou lógica de transição de página
  }, [isDarkTheme, location.pathname]);

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <CssBaseline />
        <Navbar
          style={{ backgroundColor: 'var(--primary-bg-color)', paddingRight: '10px !important' }}
          className='d-flex justify-content-around'
        >
          <div className="d-flex align-items-center" style={{ color: 'var(--font-color)' }}>
            <img src='./images/planeta (3).gif' alt='Logo' style={{ width: '10vh', marginRight: '10px' }} />
            Sandboxpedia
          </div>

          <Nav>
            {routes.map((route) => (
              <Nav.Link
                key={route.path}
                as={NavLink}
                to={route.path}
                className="navlink"
                end
              >
                {route.name}
              </Nav.Link>
            ))}
          </Nav>

          <InputGroup>
            <FormControl
              placeholder="Search"
              aria-label="Search"
              className="search-input"
              // Restante do seu estilo, se necessário
            />

            <InputGroup.Text
              id="button-addon2"
              style={{
                backgroundColor: '#000000',
                color: 'var(--font-color)',
                border: `1px solid var(--search-border-color)`,
              }}
            >
              <i className="bi bi-search"></i>
              <FaSearch
                style={{ cursor: 'pointer' }} // Adicione o estilo de cursor pointer
                className="search-icon" // Adicione uma classe CSS personalizada
              />
            </InputGroup.Text>
          </InputGroup>

          <Socialmedia />
        </Navbar>
        <Container className="container">
          <SwitchTransition>
            <CSSTransition
              key={themeKey}
              nodeRef={nodeRef}
              timeout={300}
              classNames="theme-transition" // Classes CSS de transição do tema
              unmountOnExit
            >
              {(_state) => (
                <div ref={nodeRef} className="page">
                  {currentOutlet}
                </div>
              )}
            </CSSTransition>
          </SwitchTransition>
        </Container>
        <Console />
        <Hud onThemeChange={handleThemeChange} />
      </ThemeProvider>
    </>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
