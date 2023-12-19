import React from 'react';
import Inputs from './components/Inputs';

function App() {
  const primerNombre = "First Name:"; const tipoTexto = "text"; const idPrimerNombre = "FN";
  const primerApellido = "Last Name:"; const idPrimerApellido = "LN";
  const email = "Email:"; const tipoEmail = "email"; const idEmail = "EM";
  const password = "Password:"; const tipoPassword = "password"; const idPassword = "PA";
  return (
      <div>
        <div className="row">
          <div className="col-8">
            <div className="container">
              <h1 className="text-end">Aquí va un waves css</h1>
            </div>
          </div>
          <div className="col-4">
            <div className="container">
              <h1>Sing Up</h1>
              <p>Join the largest designers community</p>
              <div className="row">
                <div className="col">
                  <Inputs titulo={primerNombre} tipo={tipoTexto} id={idPrimerNombre}/>
                </div>
                <div className="col">
                  <Inputs titulo={primerApellido} tipo={tipoTexto} id={idPrimerApellido}/>
                </div>
              </div>
              <Inputs titulo={email} tipo={tipoEmail} id={idEmail}/>
              <Inputs titulo={password} tipo={tipoPassword} id={idPassword}/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
