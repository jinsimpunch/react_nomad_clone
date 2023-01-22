import React from "react";


function App() {

  const [amount, setAmount] = React.useState()
  const [flipped, setFlipped] = React.useState(false)

  const onChange = (e) => {
    setAmount(e.target.value)
    console.log(e.target.value)
  }

  const reset = () => {
    setAmount(0);
  }

  const onFlip = () => {
    reset()
    setFlipped((current) => !current)
  }


  return (
    <div>
      <h1> Hi! Super Converter</h1>
      <label htmlFor="amount">minutes</label>
      <input disabled={flipped} onChange={onChange} value={flipped ? amount * 60 : amount} id="amount" placeholder="amount" type="number" />
      <h2>you enter this {amount} amount!</h2>
      <label htmlFor="hours">Hours</label>
      <input onChange={onChange} disabled={!flipped} value={flipped ? amount : amount / 60} id="hours" placeholder="Hours" type="number" />
      <br />
      <button onClick={reset}>reset</button>
      <button onClick={onFlip}>{flipped ? "Turn back" : "Invert"}</button>
    </div>
  );
}

export default App;
