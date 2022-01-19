import React from 'react';
import { Link } from 'react-router-dom';
function SettingsButton() {
  return (
    <Link to="/settings">
      <button className="settings">my settings</button>
    </Link>
  );
}

export default SettingsButton;
