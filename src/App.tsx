import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { DAppProvider, Config, Goerli } from "@usedapp/core";
import "./index.css";
import Posts from "./components/Blog/Posts";
import CBDHeader from "./components/CBD/CBDHeader";

const config: Config = {
  // readOnlyChainId: Goerli.chainId,
  // readOnlyUrls: {
  //   [Goerli.chainId]:
  //     "https://goerli.infura.io/v3/a11313ddcf61443898b6a47e952d255c",
  // },
  // networks: [Goerli],
};

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

function App() {
  const [decryptedMessage, setDecryptedMessage] = useState(null);

  return (
    <div>
      <CBDHeader
        decryptedMessage={decryptedMessage}
        setDecryptedMessage={setDecryptedMessage}
      />
      <div>
        <div className="blog-header">
          <h1>Alpha leaks demo</h1>
        </div>
        <Posts decryptedMessage={decryptedMessage} />
      </div>
    </div>
  );
}

export default App;
