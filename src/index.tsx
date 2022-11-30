import React from "react";
import ReactDOM from "react-dom";
import { DAppProvider, Config, Goerli } from "@usedapp/core";
import "./index.css";
import App from "./App";

const config: Config = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      "https://goerli.infura.io/v3/a11313ddcf61443898b6a47e952d255c",
  },
  networks: [Goerli],
};

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
