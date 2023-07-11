import React, { useState } from 'react';

const EnviarEmail = () => {
  const [email, setEmail] = useState('');

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
        } else {
          console.log('Hubo un error al enviar el correo electrónico.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        console.log('Hubo un error al enviar el correo electrónico.');
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <h1>Test Envío</h1>
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
    </div>
  );
};

export default EnviarEmail;
