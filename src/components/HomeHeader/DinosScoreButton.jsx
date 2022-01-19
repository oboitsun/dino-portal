import React from 'react';
import DinosTokenLogo from '../DinosTokenLogo';
function DinosScoreButton({ dinoScore }) {
  return (
    <button className="disconnect-button btn-filled gap-2 dinos-score">
      <span className="relative top-0.5">{dinoScore}</span> <DinosTokenLogo />
    </button>
  );
}

export default DinosScoreButton;
