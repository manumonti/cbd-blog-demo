import React from "react";
import {
  silverBlogPosts,
  bronzeBlogPosts,
  goldBlogPosts,
} from "../Blog/BlogData";

function Encrypt({ depStrategy, setEncryptedMessage }: any) {
  const encrypt = () => {
    let encryptedMessage = [];

    const encrypterSilver = depStrategy[0] ? depStrategy[0].encrypter : null;
    const encrypterBronze = depStrategy[1] ? depStrategy[1].encrypter : null;
    const encrypterGold = depStrategy[2] ? depStrategy[2].encrypter : null;

    if (encrypterSilver) {
      encryptedMessage.push(
        encrypterSilver.encryptMessage(JSON.stringify(silverBlogPosts))
      );
    }
    if (encrypterBronze) {
      encryptedMessage.push(
        encrypterBronze.encryptMessage(JSON.stringify(bronzeBlogPosts))
      );
    }
    if (encrypterGold) {
      encryptedMessage.push(
        encrypterGold.encryptMessage(JSON.stringify(goldBlogPosts))
      );
    }
    setEncryptedMessage(encryptedMessage);
    console.log(encryptedMessage);
  };

  return (
    <button className="cbd-button" onClick={encrypt}>
      Step 3. Encrypt posts
    </button>
  );
}

export default Encrypt;
