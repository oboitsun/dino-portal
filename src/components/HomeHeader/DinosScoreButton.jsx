import { useState } from "react";
import DinosTokenLogo from "../DinosTokenLogo";
import DinosTokenBuyModal from "./DinosTokenBuyModal";
function DinosScoreButton({ dinoScore }) {
  const [showTokenModal, setShowTokenModal] = useState(false);

  const handleToggleTokenModal = () => {
    setShowTokenModal(!showTokenModal);
  };

  return (
    <>
      <button
        onClick={handleToggleTokenModal}
        className="disconnect-button btn-filled gap-2 dinos-score"
      >
        <span className="relative top-0.5 token-score">{dinoScore}</span>{" "}
        <span className="token-logo">
          <DinosTokenLogo />
        </span>
        <span className="buy-more">buy more</span>
      </button>
      <DinosTokenBuyModal
        showTokenModal={showTokenModal}
        handleToggleTokenModal={handleToggleTokenModal}
      />
    </>
  );
}

export default DinosScoreButton;
