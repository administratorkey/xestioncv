import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GuardarEmail = ({ responseOk }) => {
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (responseOk) {
      setShowMessage(true);
      navigate('/vista-proceso-alta'); // Redirige a la ruta "/vista-proceso-alta"
    }
  }, [responseOk, navigate]);

 
  
  
};

export default GuardarEmail;
