import './App.css';
import Header from './Header.js'
import Intro from './Intro.js'
import About from './About.js'
import Tech from './Tech.js'
import Projects from './Projects.js'
import Ethan from './Ethan.js'

import Footer from './Footer.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Home = () => (
  <>
    <Header className='header-app' />
    <Intro className='intro-app' />
    <About className='about-app' />
    <Tech className='tech-app' />
    <Projects className='projects-app' />
    <Footer className='footer-app' />
  </>
);


function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/ethan"  component={Ethan} />
          </Switch>
      </div>
    </Router>

  );
}




export default App;
