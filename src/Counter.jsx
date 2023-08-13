import { React, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCounter = (e) => {
    if (e.target.innerHTML === "Decrease")
    {
      setCount(count - 1);
    }
    if (e.target.innerHTML === "Increase")
    {
      setCount(count + 2);
    }
    if (e.target.innerHTML === "reset")
    {
      setCount(0);
    }
  };
  return (
    <>
      <div className="text-center">
        <h1>Counter </h1>
        <p>{count}</p>
        <button onClick={handleCounter} className="btn mx-3 my-5 btn-primary ">
          Decrease
        </button>
        <button onClick={handleCounter} className="btn mx-3 my-5 btn-warning">
          reset
        </button>
        <button onClick={handleCounter} className="btn mx-3 my-5 btn-success">
          Increase
        </button>
      </div>
    </>
  );
};

export default Counter;
