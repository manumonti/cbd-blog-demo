import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { DAppProvider, Config } from "@usedapp/core";
import Posts from "./components/Blog/Posts";
import CBDHeader from "./components/CBD/CBDHeader";

const config: Config = {
  autoConnect: false,
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
  const [decryptedMessages, setDecryptedMessages] = useState([]);

  return (
    <div>
      <CBDHeader
        setDecryptedMessages={setDecryptedMessages}
      />
      <div>
        <div className="blog-header">
          <h1>Alpha leaks demo</h1>
        </div>
        <Posts decryptedMessages={decryptedMessages} />
      </div>
    </div>
  );
}

export default App;
