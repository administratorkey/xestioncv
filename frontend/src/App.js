import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EnviarEmail from './components/enviarEmail';
import GuardarEmail from './components/guardarEmail';
import VistaProcesoAlta from './components/vistaProcesoAlta';
import './components/styles.css';

function App() {
  const [responseOk, setResponseOk] = useState(false);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<EnviarEmail />} />
          <Route
            path="/guardar-email"
            element={<GuardarEmail responseOk={responseOk} />}
          />
          <Route path="/vista-proceso-alta" element={<VistaProcesoAlta />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
