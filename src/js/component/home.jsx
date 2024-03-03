import React, { useEffect, useState } from 'react';

const EjemploUseEffect = () => {
  // Estado para almacenar datos
  const [datos, setDatos] = useState(null);

  // useEffect se ejecutará después de que el componente se monte
  useEffect(() => {
    // Simulando una solicitud asíncrona, por ejemplo, a una API
    const fetchData = async () => {
      try {
        // Realizar la solicitud o acción asíncrona
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();

        // Actualizar el estado con los datos obtenidos
        setDatos(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    // Llamar a la función que realiza la solicitud
    fetchData();

    // El segundo parámetro de useEffect, que es un arreglo vacío, significa
    // que esta función de efecto solo se ejecutará una vez, después del montaje.
  }, []);

  return (
    <div>
      {datos ? (
        <pre>{JSON.stringify(datos, null, 2)}</pre>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default EjemploUseEffect;
