import React, { useState } from 'react';
import './hud.css'; // Importe o arquivo CSS para estilização

const Hud = () => {
  const [showPlanets, setShowPlanets] = useState(false);

  const handleMouseEnter = () => {
    setShowPlanets(true);
  };

  const handleMouseLeave = () => {
    setShowPlanets(false);
  };

  return (
    <div className="hud-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src="./images/sun.png" alt="Sun" className="sun" />
      {showPlanets && (
        <div className="planets">
          {/* Aqui você pode criar os botões para os planetas */}
          <button className="planet-button">
            <img src="./images/planeta1.png" alt="Planet" className="planet" />
          </button>
          {/* Repita o bloco acima para cada planeta */}
        </div>
      )}
    </div>
  );
};

export default Hud;
