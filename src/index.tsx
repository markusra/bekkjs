import Didact, { Element, useEffect, useRef, useState } from "./didact";
import DidactDOM from "./didact-dom";

function Title(props: { name: string }) {
  useEffect(() => {
    console.log("hei");

    return () => {
      console.log("hei2");
    };
  }, []);

  return <Title2 name={props.name} />;
}

function Title2(props: { name: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  console.log("ref", ref);
  useEffect(() => {
    console.log("charlie 1");

    return () => {
      console.log("charlie 2");
    };
  }, []);

  return <h1 ref={ref}>Welcome to {props.name}</h1>;
}

function App() {
  return (
    <div id="foo">
      <p>
        foo<b>bar</b>
      </p>
      <Counter />
    </div>
  );
}

function Counter() {
  const [state, setState] = useState(0);

  return (
    <div className="counter">
      <h1>Counter</h1>
      <p>Current value: {state}</p>
      <input type="number" onChange={(e) => setState(Number(e.target.value))}>
        {state}
      </input>
      <div className="buttons">
        <button
          onClick={() => {
            setState((s) => s + 1);
          }}
        >
          +
        </button>
        <button onClick={() => setState((s) => s - 1)}>-</button>
      </div>
      {state < 2 && <Title name="Svein" />}
    </div>
  );
}

const container = document.getElementById("root");
DidactDOM.render((<App />) as Element, container);
