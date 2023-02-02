const Counter = ({ counter, setCounter }) => {
  return (
    <>
      <div className="counter-boxes">
        <div>
          {" "}
          <div className="box">
            {counter > 0 && (
              <button onClick={() => setCounter(counter - 1)}>-</button>
            )}
          </div>
          <div className="box value">
            <span>{counter}</span>
          </div>
          <div className="box">
            {counter < 10 && (
              <button onClick={() => setCounter(counter + 1)}>+</button>
            )}
          </div>
        </div>
        <div>
          <button className="reset-button" onClick={() => setCounter(0)}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
