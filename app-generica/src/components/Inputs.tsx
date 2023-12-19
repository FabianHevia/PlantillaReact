import React from 'react';

interface Props {
    titulo: string;
    tipo: string;
    id: string;
  }

  const Inputs: React.FC<Props> = (props: Props) => {
    const tituloRecibido = props.titulo;
    const tipoRecibido = props.tipo;
    const idRecibido = props.id;

  return (
      <div>
        <label className="form-label">{tituloRecibido}</label>
        <input type={tipoRecibido} className="form-control" id={idRecibido}/>
      </div>
  );
}

export default Inputs;