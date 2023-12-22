import React, { useEffect, useState } from 'react';

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
    width: '100%',
    backgroundImage: `
      linear-gradient(115deg, #223858, #17243a),
      radial-gradient(90% 100% at calc(50% + ${posX}px) calc(0% + ${posY}px), #3163a5,  #c9d9ee),
      radial-gradient(100% 100% at calc(80% - ${posX}px) calc(0% - ${posY}px), #223858,  #c9d9ee),
      radial-gradient(150% 210% at calc(100% + ${posX}px) calc(0% + ${posY}px), #c9d9ee, #17243a),
      radial-gradient(100% 100% at calc(100% - ${posX}px) calc(30% - ${posY}px), #223858, #c9d9ee),
      linear-gradient(60deg, #17243a, #223858)
    `,
    backgroundBlendMode: 'overlay, overlay, difference, difference, difference, normal',
    position: 'relative'
  };

  return (
    <div id="customDiv" className="container customDiv rounded-start-3" style={containerStyle}>
    </div>
  );
};

export default BGanimated;