import react from "react";

function Omenu(){
    let menu =document.getElementById('menuOpen');
    if (menu.classList.contains('hidden')){
      menu.classList.remove('hidden');
    }else{
      menu.classList.add('hidden');
    }
  }

export default Omenu;