import logo from './/img/LogoWebsite.png';
import {Routes, Route, Link} from "react-router-dom";
import './App.css';
import BasicMenu from '../BasicMenu';
import {Example} from './ExampleCar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

// 6.9.2022, I thinks i need to change the color theme for the website

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


function App() {

  let gabe_face= (<img src={logo} className="App-logo" alt="logo" />);

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
            <h1>Welcome to react Router!</h1>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
            </Routes>
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

              <sub>Insta </sub>
              
              <sub>Linkd </sub>
              
              <sub> Twitch </sub>
            
            </header>

          </header>

        </div>

    </ThemeProvider>
  );
}

export default App;


// App.js
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>Have a look around!
          There's all sorts of stuff and I will continue to add things weekly!
        </p>
      </main>
      <nav>
        <Link to="/about">About Me!</Link>
      </nav>
    </>
  );
}


function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
        Gabriel “Gabe” Holmquist is a graduate of Shoreline Community College with an AAAS in Manufacturing/Machinist technology.
        Amongst other skills, he is excited about Blender, a free 3d modeling software that offers so much, especially for beginners wanting an introduction to 3d software!
        I really want to see how far I can push this program and have plans to build my own render farm.
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
