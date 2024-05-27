import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";

function App() {
  return (
    <>
      <Header title="Adopta un Perrito Desafio" />
      <MyCard
        imagen="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=600"
        nombre="Princesa"
        descripcion="Perrita Amable y Cuidadora de Niños, ,tranquila y regalona"
      />
      <MyCard
        imagen="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600"
        nombre="Rocki"
        descripcion="Un Perro muy Despierto, guardian y muy obediente."
      />
      <MyCard
        imagen="https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&w=600"
        nombre="Bartolo"
        descripcion="Perro Jugueton, con ganas de jugar siempre, come mucho pero al mismo tiempo leal"
      />
      <MyCard
        imagen="https://images.pexels.com/photos/1906153/pexels-photo-1906153.jpeg?auto=compress&cs=tinysrgb&w=600"
        nombre="Kiara"
        descripcion="Perrita Leal, de buen pedigree, con alta capacidad de atención a sus amos"
      />
    </>
  );
}

export default App;
