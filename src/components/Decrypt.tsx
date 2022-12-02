import React from "react";

function Decrypt({
  depStrategy,
  conditionContext,
  encryptedMessage,
  setDecryptedMessage,
}: any) {
  const decrypt = async () => {
    const decrypter = depStrategy.decrypter;
    const decryptedMessages = await decrypter.retrieveAndDecrypt(
      [encryptedMessage],
      conditionContext
    );
    const postsJson = new TextDecoder().decode(decryptedMessages[0]);

    setDecryptedMessage(postsJson);
  };

  return (
    <button className="cbd-button" onClick={decrypt}>
      Step 4. Decrypt posts
    </button>
  );
}

export default Decrypt;
