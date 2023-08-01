import React, { useEffect } from 'react';

const VistaProcesoAlta = () => {
  useEffect(() => {
    // Extract URL parameter "token" from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      console.log(`URL de validación: ${window.location.origin}/validate/${token}`);
    }
  }, []);

  return (
    <div>
      <h1>El componente funciona</h1>
    </div>
  );
};

export default VistaProcesoAlta;
