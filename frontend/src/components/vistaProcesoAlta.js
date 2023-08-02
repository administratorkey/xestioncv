import React, { useEffect, useState } from 'react';

const VistaProcesoAlta = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    // Extract URL parameter "token" from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const tokenParam = urlParams.get('token');

    // Check if the tokenParam is not null or undefined before proceeding
    if (tokenParam) {
      // Remove "http://localhost:8000/validate/" from the token
      const cleanToken = tokenParam.replace('http://localhost:8000/validate/', '');
      setToken(cleanToken);
    }
  }, []);

  return (
    <div>
      <h1>El componente funciona</h1>
      {token && (
        <p>
          URL de validación: <a href={`http://localhost:8000/validate/${token}`}>{`http://localhost:8000/validate/${token}`}</a>
        </p>
      )}
    </div>
  );
};

export default VistaProcesoAlta;
