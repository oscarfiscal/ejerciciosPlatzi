var numero =1
switch (numero)
{  
     case 1:
         console.log ("soy uno");
         break;

         case 10:
             console.log ("soy diez");
                break;
                case 100:
                    console.log ("soy cien");
                    break;
                    default:
                        console.log ("no es ninguno de los anteriores");

}

////////////////juego piedra papel tijera////////////////////
var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];


// let numero = 'a';
//con true los casos van a pasar 
switch (true) {
    case (user === machine):
        console.log('es un empate');
        break;
    case (machine === 'piedra' && user === 'papel'):
        alert('Ganaste')
        break;
      
    case (machine === 'papel'  && user === 'tijera'):
        alert('Ganaste')
        break;
    case (machine === 'tijera' && user === 'piedra'):
        alert('Ganaste')
        break;
    case (user === 'tijera' && machine === 'piedra' ):
        alert('gano la maquina')
        break;
    case (user === 'papel'  && machine === 'tijera' ):
        alert('gano la maquina')
        break;
    case ( user === 'piedra' && machine === 'papel'):
        alert('gano la maquina')
        break;
           
}
