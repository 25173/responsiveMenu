 // als op een link met een submenu geklikt wordt
 // moet niet naar de koppeling gaan

 let submenu = document.querySelectorAll('.submenu1 > a');
 console.log(submenu);

 for ( let i = 0; i<submenu.length; i++){
  submenu[i].addEventListener('click', (e)=> e.preventDefault());
 }