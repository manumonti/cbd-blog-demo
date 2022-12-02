import React from "react";
import { useState } from "react";
import { useEthers } from "@usedapp/core";
import Posts from "./components/Blog/Posts";
import CBDHeader from "./components/CBD/CBDHeader";

function App() {
  const { activateBrowserWallet, deactivate, account } = useEthers();
  const [depStrategy, setDepStrategy] = useState([]);
  const [encryptedMessage, setEncryptedMessage] = useState("");
  const [decryptedMessage, setDecryptedMessage] = useState(null);

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
        decryptedMessage={decryptedMessage}
        setDecryptedMessage={setDecryptedMessage}
      />
      <div>
        <div className="blog-header">
          <h1>CBD demo: Alpha leaks</h1>
        </div>
        <Posts decryptedMessage={decryptedMessage} />
      </div>
    </div>
  );
}

export default App;
