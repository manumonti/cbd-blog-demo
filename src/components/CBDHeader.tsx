import React from "react";
import StrategyBuilder from "./StrategyBuilder";

function CBDHeader({
  activateBrowserWallet,
  account,
  deactivate,
  strategyDeploying,
  setStrategyDeploying,
}: any) {
  function shortenAddress(address: string) {
    if (address && address.length === 42) {
      return `${address.slice(0, 5)}...${address.slice(38)}`;
    }
    return "not connected";
  }

  return (
    <div className="cbd-header">
      <div className="row">
        <div className="column">
          <div>
            <button className="cbd-buttons" onClick={activateBrowserWallet}>
              Step 1. Connect Wallet
            </button>
          </div>
          <div>
            <StrategyBuilder setStrategyDeploying={setStrategyDeploying}/>
          </div>
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
            <div>Strategy: <b>{strategyDeploying}</b></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CBDHeader;
