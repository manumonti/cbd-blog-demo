import React from "react";
import { providers } from "ethers";

const subscription = ["bronze", "silver", "gold"];

function Decrypt({
  depStrategy,
  conditionSets,
  encryptedMessages,
  setDecryptedMessages,
}: any) {
  const decrypt = async () => {
    setDecryptedMessages([]);

    let blogPosts: Object[] = [];
    const web3Provider = new providers.Web3Provider(window.ethereum);
    const decrypter = depStrategy.decrypter;

    for (let i = 0; i < encryptedMessages.length; i++) {
      const conditionContext = conditionSets[i].buildContext(web3Provider);
      try {
        const decryptedMessage = await decrypter.retrieveAndDecrypt(
          [encryptedMessages[i]],
          conditionContext
        );
        const decoded = new TextDecoder().decode(decryptedMessage[0]);
        const posts = JSON.parse(decoded);
        blogPosts = blogPosts.concat(posts);
      } catch (err) {
        console.log(`No ${subscription[i]} subscription decryption`)
        console.log(err);
      }
    }

    setDecryptedMessages(JSON.stringify(blogPosts));
  };

  return (
    <button className="cbd-button" onClick={decrypt}>
      Step 4. Decrypt posts
    </button>
  );
}

export default Decrypt;
