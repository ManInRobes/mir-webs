import React, { useEffect } from 'react';
import logo from '../LogoWebsite.png';
import './App.css';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import { Container, Icon, Menu } from '@mui/material';
import { green } from '@mui/material/colors';
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import { Circle, CoPresent, Gavel } from '@mui/icons-material';
import BasicMenu from '../BasicMenu';
import {Example} from './ExampleCar';
import AppContainer from './AppContainer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'


// Sets theme
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#EDEAE8',
    },
    secondary: {
      // This is green.A700 as hex.
      main: purple[500],
    },
  },
});

// Also (#2), test ABS origin set here

function App() {

  let gabe_face= (<img src={logo} className="App-logo" alt="logo" />);
  // Test, setting ABS origin set here
  // #1 Find boundaries the page, so image will never exceed max x and y
  // #2 movement of icon (represents math for angle)x+(centered y)
  // useEffect(
    // () => {
      // console.log("yomama")
      // setInterval(
        // () => {
          // console.log()
        // },33
      // )
    // }
  // )

// Menu Main Body text
  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
    {/* Header */}

        <header className="App-header">
          <main>
          ManInRobes.com
            <sub>AKA:Gabriel Holmquist</sub>
          </main>
          <p className='App-Menu'>
          <main  ><BasicMenu/>
          </main>
          </p>

          {gabe_face}
          <p>
            <code>Look</code> into <span className='redbackground'>my</span> eyes.
          </p>
        </header>
    {/* 2nd Layout, Current projects, sidebar: _____ */}

        <p/>
        <header className="App-Sidebar">
          <p className="maincar">
            Projects at a glace
            <sub>It's just what I've been cooking up,
                  Welcome to Papa's Kitchen
            </sub>
            <Example/>
          </p>

        </header>
    {/*  3rd Layout, scrolling photo gallery*/}

          <p/>
          <header className="App-leader">
          </header>
  {/*     4th Layout, Social tabs, link to messages */}
          <p/>
          <header className="socialmain">
            <sub>Socials, get in contact</sub>
            <header className="socialrow">

              <sub>Insta</sub>
              
              <sub>Linkd</sub>
              
              <sub> Twitch</sub>
            
            </header>

          </header>

        </div>

    </ThemeProvider>
  );
}

export default App;


