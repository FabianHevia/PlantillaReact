import React from 'react';
import Inputs from './components/Inputs';
import BGanimated from './components/animatedBackground';

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
            <div className="container position-relative top-50" style={{ marginTop:'-10%', height:'150%' }}>
              <BGanimated />
             </div>
          </div>
          <div className="col-4">
            <div className="container position-relative top-50" style={{ maxWidth: '80%' }}>
              <h3 style={{ fontWeight:'bold' }}>Sing Up</h3>
              <p style={{ fontWeight:'bold', color:'#3163a5' }}>Join the largest designers community</p>
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
              <input className="btn btn-primary mt-3" type="submit" value="Create Account" style= {{ minWidth: '100%', backgroundColor: '#3163a5' }}></input>
              <p className="text-center mt-2">Alredy have an account?<span style={{ color:'#3163a5', fontWeight:'bold', cursor: 'pointer' }}> Log In</span></p>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default App;
