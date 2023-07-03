import React, { useState } from 'react';
import './components/styles.css';

// Definición del componente App
function App() {
  const [email, setEmail] = useState('');

  // Lista de correos electrónicos registrados (solo como ejemplo)
  const correosRegistrados = ['example1@example.com', 'example2@example.com'];

  // Función para solicitar registro de cuenta
  const solicitarRegistro = () => {
    // Verificar si el correo electrónico ya está registrado
    if (existeCuenta(email)) {
      alert('Ya existe una cuenta con este correo electrónico. Por favor, inicia sesión.');
    } else {
      // Guardar el solicitante en la base de datos o tomar las acciones necesarias
      guardarSolicitante();

      alert('Se ha registrado la cuenta con éxito. ¡Bienvenido!');
    }
  };

  // Función para verificar si la cuenta ya existe en la base de datos
  const existeCuenta = (email) => {
    // Verificar si el correo electrónico ya está en la lista de correos electrónicos registrados
    return correosRegistrados.includes(email);
  };

  // Función para guardar el solicitante en la base de datos
  const guardarSolicitante = () => {
    // Lógica para guardar el solicitante en la base de datos
    // Puedes implementar aquí tu lógica de almacenamiento de datos
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h1>Registro de Cuenta</h1>
      <form>
        <input
          type="email"
          placeholder="Dirección de correo electrónico"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="button" onClick={solicitarRegistro}>Registrar</button>
      </form>
    </div>
  );
}

export default App;
