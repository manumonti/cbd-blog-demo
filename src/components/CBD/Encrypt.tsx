import React from "react";
import {
  silverBlogPosts,
  bronzeBlogPosts,
  goldBlogPosts,
} from "../Blog/BlogData";

function Encrypt({ depStrategy, setEncryptedMessage }: any) {
  const encrypt = () => {
    const encrypter = depStrategy.encrypter;
    if (encrypter) {
      setEncryptedMessage(
        encrypter.encryptMessage(JSON.stringify(silverBlogPosts))
      );
    }
  };

  return (
    <button className="cbd-button" onClick={encrypt}>
      Step 3. Encrypt posts
    </button>
  );
}

export default Encrypt;
