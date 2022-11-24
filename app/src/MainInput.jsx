import React from "react";

export default function MainInput() {
  let name = "Rajat"

  return (
    <div className="py-10 mt-28">
      <p className="font-bold tracking-tight text-gray-600">Hey {name}! 👋</p>
      <p className="text-5xl font-bold tracking-tight py-3">Track your foods here! </p>

      <div className="max-w-md py-5 flex gap-1">
        <input
          type="text"
          class="outline-none rounded py-3 px-3 w-full border-blue-200 bg-white shadow border-2 border-transparent focus:border-2 focus:border-blue-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
          placeholder="Enter Product code"
        />
        <button className="uppercase bg-teal-600 px-5 py-5 text-white font-bold rounded hover:bg-teal-900">
          Traize
        </button>
      </div>
    </div>
  );
}
