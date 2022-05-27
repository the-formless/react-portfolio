import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Home from './Components/Welcome';
import Projects from './Components/Projects'
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  const location = useLocation();
  return (
    <div className="App">
        <TransitionGroup>
          <CSSTransition timeout={100} classNames='transition' key={location.key}>
            <Routes location={location}>
              <Route exact path='/' element={<Home />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup> 
    </div>
  );
}

export default App;
