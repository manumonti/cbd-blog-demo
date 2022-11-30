import React from "react";
import { useState } from "react";
import { useEthers } from "@usedapp/core";
// import detectEthereumProvider from "@metamask/detect-provider";
// import { providers } from "ethers";
import StrategyBuilder from "./components/StrategyBuilder";
import Posts from "./components/Posts";
import CBDHeader from "./components/CBDHeader";

function App() {
  const { activateBrowserWallet, deactivate, account } = useEthers();
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <CBDHeader
        activateBrowserWallet={activateBrowserWallet}
        account={account}
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
// const cohortCreate = async () => {
//   const config = {
//     threshold: 3,
//     shares: 5,
//     porterUri: "https://porter-tapir.nucypher.community",
//   };

//   const nftBalanceCond = new Conditions.ERC721Balance({
//     contractAddress: "0xf5de760f2e916647fd766B4AD9E85ff943cE3A2b",
//     chain: 1,
//   });

//   const nftBalanceCondSet = new ConditionSet([nftBalanceCond]);

//   const cohort = await Cohort.create(config);

//   Cohort.create(config).then((cohort) => {
//     const newStrategy = Strategy.create(cohort, nftBalanceCondSet);

//     detectEthereumProvider().then((metamaskProvider) => {
//       const network = providers.getNetwork("maticmum");

//       if (metamaskProvider) {
//         const web3Provider = new providers.Web3Provider(
//           metamaskProvider,
//           network
//         );

//         console.time("Deploy");
//         newStrategy.deploy("test", web3Provider).then((newDeployed) => {
//           console.log(newDeployed);
//           console.timeEnd("Deploy");
//         });
//       }
//     });
//   });
// };

// cohortCreate().catch(console.error);

export default App;
