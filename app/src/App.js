import "./App.css";
import React, { useState, useEffect } from "react";
import MainInput from "./MainInput";
import Navbar from "./Navbar";
import Timeline from "./Timeline";

import { TraizeContractAddress } from "./config";
import { ethers } from "ethers";
import TaskABI from "./utils/TraizeContract.json";

function App() {
   const [products, setProducts] = useState([]);
   const [correctNetwork, setCorrectNetwork] = useState("");
   const [currentAccount, setCurrentAccount] = useState("");

   const connectWallet = async () => {
      try {
         const { ethereum } = window;
         if (!ethereum) {
            console.log("metamask not detected");
            return;
         }

         let chainId = await ethereum.request({ method: "eth_chainId" });
         console.log("Connected to chain:" + chainId);
         const localhostChainId = "0x7a69";
         const goerliChainId = "0x5";

         if (chainId !== localhostChainId) {
            alert("You are not connected to the localhost network! sidd");
            return;
         } else {
            setCorrectNetwork(true);
         }

         const account = await ethereum.request({
            method: "eth_requestAccounts",
         });
         setCurrentAccount(account[0]);
      } catch (error) {
         console.log(error);
      }
   };

   const getProductDetails = async (id) => {
      id = 1223;
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

            let productDetails = await TraizeContract.getSingleProductDetail(
               id
            );
            setProducts(productDetails);
            console.log(productDetails);
            <p>{{ productDetails }}</p>;
         } else {
            console.log("Ethereum object doesn't exist");
         }
      } catch (error) {
         console.log(error);
      }
   };

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
            <Timeline />
         </div>
         <div>
            <button
               className="text-2xl font-bold py-3 px-12 bg-[#f1c232] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out"
               onClick={connectWallet}
            >
               Connect Wallet
            </button>

            <button onClick={getProductDetails}>GetProduct </button>
            <button onClick={addProducts}>addProduct </button>
         </div>
      </>
   );
}

export default App;
