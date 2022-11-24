import "./App.css";
import MainInput from "./MainInput";
import Navbar from "./Navbar";
import Timeline from "./Timeline";

function App() {
  return (
    <>
        <Navbar />
      <div className="tracking-tight bg-zinc-100">
        <div className="container mx-auto px-5">
          
        <MainInput />
        </div>
      </div>
      <div className="container mx-auto px-5 py-10 bg-white">

        <Timeline />
      </div>

    </>
  );
}

export default App;
