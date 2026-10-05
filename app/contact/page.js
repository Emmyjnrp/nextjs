"use client"; 
  //  we are using use client because we are using useState hook in this component.
import React from "react";
import { useState } from "react";

export default function Contactpage() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-2xl font-bold">{count}</p>
      <button
        onClick={increase}
        className="bg-blue-500 text-white p-2 rounded-lg cursor-pointer"
      >
        Increment
      </button>
    </div>
  );
}
