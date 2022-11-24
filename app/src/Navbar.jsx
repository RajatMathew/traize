import React from "react";
import { useState, useEffect } from "react";

export default function Navbar() {
   const [correctNetwork, setCorrectNetwork] = useState("");
   const [currentAccount, setCurrentAccount] = useState("");
   const [btnText, setBtnText] = useState("Connect Wallet");

   const connectWallet = async () => {
      try {
         const { ethereum } = window;
         if (!ethereum) {
            alert("Metamask not detected");
            return;
         } else {
            setBtnText("Connected!");
            alert("Wallet is already connected!");
         }

         let chainId = await ethereum.request({ method: "eth_chainId" });
         console.log("Connected to chain:" + chainId);
         const localhostChainId = "0x7a69";
         const goerliChainId = "0x5";

         if (chainId !== goerliChainId) {
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
         alert(error);
      }
   };

   return (
      <div className="py-10 w-full border-b-2 bg-white fixed top-0 z-10">
         <div className="container mx-auto px-5 flex justify-between">
            <h1 className="logo text-2xl font-bold">traize.</h1>
            <button
               className="text-md text-white font-bold py-2 px-5 bg-teal-700 hover:bg-teal-900 rounded-lg "
               onClick={connectWallet}
            >
               {btnText}
            </button>
         </div>
      </div>
   );
}
