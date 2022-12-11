import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { DAppProvider, Config, Mumbai } from "@usedapp/core";
import Posts from "./components/Blog/Posts";
import CBDHeader from "./components/CBD/CBDHeader";

// const mumbaiApi: string = process.env.MUMBAI_API as string;

const config: Config = {
  autoConnect: false,
  // networks: [Mumbai],
  // readOnlyChainId: Mumbai.chainId,
  // readOnlyUrls: { [Mumbai.chainId]: mumbaiApi },
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
