import { useState } from "react";

function CountTest() {
  const [count, setCount] = useState(0);

  let CountUp = () => {
    setCount(count + 1);
  };

  return <button onClick={CountUp}>Result : {count} </button>;
}

export default CountTest;
