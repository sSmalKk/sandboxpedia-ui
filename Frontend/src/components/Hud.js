import React, { useEffect, useState } from 'react';
import './hud.css';
import { useLocation } from 'react-router-dom';
import PlayerProfile from './PlayerProfile';

const Hud = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeFunction, setActiveFunction] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [showPlayerProfile, setShowPlayerProfile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isDark = localStorage.getItem('isDarkTheme');
    if (isDark) {
      setIsDarkTheme(JSON.parse(isDark));
    }
  }, []);

  const handleFunctionClick1 = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem('isDarkTheme', JSON.stringify(newTheme));
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleFunctionClick = (func) => {
    setActiveFunction(func);
    if (func === 1) {
      setShowPlayerProfile(true);
    } else {
      setShowPlayerProfile(false);
    }
    toggleExpand();
  };

  // Função para fechar o perfil do jogador
  const handleCloseProfile = () => {
    setShowPlayerProfile(false);
  };

  return (
    <div className={`hud ${isExpanded ? 'expanded' : ''}`}>
      {showPlayerProfile && <PlayerProfile onClose={handleCloseProfile} />}

      <div className="main-div" onClick={toggleExpand}>
        {isExpanded ? 'x' : 'hud'}
      </div>

      {isExpanded && (
        <div className="grid">
          <div className="function-div invisible-div" onClick={handleFunctionClick1}>
            <img
              src={isDarkTheme ? './images/moon.png' : './images/sun.png'}
              alt={isDarkTheme ? 'Moon' : 'Sun'}
              className="theme-icon"
              style={{ width: '24px', height: '24px' }}
            />
          </div>
          <div className="function-div invisible-div">
            <img
              src="./images/profile-active.png"
              alt="Profile"
              style={{ width: '24px', height: '24px' }}
              onClick={() => handleFunctionClick(1)}
            />
          </div>
          <div className="function-div invisible-div">
            <img
              src={isExpanded ? './images/plus-active.png' : './images/plus-inactive.png'}
              alt="Plus"
              style={{ width: '24px', height: '24px' }}
              onClick={() => handleFunctionClick(2)}
            />
          </div>
          {Array(6).fill(null).map((_, index) => (
            <div
              key={index}
              className={`function-div ${activeFunction === index + 3 ? 'active' : ''} invisible-div`}
              style={{ width: '24px', height: '24px' }}
              onClick={() => handleFunctionClick(index + 3)}
            >
              <img
                src={
                  isExpanded
                    ? `./images/icon${index + 1}-active.png`
                    : `./images/icon${index + 1}-inactive.png`
                }
                alt={`Icon ${index + 1}`}
                style={{ width: '24px', height: '24px' }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hud;
