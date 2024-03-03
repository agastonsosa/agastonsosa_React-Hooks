import React, { useState } from 'react';

const EjemploEnvioDatos = () => {
  // Estado para almacenar el valor del campo de entrada
  const [inputValue, setInputValue] = useState('');
  // Estado para almacenar el resultado del envío de datos
  const [resultadoEnvio, setResultadoEnvio] = useState(null);

  // Función para manejar el envío de datos
  const enviarDatos = async () => {
    try {
      // Realizar la solicitud POST
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
      });

      // Verificar si la solicitud fue exitosa
      if (response.ok) {
        // Obtener el resultado del envío
        const resultado = await response.json();
        // Actualizar el estado con el resultado
        setResultadoEnvio(resultado);
      } else {
        // Manejar el caso de error de la solicitud
        console.error('Error en la solicitud:', response.statusText);
      }
    } catch (error) {
      // Manejar errores de red u otros errores
      console.error('Error al enviar datos:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={enviarDatos}>Enviar Datos</button>
      {/* Mostrar el resultado del envío de datos si está disponible */}
      {resultadoEnvio && (
        <p>Resultado del envío: {JSON.stringify(resultadoEnvio)}</p>
      )}
    </div>
  );
};

export default EjemploEnvioDatos;