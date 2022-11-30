import React from "react";
import StrategyBuilder from "./StrategyBuilder";
import Encrypt from "./Encrypt";

function CBDHeader({
  activateBrowserWallet,
  account,
  deactivate,
  depStrategy,
  setDepStrategy,
  encryptedMessage,
  setEncryptedMessage,
}: any) {
  function shortenAddress(address: string) {
    if (address && address.length === 42) {
      return `${address.slice(0, 5)}...${address.slice(38)}`;
    }
    return "not connected";
  }

  function showStrategy(depStrategy: any) {
    if (typeof depStrategy === "string") {
      return depStrategy;
    } else {
      return depStrategy.label;
    }
  }

  function showEncrypted() {
    return encryptedMessage ? "Encrypted" : "Not ready"
  }

  return (
    <div className="cbd-header">
      <div className="row">
        <div className="column">
          <div>
            <button className="cbd-button" onClick={activateBrowserWallet}>
              Step 1. Connect Wallet
            </button>
          </div>
          <div>
            <StrategyBuilder setDepStrategy={setDepStrategy} />
          </div>
          <Encrypt
            depStrategy={depStrategy}
            setEncryptedMessage={setEncryptedMessage}
          />
          <div></div>
        </div>
        <div className="column">
          <div style={{ textAlign: "right" }}>
            <span>
              Account: <b>{shortenAddress(account)} </b>
            </span>
            {account && (
              <span>
                <button onClick={deactivate}>Disconnect</button>
              </span>
            )}
            <div>
              Strategy: <b>{showStrategy(depStrategy)}</b>
            </div>
            <div>
              Blog posts: <b>{showEncrypted()}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CBDHeader;
