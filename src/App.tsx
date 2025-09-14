import ButtonContainer from "./components/ButtonContainer"

function App() {
  return (
    <div className="mx-auto my-5 border rounded shadow p-4" style={{ maxWidth: "350px" }}>
      <ButtonContainer handleOnClick={() => { console.log("click!") }} />
    </div>
  )
}

export default App
