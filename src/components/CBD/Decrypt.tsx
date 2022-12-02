import { providers } from "ethers";
import React from "react";

function Decrypt({ depStrategy, encryptedMessage, setDecryptedMessage }: any) {
  const decrypt = async () => {

    setDecryptedMessage(null);

    let posts: Object[] = [];

    const web3Provider = new providers.Web3Provider(window.ethereum);

    const conditionContextSilver = depStrategy[0]
      ? depStrategy[0].encrypter.conditions.buildContext(web3Provider)
      : null;
    const conditionContextBronze = depStrategy[1]
      ? depStrategy[1].encrypter.conditions.buildContext(web3Provider)
      : null;
    const conditionContextGold = depStrategy[2]
      ? depStrategy[2].encrypter.conditions.buildContext(web3Provider)
      : null;

    const decrypterSilver = depStrategy[0] ? depStrategy[0].decrypter : null;
    const decrypterBronze = depStrategy[1] ? depStrategy[1].decrypter : null;
    const decrypterGold = depStrategy[2] ? depStrategy[2].decrypter : null;

    if (conditionContextSilver && decrypterSilver) {
      try {
        const decryptedMessages = await decrypterSilver.retrieveAndDecrypt(
          [encryptedMessage[0]],
          conditionContextSilver,
        );
        const silverPostsString = new TextDecoder().decode(decryptedMessages[0]);
        const silverPosts = JSON.parse(silverPostsString);
        posts = posts.concat(silverPosts)
      } catch (err) {
        console.warn("No silver decryption");
        console.warn(err)
      }
    }

    if (conditionContextBronze && decrypterBronze) {
      try {
        const decryptedMessages = await decrypterBronze.retrieveAndDecrypt(
          [encryptedMessage[1]],
          conditionContextBronze,
        );
        const bronzePostsString = new TextDecoder().decode(decryptedMessages[1]);
        const bronzePosts = JSON.parse(bronzePostsString);
        posts = posts.concat(bronzePosts)
      } catch (err) {
        console.warn("No bronze decryption");
        console.warn(err)
      }
    }

    if (conditionContextGold && decrypterGold) {
      try {
        const decryptedMessages = await decrypterGold.retrieveAndDecrypt(
          [encryptedMessage[2]],
          conditionContextGold,
        );
        const goldPostsString = new TextDecoder().decode(decryptedMessages[2]);
        const goldPosts = JSON.parse(goldPostsString);
        posts = posts.concat(goldPosts)
      } catch (err) {
        console.warn("No gold decryption");
        console.warn(err)
      }
    }
    setDecryptedMessage(JSON.stringify(posts));
  };

  return (
    <button className="cbd-button" onClick={decrypt}>
      Step 4. Decrypt posts
    </button>
  );
}

export default Decrypt;
