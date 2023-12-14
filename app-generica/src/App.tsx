import React from 'react';
import Wops from './components/Wops'

function App() {
  const mensaje = '¡Hola desde App!';

  return (
      <div>
        <Wops mensaje={mensaje} />
      </div>
  );
}

export default App;
