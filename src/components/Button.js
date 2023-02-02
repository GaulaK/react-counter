const Button = ({ counter, setCounter, calculate }) => {
  if (calculate === "-") {
    return <button onClick={() => setCounter(counter - 1)}>-</button>;
  } else if (calculate === "+") {
    return <button onClick={() => setCounter(counter + 1)}>+</button>;
  }
};
export default Button;
