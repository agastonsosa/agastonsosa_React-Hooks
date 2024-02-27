import React, { useState, useEffect } from 'react';

const Home = () => {
  const [contador, setContador] = useState(0);

  // Usamos useEffect para actualizar el título del documento
  useEffect(() => {
    document.title = `Has hecho click ${contador} veces`;
  }, [contador]); // Este array de dependencias hace que el efecto se ejecute solo cuando "contador" cambia.

  return (
    <div>
      <p>Has hecho click {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>
        Hazme click
      </button>
    </div>
  );
}

export default Home
