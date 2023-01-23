import { useState, useEffect } from "react";
import Button from "./Button";

function Hello() {
  useEffect(() => {
    console.log("created");
    return () => console.log("destroyed");
  }, []);
  return <h1>Hello</h1>
}

function App() {

  const [value, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const [veiwing, setVewing] = useState(false);

  const choosen = () => {

    setVewing((prev) => !prev)
  }

  const onChange = (e) => {
    setKeyword(e.target.value)
  }

  const onClick = () => {
    setValue((prev) => prev + 1);
  }




  // const iRunOnlyOnce = () => {
  //   console.log("i run only once")
  // }

  useEffect(() => { console.log("Call the API") }, [])

  useEffect(() => { if (keyword.length > 5) { console.log("Search for ", keyword) } }, [keyword])
  useEffect(() => { if (value !== 0) { console.log("i appear only value changed", value) } }, [value])



  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{value}</h1>
      <button onClick={onClick}>click me</button>
      <hr />
      <div>{veiwing ? <Hello /> : null}</div>
      <button onClick={choosen} >{veiwing ? "hiding" : "showing"}</button>
    </div>
  );
}

export default App;
