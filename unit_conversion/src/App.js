import React from "react";

function MinutesToHours() {
  const [amount, setAmount] = React.useState(0)
  const [flipped, setFlipped] = React.useState(false)

  const onChange = (e) => {
    setAmount(e.target.value)
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

function KmToMiles() {

  const [km, setKm] = React.useState(0)
  const [flipped, setFlipped] = React.useState(false)

  const onChange = (e) => {
    setKm(e.target.value)
  }

  const reset = (e) => {
    setKm(0)
  }

  const flip = (e) => {
    setFlipped(!flipped)
    reset()
  }

  // 1km = 0.621371
  return (
    <div>
      <label>km</label>
      <input disabled={flipped} onChange={onChange} value={km} type="number" />
      <br />
      <br />
      <label>mile</label>
      <input disabled={!flipped} onChange={onChange} value={km * 0.621371} type="number" />
      <br />
      <button onClick={reset}>reset</button>
      <button onClick={flip}>{flipped ? "Turn back" : "flip"}</button>

    </div>
  );





}

function App() {

  const [index, setIndex] = React.useState("0")
  const onSelect = (e) => {
    setIndex(e.target.value)
  }



  return (
    <div>
      <h1> Hi! Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="0">select</option>
        <option value="1"> Minutes & Hours</option>
        <option value="2">KM & Miles</option>
      </select>
      <hr />
      {index === "0" ? "Please select unit!" : null}
      {index === "1" ? <MinutesToHours /> : null}
      {index === "2" ? <KmToMiles /> : null}
    </div>
  );
}

export default App;
