import React from "react";

function CBDHeader({ activateBrowserWallet, account }: any) {
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
          <button onClick={() => activateBrowserWallet()}>
            Step 1. Connect Wallet
          </button>
          {/* <StrategyBuilder setLoading={setLoading} /> */}
        </div>
        <div className="column">
          <div>
            <p style={{ textAlign: "right" }}>
              Account: <b>{shortenAddress(account)}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CBDHeader;
