import {HashRouter as Router,Routes ,Route,useLocation} from 'react-router-dom'
import Home from './components/Home';
import Salas from './components/Salas';
import Nav from './components/Nav';

export const LocationDisplay = () => {
  const location = useLocation()
  return <div style={{display:'none'}} data-testid="location-display">{location.pathname}</div>}
  
export const App=()=> {

  return (
    <div className="App">
<Router>
        <Nav/>
        <Routes>
          <Route exact path='/e-rural-teste' element={<Home />} /> 
          <Route  exact path='e-rural-teste/salas/:id' element={<Salas/>} /> 
        </Routes>
        </Router>
    </div>
  );
}

