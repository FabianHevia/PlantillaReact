import React from 'react';

interface Props {
    mensaje: string;
  }

  const Wops: React.FC<Props> = (props: Props) => {
  const mensajeRecibido = props.mensaje;

  return (
      <div>
        <h1>{mensajeRecibido}</h1>
      </div>
  );
}

export default Wops;