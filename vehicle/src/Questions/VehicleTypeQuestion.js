import React, { useEffect, useState } from "react";
import axios from "axios";
function VehicleTypeQuestion({ vehicleTypes, selectedType, onChange, errorr }) {
  const [types, setTypes] = useState([]);
  const handletypes = async () => {
    axios
      .get("http://localhost:3000/api/vehicles/types")
      .then(function (response) {
        setTypes(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    handletypes();
  }, []);
  return (
    <div className="mb-6">
      <div className="text-3xl mb-6">Type of Vehicle:</div>
      {types?.map((type, index) => (
        <div key={index}>
          <input
            type="radio"
            id={type}
            name="vehicleType"
            value={type}
            onChange={() => onChange(type)}
          />
          &nbsp;&nbsp; <label htmlFor={type}>{type}</label>
        </div>
      ))}
      {errorr.err ? (
        <div className="text-red-400">{errorr.selectedVehicleType}</div>
      ) : (
        ""
      )}
    </div>
  );
}

export default VehicleTypeQuestion;
