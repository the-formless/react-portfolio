import './App.scss';
import { Route, Routes} from 'react-router-dom';
import Home from './Components/Welcome';
import Projects from './Components/Projects'
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
    </div>
  );
}

export default App;
