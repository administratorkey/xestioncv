import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConflitoEmail from './conflitoEmail';
import GuardarEmail from './guardarEmail';

const EnviarEmail = () => {
  const [email, setEmail] = useState('');
  const [conflito, setConflito] = useState(false);
  const [responseOk, setResponseOk] = useState(false);
  const navigate = useNavigate(); // Obtener la función navigate para redireccionar

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      address: email
    };

    fetch('http://localhost:8000/email/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          console.log('El correo electrónico se envió correctamente.');
          setEmail('');
          setConflito(false);
          setResponseOk(true);

          // Redirigir al componente VistaProcesoAlta sin la parte redundante de la URL
          response.json().then(data => navigate(`/vista-proceso-alta?token=${data.validationURL.split('http://localhost:8000/validate/')[1]}`));
        } else if (response.status === 409) {
          setConflito(true);
          setResponseOk(false);
        } else {
          console.log('Hubo un error al enviar el correo electrónico.');
          setResponseOk(false);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        console.log('Hubo un error al enviar el correo electrónico.');
        setResponseOk(false);
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const resetConflito = () => {
    setConflito(false);
  };

  return (
    <div>
      <h1>Test Envío</h1>
      {conflito ? (
        <ConflitoEmail resetConflito={resetConflito} />
      ) : (
        <>
          <GuardarEmail responseOk={responseOk} />
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button type="submit">Enviar</button>
          </form>
        </>
      )}
    </div>
  );
};

export default EnviarEmail;
