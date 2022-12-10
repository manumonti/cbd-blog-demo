import React from "react";
import { useState } from "react";
import Posts from "./components/Blog/Posts";
import CBDHeader from "./components/CBD/CBDHeader";

function App() {
  const [decryptedMessage, setDecryptedMessage] = useState(null);

  return (
    <div>
      <CBDHeader
        decryptedMessage={decryptedMessage}
        setDecryptedMessage={setDecryptedMessage}
      />
      <div>
        <div className="blog-header">
          <h1>Alpha leaks demo</h1>
        </div>
        <Posts decryptedMessage={decryptedMessage} />
      </div>
    </div>
  );
}

export default App;
