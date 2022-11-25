import React, { useState, useEffect } from "react";

import { TraizeContractAddress } from "./config";
import { ethers } from "ethers";
import TaskABI from "./utils/TraizeContract.json";

export default function MainInput() {
   let name = "Rajat";

   const [products, setProducts] = useState([]);

   const [prodcode, setProdCode] = useState("");

   const getProductDetails = async (id) => {
      console.warn(id);
      id = prodcode;
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
            [{ name }] = productDetails;

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

   return (
      <div className="py-10 mt-28">
         <p className="font-bold tracking-tight text-gray-600">
            Hey {name}! 👋
         </p>
         <p className="text-5xl font-bold tracking-tight py-3">
            Track your foods here!{" "}
         </p>

         <div className="max-w-md py-5 flex gap-1">
            <input
               type="text"
               class="outline-none rounded py-3 px-3 w-full border-blue-200 bg-white shadow border-2 border-transparent focus:border-2 focus:border-blue-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
               placeholder="Enter Product code"
               value={prodcode}
               onChange={(e) => {
                  setProdCode(e.target.value);
               }}
            />
            <button
               onClick={getProductDetails}
               className="uppercase bg-teal-600 px-5 py-5 text-white font-bold rounded hover:bg-teal-900"
            >
               Traize
            </button>
         </div>
      </div>
   );
}
