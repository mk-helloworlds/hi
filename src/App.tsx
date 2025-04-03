import "./App.css";
import ASCIIText from "./components/ASCIIText";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"

function App() {
  console.log("Hello my name is MK");
  console.log("Try to find out more about me")
  return (
    <>
      <SpeedInsights />
      <Analytics />
      <div className="w-screen h-screen flex justify-center items-center">
        <ASCIIText text="hi" enableWaves={true} asciiFontSize={8} />
      </div>
    </>
  );
}

export default App;
