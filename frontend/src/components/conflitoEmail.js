import React, { useEffect } from 'react';

const ConflitoEmail = ({ resetConflito }) => {
  useEffect(() => {
    alert('Ya existe una cuenta con este correo electrónico. Por favor, inicia sesión.');
    resetConflito();
  }, [resetConflito]);

  return null;
};

export default ConflitoEmail;
