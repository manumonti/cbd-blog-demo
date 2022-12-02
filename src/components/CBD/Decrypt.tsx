import { providers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import React from "react";

function Decrypt({ depStrategy, encryptedMessage, setDecryptedMessage }: any) {
  const decrypt = async () => {
    setDecryptedMessage(null);
    const web3Provider = new providers.Web3Provider(window.ethereum);
      const conditionContext =
        depStrategy.encrypter.conditions.buildContext(web3Provider);

      const decrypter = depStrategy.decrypter;

      const decryptedMessages = await decrypter.retrieveAndDecrypt(
        [encryptedMessage],
        conditionContext
      );
      const postsJson = new TextDecoder().decode(decryptedMessages[0]);

      setDecryptedMessage(postsJson);
    // }
  };

  return (
    <button className="cbd-button" onClick={decrypt}>
      Step 4. Decrypt posts
    </button>
  );
}

export default Decrypt;
