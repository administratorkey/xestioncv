import React, { useEffect, useState } from 'react';

const GuardarEmail = ({ responseOk }) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (responseOk) {
      setShowMessage(true);
    }
  }, [responseOk]);

  return (
    <div>
      {showMessage && (
        <h1>Se ha registrado la cuenta con éxito. ¡Bienvenido!</h1>
      )}
    </div>
  );
};

export default GuardarEmail;