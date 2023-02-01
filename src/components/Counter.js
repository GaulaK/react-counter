const Counter = ({ counter, setCounter }) => {
  return (
    <>
      <div className="counter-boxes">
        <div>
          {" "}
          <div className="box">
            <button
              style={{ display: counter < 1 ? "none" : "inherit" }}
              onClick={() => setCounter(counter - 1)}
            >
              -
            </button>
          </div>
          <div className="box value">
            <span>{counter}</span>
          </div>
          <div className="box">
            <button
              style={{ display: counter > 9 ? "none" : "inherit" }}
              onClick={() => setCounter(counter + 1)}
            >
              +
            </button>
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
