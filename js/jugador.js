/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,

  perderVidas : function(cantVidas){
    this.vidas -= cantVidas;
  },
  
  movimiento : function(tecla){
    if (tecla == "izq"){
      Jugador.x -= 7;
      Jugador.sprite = "imagenes/auto_rojo_izquierda.png";
      Jugador.ancho = 30;
      Jugador.alto = 15;
    }
    if (tecla == "der"){
      Jugador.x += 7;
      Jugador.sprite = "imagenes/auto_rojo_derecha.png";
      Jugador.ancho = 30;
      Jugador.alto = 15;
    }
    if (tecla == "arriba"){
      Jugador.y -= 7;
      Jugador.sprite = "imagenes/auto_rojo_arriba.png"
      Jugador.ancho = 15;
      Jugador.alto = 30;
    }
    if (tecla == "abajo"){
      Jugador.y += 7;
      Jugador.sprite = "imagenes/auto_rojo_abajo.png"
      Jugador.ancho = 15;
      Jugador.alto = 30;
    } 
  },
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades

}
