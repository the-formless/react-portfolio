import logo from './logo.svg';
import './App.scss';
import Layout from './Components/Layout';
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Home from './Components/Welcome';
import Projects from './Components/Projects'

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Layout>
        <TransitionGroup>
          <CSSTransition timeout={500} classNames='transition' key={location.key}>
            <Routes location={location}>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/projects' element={<Projects />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup> 
      </Layout>
    </div>
  );
}

export default App;
