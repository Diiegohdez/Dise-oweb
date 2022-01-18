
import './App.css';

function App() {
  return (
    <nav className="bg-gray-800 py-4 relative">
      <div className="container mx-auto flex">
        <div className="flex flex-grow">
           <h4 className="text-white">Libros</h4>
        </div>
        <div className="flex flex-grow justify-between">
          <div>
            <button className="text-white py-2 px-2.5 rounded-md hover:bg-white hover:text-gray-900 lg:mr-7 ">Inicio</button>
            <button className="text-white py-2 px-2 rounded-md hover:bg-white hover:text-gray-900 lg:mr-7 ">Categoria</button>
            <button className="text-white py-2 px-2 rounded-md hover:bg-white hover:text-gray-900 ">Busqueda</button>
          </div>
          <div>
            <button className="text-white border border-white py-1.5 px-1.5 rounded-md hover:bg-white hover:border-white hover:text-gray-900 transition duration-500 ease-in-out">Iniciar Sesion</button>
          </div>

        </div>
        
      </div>
    </nav>
  );
}

export default App;
