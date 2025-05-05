const inventario = [];

const productos_1 = {
  Nombre: "Mesa",
  Precio: "100",
  Categoria: "Muebles",
};
const productos_2 = {
  Nombre: "Silla",
  Precio: "50",
  Categoria: "Muebles",
};
const productos_3 = {
  Nombre: "Sillon",
  Precio: "110",
  Categoria: "Muebles",
};
const productos_4 = {
  Nombre: "Tele",
  Precio: "150",
  Categoria: "Electronica",
};

inventario.push(productos_1, productos_2, productos_3, productos_4);
console.log("inventario", inventario);

//foreach

inventario.forEach((item) => console.log(item));


//filterr

let Electronica = inventario.filter((inventario) => inventario.Categoria === "Electronica");
console.log("productos_Electronica");
console.log(Electronica);


//map


let Nombres = inventario.map((inventario) => inventario.Nombre);
console.log("productos_Nombre");
console.log(Nombres);
