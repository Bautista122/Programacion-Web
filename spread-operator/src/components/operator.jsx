import { useState } from "react";

export function Operator() {
  const [nums, setNums] = useState([1, 2, 3, 4, 5]);
  const [persona, setPersona] = useState({
    name: "Federico",
    alumno: "Thiago",
  });

  const addNums = () => {
    setNums([...nums, nums.length + 1]);
  };

  const updateName = () => {
    setPersona({ ...persona, name: "Miguel", edad: 80 });
    console.log("Persona actualizada:", persona);
  };

  const productos = [
    { nombre: "Camiseta", precio: 20 },
    { nombre: "Pantalon", precio: 30 },
  ];

  const productosEnPromocion = productos.map((producto) => ({
    ...producto,
    descuento: true,
  }));

  console.log("Productos en promoción:", productosEnPromocion);

  return (
    <>
      {nums.map((num, index) => (
        <p key={index}>{num}</p>
      ))}

      <h3>Spread Operator</h3>
      <button onClick={addNums}>Agregar números</button>

      <h4>Productos en Promoción</h4>
      {productosEnPromocion.map((p, i) => (
        <p key={i}>
          {p.nombre} - ${p.precio} {p.descuento ? "(Promoción)" : ""}
        </p>
      ))}
    </>
  );
}
