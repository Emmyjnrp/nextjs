"use client";
import React from "react";

export default function error(error, reset) {
  return (
    <div>
      <h1 className="text-2xl text-red-700">
        Error: Failed to fetch student data
      </h1>
      <button
        className="bg-blue-500 text-white p-2 rounded cursor-pointer"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
