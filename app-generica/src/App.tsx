import React from 'react';
import Inputs from './components/Inputs';

function App() {
  const primerNombre = "First Name"; const tipoTexto = "text"; const idPrimerNombre = "FN";
  const primerApellido = "Last Name"; const idPrimerApellido = "LN";
  const email = "Email"; const tipoEmail = "email"; const idEmail = "EM";
  const password = "Password"; const tipoPassword = "password"; const idPassword = "PA";
  return (
      <div>
        <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="container position-relative top-50 rounded-start-3" style={{ backgroundColor: 'purple', height:'150%',marginTop:'-10%' }}>
              <h1 className="text-center">Aquí va un waves css</h1>
            </div>
          </div>
          <div className="col-4">
            <div className="container position-relative top-50" style={{ maxWidth: '80%' }}>
              <h3 style={{ fontWeight:'bold' }}>Sing Up</h3>
              <p style={{ fontWeight:'bold', color:'purple' }}>Join the largest designers community</p>
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
              <input className="btn btn-primary mt-3" type="submit" value="Create Account" style= {{ minWidth: '100%', backgroundColor: 'purple' }}></input>
              <p className="text-center mt-2">Alredy have an account?<span style={{ color:'purple', fontWeight:'bold', cursor: 'pointer' }}> Log In</span></p>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default App;
