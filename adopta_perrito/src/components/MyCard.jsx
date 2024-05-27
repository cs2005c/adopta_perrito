import React from "react";

function MyCard(losdatosperrito) {
  return (
    <div>
      <img src={losdatosperrito.imagen} />
      <p>{losdatosperrito.nombre}</p>
      <p>{losdatosperrito.descripcion}</p>
    </div>
  );
}

export default MyCard;
