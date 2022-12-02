import React from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { providers } from "ethers";
import {
  Cohort,
  Conditions,
  ConditionSet,
  Strategy,
} from "@nucypher/nucypher-ts";

function StrategyBuilder({ setDepStrategy }: any) {
  const strategyBuild = async () => {
    setDepStrategy("deploying...");

    const cohortConfig = {
      threshold: 3,
      shares: 5,
      porterUri: "https://porter-tapir.nucypher.community",
    };

    const cohort = await Cohort.create(cohortConfig);

    const conditionSilver = new Conditions.ERC721Balance({
      contractAddress: "0xf5de760f2e916647fd766B4AD9E85ff943cE3A2b",
      chain: 5,
      returnValueTest: {
        comparator: ">",
        value: "0",
      },
    });
    const conditionBronze = new Conditions.ERC721Balance({
      contractAddress: "0xf5de760f2e916647fd766B4AD9E85ff943cE3A2b",
      chain: 5,
      returnValueTest: {
        comparator: ">",
        value: "1",
      },
    });
    const conditionGold = new Conditions.ERC721Balance({
      contractAddress: "0xf5de760f2e916647fd766B4AD9E85ff943cE3A2b",
      chain: 5,
      returnValueTest: {
        comparator: ">",
        value: "2",
      },
    });
    const conditionsSilver = new ConditionSet([conditionSilver]);
    const conditionsBronze = new ConditionSet([conditionBronze]);
    const conditionsGold = new ConditionSet([conditionGold]);

    const strategySilver = Strategy.create(cohort, conditionsSilver);
    const strategyBronze = Strategy.create(cohort, conditionsBronze);
    const strategyGold = Strategy.create(cohort, conditionsGold);

    const mmProvider = await detectEthereumProvider();
    const network = providers.getNetwork("maticmum");
    if (mmProvider) {
      const web3Provider = new providers.Web3Provider(mmProvider, network);

      const deployedStrategySilverProm = strategySilver.deploy(
        "blog-subscription-silver",
        web3Provider
      );

      const deployedStrategyBronzeProm = strategyBronze.deploy(
        "blog-subscription-bronze",
        web3Provider
      );

      const deployedStrategyGoldProm = strategyGold.deploy(
        "blog-subscription-gold",
        web3Provider
      );

      const deployedStrategySilver = await deployedStrategySilverProm;
      console.log(deployedStrategySilver);
      const deployedStrategyBronze = await deployedStrategyBronzeProm;
      console.log(deployedStrategyBronze);
      const deployedStrategyGold = await deployedStrategyGoldProm;
      console.log(deployedStrategyGold);

      setDepStrategy([
        deployedStrategySilver,
        deployedStrategyBronze,
        deployedStrategyGold,
      ]);
    }
  };

  return (
    <button className="cbd-button" onClick={strategyBuild}>
      Step 2. Deploy Strategy
    </button>
  );
}

export default StrategyBuilder;
