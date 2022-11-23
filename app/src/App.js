import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  let name = "Rajat"
  return (
    <>
      <div className="tracking-tight bg-zinc-100">
        <Navbar />
        <div className="container mx-auto py-10 mt-28">
          <p className="text-4xl font-bold tracking-tight py-3">Hey {name}! 👋</p>
          <div className="max-w-md py-5 flex gap-1">

          <input type="text" class="outline-none rounded py-3 px-3 w-full border-blue-200 bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline" placeholder="Enter Product code" />
          <button className="uppercase bg-teal-600 px-5 py-5 text-white font-bold rounded">Traize</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
