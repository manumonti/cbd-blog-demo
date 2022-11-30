import React from "react";

import {
  Cohort,
  Conditions,
  ConditionSet,
  Strategy,
} from "@nucypher/nucypher-ts";

function StrategyBuilder({ setLoading }: any) {
  const strategyBuild = async () => {
    setLoading(true);

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

    const conditionSet = new ConditionSet([condition]);

    const strategy = Strategy.create(cohort, conditionSet);
    console.log(strategy);

    // const deployedStrategy = await strategy.deploy("ERC721Balance", provider);

    setLoading(false);
  };

  return <button onClick={strategyBuild}>1. Deploy Strategy</button>;
}

export default StrategyBuilder;
