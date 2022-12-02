import React from "react";
import { useState } from "react";
import { useEthers } from "@usedapp/core";
import Posts from "./components/Posts";
import CBDHeader from "./components/CBDHeader";

function App() {
  const { activateBrowserWallet, deactivate, account } = useEthers();
  const [depStrategy, setDepStrategy] = useState("not deployed");
  const [encryptedMessage, setEncryptedMessage] = useState("");
  const [conditionContext, setConditionContext] = useState(null);

  return (
    <div>
      <CBDHeader
        activateBrowserWallet={activateBrowserWallet}
        account={account}
        deactivate={deactivate}
        depStrategy={depStrategy}
        setDepStrategy={setDepStrategy}
        encryptedMessage={encryptedMessage}
        setEncryptedMessage={setEncryptedMessage}
        setConditionContext={setConditionContext}
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
