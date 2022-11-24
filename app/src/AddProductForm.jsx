import React, { useEffect, useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

export default function AddProductForm() {
   const [name, setName] = useState("");
   const [location, setLocation] = useState("");
   const [description, setDescription] = useState("");
   const [id, setId] = useState("");
   const [day, setDay] = useState("");
   const [month, setMonth] = useState("");
   const [year, setYear] = useState("");
   const [hr, setHr] = useState("");
   const [min, setMin] = useState("");

   const CreateProductId = () => {
      let id = Math.floor(Math.random() * 100000000000);
      setId(`TRZ${id}`);
   };

   useEffect(() => {
      CreateProductId();
   }, []);

   return (
      <form>
         <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 ">
               Product Name
            </label>
            <input
               type="text"
               class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Product Name"
               required
               onChange={(e) => setName(e.target.value)}
            />
         </div>
         <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 ">
               location
            </label>
            <input
               type="text"
               class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="location"
               required
               onChange={(e) => setLocation(e.target.value)}
            />
         </div>
         <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 ">
               Description
            </label>
            <input
               type="text"
               class="disabled border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Description"
               required
               onChange={(e) => setDescription(e.target.value)}
            />
         </div>
         <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 ">
               Product ID
            </label>
            <input
               disabled="disabled"
               type="text"
               class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Product ID"
               required
               value={id}
            />
         </div>
         <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 ">
               Day
            </label>
            <input
               type="text"
               class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Day"
               required
               onChange={(e) => setDay(e.target.value)}
            />
         </div>
         <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 ">
               Month
            </label>
            <input
               type="text"
               class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Month"
               required
               onChange={(e) => setMonth(e.target.value)}
            />
         </div>
         <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 ">
               Year
            </label>
            <input
               type="text"
               class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Year"
               required
               onChange={(e) => setYear(e.target.value)}
            />
         </div>
         <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 ">
               Hours
            </label>
            <input
               type="text"
               class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Hours"
               required
               onChange={(e) => setHr(e.target.value)}
            />
         </div>
         <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 ">
               Minutes
            </label>
            <input
               type="text"
               class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Minutes"
               required
               onChange={(e) => setMin(e.target.value)}
            />
         </div>
         <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
         >
            Submit
         </button>
      </form>
   );
}
