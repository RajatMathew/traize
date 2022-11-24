import "./App.css";
import React, { useState, useEffect } from "react";
import MainInput from "./MainInput";
import Navbar from "./Navbar";
import Timeline from "./Timeline";

import AddProductForm from "./AddProductForm";

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
            <div>
               <AddProductForm />
            </div>
         </div>
      </>
   );
}

export default App;
