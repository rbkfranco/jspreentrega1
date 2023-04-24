/* comentarios en bloque */
// comentarios en lines: funciona solamente para una linea, no podemos presionar enter y seguir escribiendo.

let pedido = prompt("¿Qué desea ordenar?");

if (pedido === "Hamburguesa") {
  console.log = alert("Su hamburguesa estará lista en 10 minutos.");

 }else if (pedido === "hamburguesa") {console.log = alert("Su hamburguesa estará lista en 10 minutos.");
}else if (pedido === "Pizza") {
    console.log = alert("Su pizza estará lista en 20 minutos.");
} else if (pedido === "pizza") {
  console.log = alert("Su pizza estará lista en 20 minutos.");
} else if (pedido === "Ensalada") {
    console.log = alert("Su ensalada estará lista en 5 minutos.");
} else if (pedido === "ensalada") {
  console.log = alert("Su ensalada estará lista en 5 minutos.");
} else {
  console.log = alert("Lo siento, no tenemos ese plato en el menú.");
}

let menu = ["hamburguesa", "pizza", "ensalada"];

for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

