import React, { useState } from 'react';
import './PlayerProfile.css';

const PlayerProfile = ({ onClose }) => {
  const [isClosed, setIsClosed] = useState(false);

  const handleProfileClose = () => {
    setIsClosed(true);
    onClose();
  };

  return (
    <div className={`player-profile${isClosed ? ' closed' : ''}`}>
      <div className="sidebar">
        <button className="close-button" onClick={handleProfileClose}>
          X
        </button>
        <div className="profile-image">
          <img src="./images/semimagem.png" alt="Perfil" />
        </div>
        <div className="item-list">
          <h2>Itens do Jogador</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            {/* Adicione mais itens conforme necessário */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
