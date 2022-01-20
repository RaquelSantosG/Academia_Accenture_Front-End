import React, { useState } from "react";
import Exemplo01 from "./Exemplo01";
import Exemplo02 from "./Exemplo02";
import Exemplo03 from "./Exemplo03";

function App() {
  const [flag, setFlag] = useState(false);

  return (
    <>
      {/* <Exemplo01 /> */}
      {/* <Exemplo02 /> */}

      {flag && <Exemplo03 />}
      <button onClick={() => setFlag(true)}>Montar</button>
      <button onClick={() => setFlag(false)}>Desmontar</button>
    </>
  );
}

export default App;
