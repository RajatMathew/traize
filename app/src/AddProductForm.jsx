import React from "react";

export default function AddProductForm() {
   return (
      <form>
         <div class="mb-6">
            <label
               for="email"
               class="block mb-2 text-sm font-medium text-gray-900 "
            >
               Product Name
            </label>
            <input
               type="email"
               id="email"
               class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="name@flowbite.com"
               required
            />
         </div>
         <div class="mb-6">
            <label
               for="email"
               class="block mb-2 text-sm font-medium text-gray-900 "
            >
               Current Location
            </label>
            <input
               type="email"
               id="email"
               class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="name@flowbite.com"
               required
            />
         </div>
         <div class="mb-6">
            <label
               for="email"
               class="block mb-2 text-sm font-medium text-gray-900 "
            >
               Day
            </label>
            <input
               type="email"
               id="email"
               class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="name@flowbite.com"
               required
            />
         </div>
         <div class="mb-6">
            <label
               for="email"
               class="block mb-2 text-sm font-medium text-gray-900 "
            >
               Month
            </label>
            <input
               type="email"
               id="email"
               class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="name@flowbite.com"
               required
            />
         </div>
         <div class="mb-6">
            <label
               for="email"
               class="block mb-2 text-sm font-medium text-gray-900 "
            >
               Year
            </label>
            <input
               type="email"
               id="email"
               class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="name@flowbite.com"
               required
            />
         </div>
         <div class="mb-6">
            <label
               for="email"
               class="block mb-2 text-sm font-medium text-gray-900 "
            >
               Hour
            </label>
            <input
               type="email"
               id="email"
               class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="name@flowbite.com"
               required
            />
         </div>
         <div class="mb-6">
            <label
               for="email"
               class="block mb-2 text-sm font-medium text-gray-900 "
            >
               Minute
            </label>
            <input
               type="email"
               id="email"
               class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="name@flowbite.com"
               required
            />
         </div>

         <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
               <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4  rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
               />
            </div>
            <label
               for="remember"
               class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
               Verified
            </label>
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
