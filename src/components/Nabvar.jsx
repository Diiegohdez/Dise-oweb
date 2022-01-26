import React from 'react';
import reactDom from 'react-dom';
import App from '../App';
import {Link} from 'react-router-dom';
import Omenu from './Script';


const Nabvar = () => {
  return(
    <nav className="bg-gray-800 py-3 relative">
    <div className="container mx-auto flex px-8 xl:px-0 ">
      <div className="flex flex-grow ">
        <Link className="flex flex-grow"  to='/'>
        <img className=" w-10" src="/lib.png" alt=""/>
         <h4 className="text-white text-2xl font-serif  ">Unravel</h4>
        </Link>
        
      </div>
      <div className="flex lg:hidden">
        <img className="w-9 " src="/Menub.png" alt="" onClick={Omenu}/>
      </div>
      
      <div id="menuOpen" className="lg:flex  hidden flex-grow justify-between absolute lg:relative lg:top-0 top-20 left-0  bg-gray-800
       w-full lg:w-auto items-center py-2 lg:py-0 px-2 sm:px-8 lg:px-0 ">
        <div className="flex flex-col lg:flex-row mb-8 lg:mb-0">
          <Link className="text-white py-2 px-2.5 rounded-md hover:bg-white hover:text-gray-900 lg:mr-7 mb-8 lg:mb-0" to='/'>Inicio</Link>
          <Link className="text-white py-2 px-2 rounded-md hover:bg-white hover:text-gray-900 lg:mr-7 mb-8 lg:mb-0" to='/Categoria'>Categoria</Link>
          <Link className="text-white py-2 px-2 rounded-md hover:bg-white hover:text-gray-900 " to='/Busqueda'>Busqueda</Link>
        </div>
        <div>
          <button className="text-white border border-white py-1.5 px-1.5 rounded-md hover:bg-white hover:border-white hover:text-gray-900 transition duration-500 ease-in-out lg:mr-4">Iniciar Sesion</button>
        </div>

      </div>
      
    </div>
  </nav>
   
   




  )
};

export default Nabvar;
