import React from "react";

function Encrypt({ depStrategy, setEncryptedMessage }: any) {
  const encrypt = () => {
    const plaintext = "This is a secret";
    const encrypter = depStrategy.encrypter;
    if (encrypter) {
      setEncryptedMessage(encrypter.encryptMessage(plaintext))
    }
  };

  return (
    <button className="cbd-button" onClick={encrypt}>
      Step 3. Encrypt blog posts
    </button>
  );
}

export default Encrypt;
