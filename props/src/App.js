import React from "react";


function Btn({ text, onClick, fontSize = 10 }) {

  console.log(text, "was rendered")

  return <button
    onClick={onClick}
    style={{
      backgroundColor: "tomato",
      color: "white",
      padding: "10px 20px",
      border: 0,
      borderRadius: 10,
      fontSize,
    }}
  >{text}</button>
}

const MemorizedBtn = React.memo(Btn)

// Btn.propTypes = {
//   text: PropTypes.string,
//   fontSize: PropTypes.number,
// }

function App() {

  const [value, setValue] = React.useState("Save changes");
  const changeValue = () => setValue("Rever Changes")

  return (
    <div>
      <MemorizedBtn text={value} onClick={changeValue} fontSize={60} />
      <MemorizedBtn text="Continue" />
    </div>
  );
}

export default App;
