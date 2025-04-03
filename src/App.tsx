import "./App.css";
import ASCIIText from "./components/ASCIIText";

function App() {
  console.log("Hello my name is MK");
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-red-50">
        <ASCIIText text="hi" enableWaves={true} asciiFontSize={8} />
      </div>
    </>
  );
}

export default App;
