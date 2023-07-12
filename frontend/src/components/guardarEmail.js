import React, { useEffect } from 'react';

const GuardarEmail = ({ responseOk }) => {
  useEffect(() => {
    if (responseOk) {
      alert('Se ha registrado la cuenta con éxito. ¡Bienvenido!');
    }
  }, [responseOk]);

  return null;
};

export default GuardarEmail;
