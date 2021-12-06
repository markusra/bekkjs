import Bekkact, { useEffect, useState } from "../packages/bekkact/src";
import BekkactDOM, { Element } from "../packages/bekkact-dom/src";

// @ts-ignore
import santa from "url:./santa.svg";
import "./index.scss";

function App() {
  return (
    <div id="foo">
      <h1>Pakketeller 🎁</h1>
      <Pakketeller />
    </div>
  );
}

function Pakketeller() {
  const [antallPakker, setAntallPakker] = useState(0);

  useEffect(() => {
    console.log("Antall pakker:", antallPakker);
  }, [antallPakker]);

  return (
    <div className="counter">
      <h2>Antall pakker: {antallPakker}</h2>

      <div className="pakke-buttons">
        <button onClick={() => setAntallPakker((pakker) => pakker + 1)}>
          + 1
        </button>
        <button onClick={() => setAntallPakker((pakker) => pakker - 1)}>
          - 1
        </button>
      </div>

      <div className="pakke-input">
        <label>Sett antall pakker</label>
        <input
          type="number"
          onChange={(e) => setAntallPakker(Number(e.target.value))}
        >
          {antallPakker}
        </input>
      </div>

      {antallPakker >= 24 && <img src={santa} alt="Julenissen" width="300" />}
    </div>
  );
}

const container = document.getElementById("root");
BekkactDOM.render((<App />) as Element, container);
