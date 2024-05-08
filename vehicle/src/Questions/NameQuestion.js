import React from "react";
import { Input } from "@mui/material";
function NameQuestion({ firstName, lastName, onChange, errorr }) {
  return (
    <form className="grid gap-6 mb-6">
      <div>
        <div className="text-3xl mb-6">First, What's your Name?</div>
        <label
          for="first_name"
          className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          First name
        </label>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John"
          required
          onChange={(e) => onChange("firstName", e.target.value)}
        />
      </div>
      <div>
        <label
          for="first_name"
          className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Last name
        </label>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Doe"
          required
          onChange={(e) => onChange("lastName", e.target.value)}
        />
      </div>
      {errorr.err ? <div className="text-red-400">{errorr.firstName}</div> : ""}
    </form>
  );
}

export default NameQuestion;
