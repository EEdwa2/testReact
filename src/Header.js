import React from "react";
import "./Header.css";

function Header() {
  const [time, setTime] = React.useState();
  React.setInterval(() => {
    tick();
  }, 1000);

  function mathh(numbers) {
    return numbers.firstNumber + numbers.secondNumber;
  }
  const numbers = {
    firstNumber: 30,
    secondNumber: 120,
  };

  function tick() {
    const localTime = new Date().toLocaleTimeString();
    setTime(localTime);
  }

  const headerText = "viwhviwehfoeho";
  const text2 = `${headerText}TEXT`;
  const elem = <h1>Hello world</h1>;
  //   const timeString = `Time is ${time}`;
  return (
    <div className="Header">
      <div>{elem}</div>
      <div>{time}</div>
      {mathh(numbers)}
    </div>
  );
}
export default Header;
