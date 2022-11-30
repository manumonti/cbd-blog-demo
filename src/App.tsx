import React from "react";
import { useState } from "react";
import { useEthers } from "@usedapp/core";
// import detectEthereumProvider from "@metamask/detect-provider";
// import { providers } from "ethers";
import Posts from "./components/Posts";
import CBDHeader from "./components/CBDHeader";

function App() {
  const { activateBrowserWallet, deactivate, account } = useEthers();
  const [strategyDeploying, setStrategyDeploying] = useState("not deployed");

  return (
    <div>
      <CBDHeader
        activateBrowserWallet={activateBrowserWallet}
        account={account}
        deactivate={deactivate}
        strategyDeploying={strategyDeploying}
        setStrategyDeploying={setStrategyDeploying}
      />
      <div>
        <div className="blog-header">
          <h1>Nucypher's CBD Blog Demo</h1>
        </div>
        <Posts />
      </div>
    </div>
  );
}

export default App;
