import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GuardarEmail = ({ responseOk }) => {
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (responseOk) {
      setShowMessage(true);
      navigate('/vista-proceso-alta'); // Redirige a la ruta /vista-proceso-alta
    }
  }, [responseOk, navigate]);

  return (
    <div>
      {showMessage && (
        <h1>Se ha registrado la cuenta con éxito. ¡Bienvenido!</h1>
      )}
    </div>
  );
};

export default GuardarEmail;
