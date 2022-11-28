import React from "react";
import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { providers } from "ethers";
import Posts from "./components/Posts";

import {
  Cohort,
  Conditions,
  ConditionSet,
  Strategy,
} from "@nucypher/nucypher-ts";

function App() {
  useEffect(() => {
    const cohortCreate = async () => {
      const config = {
        threshold: 3,
        shares: 5,
        porterUri: "https://porter-tapir.nucypher.community",
      };

      const nftBalanceCond = new Conditions.ERC721Balance({
        contractAddress: "0xf5de760f2e916647fd766B4AD9E85ff943cE3A2b",
        chain: 1,
      });

      const nftBalanceCondSet = new ConditionSet([nftBalanceCond]);

      Cohort.create(config).then((cohort) => {
        const newStrategy = Strategy.create(cohort, nftBalanceCondSet);

        detectEthereumProvider().then((metamaskProvider) => {
          const network = providers.getNetwork("maticmum");

          if (metamaskProvider) {
            const web3Provider = new providers.Web3Provider(
              metamaskProvider,
              network
            );

            console.time("Deploy");
            newStrategy.deploy("test", web3Provider).then((newDeployed) => {
              console.log(newDeployed);
              console.timeEnd("Deploy");
            });
          }
        });
      });
    };

    cohortCreate().catch(console.error);
  }, []);

  return (
    <div className="main-container">
      <h1 className="main-heading">Nucypher's CBD Blog Demo</h1>
      <Posts />
    </div>
  );
}

export default App;
