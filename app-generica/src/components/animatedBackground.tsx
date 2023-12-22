import React, { useEffect, useState } from 'react';
import './animatedCSS.css'; // Importa tu archivo CSS

const BGanimated: React.FC = () => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const el = document.getElementById('customDiv');
      if (el) {
        const { clientX: x, clientY: y } = e;
        const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
        setPosX(x - l - w / 2);
        setPosY(y - t - h / 2);
      }
    };

    document.body.addEventListener('pointermove', handlePointerMove);

    return () => {
      document.body.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  const containerStyle: React.CSSProperties = {
    height: '100%',
    width: '100%', // Ocupar todo el ancho disponible
    backgroundImage: `
      linear-gradient(115deg, rgb(211, 255, 215), rgb(0, 0, 0)),
      radial-gradient(90% 100% at calc(50% + ${posX}px) calc(0% + ${posY}px), rgb(200, 200, 200), rgb(22, 0, 45)),
      radial-gradient(100% 100% at calc(80% - ${posX}px) calc(0% - ${posY}px), rgb(250, 255, 0), rgb(36, 0, 0)),
      radial-gradient(150% 210% at calc(100% + ${posX}px) calc(0% + ${posY}px), rgb(20, 175, 125), rgb(0, 10, 255)),
      radial-gradient(100% 100% at calc(100% - ${posX}px) calc(30% - ${posY}px), rgb(255, 77, 0), rgb(0, 200, 255)),
      linear-gradient(60deg, rgb(255, 0, 0), rgb(120, 86, 255))
    `,
    backgroundBlendMode: 'overlay, overlay, difference, difference, difference, normal', // Corregir nombre de propiedad y uso de comillas
    position: 'relative'
  };

  return (
    <div id="customDiv" className="container customDiv rounded-start-3" style={containerStyle}>
      {/* Contenido del componente */}
    </div>
  );
};

export default BGanimated;

