import react from 'react';
import './App.css';
import Nabvar from './components/Nabvar';
import Inicio from './page/Inicio';
import Categoria from './page/Categoria';
import Busqueda from './page/Busqueda';
import NotFoundPage from './page/NotFoundPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Nabvar/>
      <Switch>
        <Route path='/' exact component={Inicio}/>
        <Route path='/Categoria' component={Categoria}/>
        <Route path='/Busqueda' component={Busqueda}/>
        <Route path='*' component={NotFoundPage}/>
      </Switch>
      
    </Router>

    
  );
}

export default App;
