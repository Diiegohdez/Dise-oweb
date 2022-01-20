import react from 'react';
import './App.css';
import menub from './image/menub.png';
import lib from './image/lib.png';

function App() {
  return (
    <nav className="bg-gray-800 py-3 relative">
      <div className="container mx-auto flex px-8 xl:px-0">
        <div className="flex flex-grow">
           <img className="w-11" src={lib}/>
           <h4 className="text-white text-2xl font-serif ">Unravel</h4>
        </div>
        <div className="flex lg:hidden">
          <img className="w-9 " src={menub}/>
        </div>
        
        <div id="menu" className="lg:flex  hidden flex-grow justify-between">
          <div>
            <button className="text-white py-2 px-2.5 rounded-md hover:bg-white hover:text-gray-900 lg:mr-7 ">Inicio</button>
            <button className="text-white py-2 px-2 rounded-md hover:bg-white hover:text-gray-900 lg:mr-7 ">Categoria</button>
            <button className="text-white py-2 px-2 rounded-md hover:bg-white hover:text-gray-900 ">Busqueda</button>
          </div>
          <div>
            <button className="text-white border border-white py-1.5 px-1.5 rounded-md hover:bg-white hover:border-white hover:text-gray-900 transition duration-500 ease-in-out lg:mr-4">Iniciar Sesion</button>
          </div>

        </div>
        
      </div>
    </nav>

    
  );
}

export default App;
