import { useState } from "react";

function CountComponent() {
  const [count, setCount] = useState(0);

  function handleInCrement() {
    setCount(count + 1);
  }

  function handleIndeCline() {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  }

  function Reset() {
    setCount(0);
  }
  return (
    <div>
      <button onClick={handleInCrement}>+</button>
      <input type="number" value={count} />
      <button onClick={handleIndeCline}>-</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default CountComponent;
