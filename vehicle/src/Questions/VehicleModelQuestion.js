import React, { useEffect, useState } from "react";
import axios from "axios";
function VehicleModelQuestion({ vehicleType, numWheels, onChange, errorr }) {
  const [models, setModels] = useState([]);
  const handleModels = async () => {
    axios
      .get("http://localhost:3000/api/vehicles/models", {
        params: {
          type: numWheels == 2 ? "bike" : "car",
          company: vehicleType,
        },
      })
      .then(function (response) {
        setModels(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    handleModels();
  }, []);
  return (
    <div className="mb-6">
      <div className="text-3xl mb-6">Specific Model:</div>
      {models.map((model, index) => (
        <div key={index}>
          <input
            type="radio"
            name="vehicleModel"
            value={model.model}
            onChange={() => onChange(model.model)}
          />
          &nbsp;&nbsp;<label>{model.model}</label>
        </div>
      ))}
      {errorr.err ? (
        <div className="text-red-400">{errorr.selectedVehicleModel}</div>
      ) : (
        ""
      )}
    </div>
  );
}

export default VehicleModelQuestion;
