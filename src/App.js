import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Welcome';
import Projects from './Components/Projects'

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
