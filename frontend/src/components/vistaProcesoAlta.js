import React, { useEffect, useState } from 'react';

const VistaProcesoAlta = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Extract URL parameter "token" from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      const validationURL = `${window.location.origin}/validate/${token}`;
      setMessage(`URL de validación: ${validationURL}`);
    }
  }, []);

  return (
    <div>
      <h1>El componente funciona</h1>
      {message && <p>{message}</p>}
    </div>
  );
};

export default VistaProcesoAlta;
