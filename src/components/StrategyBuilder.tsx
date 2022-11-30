import React from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { providers } from "ethers";
import {
  Cohort,
  Conditions,
  ConditionSet,
  Strategy,
} from "@nucypher/nucypher-ts";

function StrategyBuilder({ setStrategyDeploying }: any) {
  const strategyBuild = async () => {
    setStrategyDeploying("Deploying...");

    const cohortConfig = {
      threshold: 3,
      shares: 5,
      porterUri: "https://porter-tapir.nucypher.community",
    };

    const cohort = await Cohort.create(cohortConfig);

    const condition = new Conditions.ERC721Balance({
      contractAddress: "0xf5de760f2e916647fd766B4AD9E85ff943cE3A2b",
      chain: 1,
    });

    const conditions = new ConditionSet([condition]);

    const strategy = Strategy.create(cohort, conditions);

    const MMProvider = await detectEthereumProvider();
    const network = providers.getNetwork("maticmum")
    if (MMProvider) {
      const web3Provider = new providers.Web3Provider(MMProvider, network);
      const deployedStrategy = await strategy.deploy("blog-subscription", web3Provider);
      setStrategyDeploying(deployedStrategy.label);
    }

  };

  return (
    <button className="cbd-buttons" onClick={strategyBuild}>
      Step 2. Deploy Strategy
    </button>
  );
}

export default StrategyBuilder;
