import "./App.css";
import React, { useState, useEffect } from "react";
import MainInput from "./MainInput";
import Navbar from "./Navbar";
import Timeline from "./Timeline";

import { TraizeContractAddress } from "./config";
import { ethers } from "ethers";
import TaskABI from "./utils/TraizeContract.json";
import AddProductForm from "./AddProductForm";

function App() {
   const [products, setProducts] = useState([]);

   const addProducts = async () =>
      // name,
      // location,
      // uid,
      // day,
      // month,
      // year,
      // hr,
      // min
      {
         let name = "sid";
         let location = "india";
         let id = 1223;
         let day = 12;
         let month = 7;
         let year = 3;
         let hr = 8;
         let min = 7;

         try {
            const { ethereum } = window;

            if (ethereum) {
               const provider = new ethers.providers.Web3Provider(ethereum);
               const signer = provider.getSigner();
               const TraizeContract = new ethers.Contract(
                  TraizeContractAddress,
                  TaskABI.abi,
                  signer
               );

               let itemValues = {
                  name,
                  location,
                  id,
                  day,
                  month,
                  year,
                  hr,
                  min,
               };

               TraizeContract.addUserProduct(
                  itemValues.name,
                  itemValues.location,
                  itemValues.id,
                  itemValues.day,
                  itemValues.month,
                  itemValues.year,
                  itemValues.hr,
                  itemValues.min
               )
                  .then((response) => {
                     console.log(response);
                     setProducts([...products, itemValues]);
                     console.log("Completed Task");
                  })
                  .catch((err) => {
                     console.log("Error occured while adding a new task", err);
                  });
            } else {
               console.log("Ethereum object doesn't exist");
            }
         } catch (error) {
            console.log(error);
         }
      };

   return (
      <>
         <Navbar />
         <div className="tracking-tight bg-zinc-100">
            <div className="container mx-auto px-5">
               <MainInput />
            </div>
         </div>
         <div className="container mx-auto px-5 py-10 bg-white">
            <button
               onClick={addProducts}
               className="text-md text-white font-bold py-2 px-5 bg-teal-700 hover:bg-teal-900 rounded-lg "
            >
               Add Product{" "}
            </button>
            <Timeline />
            <div>
               <AddProductForm />
            </div>
         </div>
      </>
   );
}

export default App;
