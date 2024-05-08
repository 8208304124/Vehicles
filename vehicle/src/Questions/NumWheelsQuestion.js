import React, { useEffect, useState } from "react";

function NumWheelsQuestion({ onChange, errorr }) {
  return (
    <div className="mb-6">
      <div className="text-3xl mb-6">Number of Wheels:</div>
      <div>
        <input
          type="radio"
          id="2-wheels"
          name="numWheels"
          value="2"
          onClick={() => onChange("numWheels", 2)}
        />
        &nbsp;&nbsp;<label htmlFor="2-wheels">2</label>
      </div>
      <div>
        <input
          type="radio"
          id="4-wheels"
          name="numWheels"
          value="4"
          onClick={() => onChange("numWheels", 4)}
        />
        &nbsp;&nbsp;<label htmlFor="4-wheels">4</label>
      </div>
      {errorr.err ? <div className="text-red-400">{errorr.numWheels}</div> : ""}
    </div>
  );
}

export default NumWheelsQuestion;
