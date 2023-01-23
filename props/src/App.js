

function Btn({ banana }) {

  return <button style={{
    backgroundColor: "tomato",
    color: "white",
    padding: "10px 20px",
    border: 0,
    borderRadius: 10,
  }}
  >{banana}</button>
}



function App() {
  return (
    <div>
      <Btn banana="Save Changes" />
      <Btn banana="Continue" />
    </div>
  );
}

export default App;
