import React from "react";
import "./settings.scss";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";
import SettingsInput from "./SettingsInput";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducers/uiReducer";
export default function Settings() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  let state = location.state;
  let from = state ? state.from.pathname : "/";
  const handleLogin = () => {
    dispatch(setUser(true));
    navigate(from, { replace: true });
  };
  const wallets = [
    { name: "stoic", onClick: handleLogin },
    { name: "plug", onClick: handleLogin },
    { name: "earth", onClick: handleLogin },
  ];
  return (
    <div id="settings" className="settings">
      <SectionHeaderBackNav pageName={"settings"} />
      <div className="settings__divider"></div>
      <form className="flex flex-col">
        <div className="grid-cols-2 grid gap-x-10 gap-y-8">
          <SettingsInput label={`First name`} />
          <SettingsInput label={`Last name`} />
          <SettingsInput label={`Email`} />
          <SettingsInput label={`Phone`} />
        </div>
        <button
          type="submit"
          className="px-10 py-4 leading-none bg-myBlack rounded-full text-xl text-white mt-8 self-end"
        >
          Save changes
        </button>
      </form>
      <div className="settings__divider"></div>
      <p className="text-border text-4xl text-white">Wallets</p>
      <div className="settings__divider flex-shrink-0"></div>
      <div className="grid grid-cols-3 gap-5">
        {wallets.map((wallet, i) => (
          <button key={i} className={`wallet ${wallet.name}`} onClick={wallet.onClick}>
            connect {wallet.name} wallet
          </button>
        ))}
      </div>
    </div>
  );
}
