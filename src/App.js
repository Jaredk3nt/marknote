import React from 'react';
import styled from 'react-emotion';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import { injectGlobal } from 'emotion'
// Components
import Home from './components/Home';
import Editor from './components/Editor';

const theme = {
  colors: {
    bg: '#121212',
    bgDark: '#000',
    bgLight: '#272727',
    yellow: '#fdc75c',
    blue: '#7299f9',
    teal: '#63d6d0',
    text: '#fff',
    textDark: '#587d93',
    textDarker: '#4f7084',
    gradient: 'radial-gradient(circle farthest-corner at 120% 80%, #63d6d0, transparent), #405def'
  },
  fonts: {
    family: "'IBM Plex Mono', monospace"
  }
};

function App() {
    return (
      <ThemeProvider theme={theme}>
        <Body>
          <Router>
            <>
              <Route
                exact
                path='/'
                component={Home}
              />
              <Route
                path='/notes/:noteId'
                component={Editor}
              />
            </>
          </Router>
        </Body>
      </ThemeProvider>
    );
}

const Body = styled('div')`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.bgDark};
`;
// Global styles
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,600');

  body {
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100vw;
    height: 100vh;
  }

  * {
    box-sizing: border-box;
  }
`;

export default App;
