import Bekkact, { useEffect, useState } from "@marauh/bekkact";
import BekkactDOM, { Element } from "@marauh/bekkact-dom";

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
      <p>Antall pakker: {antallPakker}</p>

      <div className="buttons">
        <button onClick={() => setAntallPakker((pakker) => pakker + 1)}>
          Legg til pakke
        </button>
        <button onClick={() => setAntallPakker((pakker) => pakker - 1)}>
          Fjern pakke
        </button>
      </div>

      <div>
        <input
          type="number"
          onChange={(e) => setAntallPakker(Number(e.target.value))}
        >
          {antallPakker}
        </input>
      </div>

      {antallPakker > 10 && <h2>Flere enn 10 pakker!</h2>}
    </div>
  );
}

const container = document.getElementById("root");
BekkactDOM.render((<App />) as Element, container);
