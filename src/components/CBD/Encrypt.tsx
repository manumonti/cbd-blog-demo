import React from "react";
import { Conditions, ConditionSet } from "@nucypher/nucypher-ts";
import {
  silverBlogPosts,
  bronzeBlogPosts,
  goldBlogPosts,
} from "../Blog/BlogData";

function Encrypt({ depStrategy, setEncryptedMessage }: any) {
  const buildERC721BalanceCondConfig = (balance: number) => {
    const config = {
      contractAddress: "0xf5de760f2e916647fd766B4AD9E85ff943cE3A2b",
      chain: 5,
      method: "balanceOf",
      parameters: [":userAddress"],
      returnValueTest: {
        comparator: ">=",
        value: balance,
      },
    };
    return config;
  };

  const encrypt = () => {
    setEncryptedMessage([]);

    const encrypter = depStrategy.encrypter;

    const conditionSilver = new Conditions.Condition(
      buildERC721BalanceCondConfig(1)
    );
    const conditionBronze = new Conditions.Condition(
      buildERC721BalanceCondConfig(2)
    );
    const conditionGold = new Conditions.Condition(
      buildERC721BalanceCondConfig(3)
    );

    const encryptedSilver = encrypter.encryptMessage(
      JSON.stringify(silverBlogPosts),
      new ConditionSet([conditionSilver])
    );
    const encryptedBronze = encrypter.encryptMessage(
      JSON.stringify(bronzeBlogPosts),
      new ConditionSet([conditionBronze])
    );
    const encryptedGold = encrypter.encryptMessage(
      JSON.stringify(goldBlogPosts),
      new ConditionSet([conditionGold])
    );

    setEncryptedMessage([encryptedSilver, encryptedBronze, encryptedGold]);
  };

  return (
    <button className="cbd-button" onClick={encrypt}>
      Step 3. Encrypt posts
    </button>
  );
}

export default Encrypt;
