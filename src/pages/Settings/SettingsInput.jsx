import React from "react";

export default function SettingsInput({ required = false, type = "text", label }) {
  return (
    <div className="settings__input-wrapper">
      <p className="settings__label">{label}:</p>
      <input type={type} required className="settings__input" />
    </div>
  );
}
