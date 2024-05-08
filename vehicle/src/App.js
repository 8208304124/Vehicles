import React, { useState, useEffect } from "react";
import "./App.css";
import NameQuestion from "./Questions/NameQuestion";
import NumWheelsQuestion from "./Questions/NumWheelsQuestion";
import VehicleTypeQuestion from "./Questions/VehicleTypeQuestion";
import VehicleModelQuestion from "./Questions/VehicleModelQuestion";
import DateRangePickerQuestion from "./Questions/DateRangePickerQuestion";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    numWheels: "",
    selectedVehicleType: "",
    selectedVehicleModel: "",
    startDate: null,
    endDate: null,
  });
  const [errors, setErrors] = useState([
    { firstName: "First Name and Last Name required", err: false },
    { numWheels: "Number of Wheels required", err: false },
    { selectedVehicleType: "Type of Vehicle is required", err: false },
    { selectedVehicleModel: "Vehicle Model is required", err: false },
    { date: "Date Range is Required", err: false },
  ]);
  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const changeError = () => {
    errors[currentPage - 1].err = true;
    setErrors([...errors]);
  };
  const handleNextPage = () => {
    console.log(currentPage, errors);
    if (currentPage === 1) {
      if (formData.firstName === "" || formData.lastName === "") {
        changeError();
      } else {
        errors[currentPage - 1].err = false;
        setCurrentPage(currentPage + 1);
      }
    }
    if (currentPage === 2) {
      if (formData.numWheels === "") {
        changeError();
      } else {
        errors[currentPage - 1].err = false;
        setCurrentPage(currentPage + 1);
      }
    }
    if (currentPage === 3) {
      if (formData.selectedVehicleType === "") {
        changeError();
      } else {
        errors[currentPage - 1].err = false;
        setCurrentPage(currentPage + 1);
      }
    }
    if (currentPage === 4) {
      if (formData.selectedVehicleModel === "") {
        changeError();
      } else {
        errors[currentPage - 1].err = false;
        setCurrentPage(currentPage + 1);
      }
    }
    if (currentPage === 5) {
      if (formData.startDate === null || formData.endDate === null) {
        changeError();
      } else {
        errors[currentPage - 1].err = false;
        setCurrentPage(currentPage + 1);
      }
    }
  };
  return (
    <div className="m-10">
      {currentPage === 1 && (
        <NameQuestion
          firstName={formData.firstName}
          lastName={formData.lastName}
          onChange={handleInputChange}
          errorr={errors[currentPage - 1]}
        />
      )}
      {currentPage === 2 && (
        <NumWheelsQuestion
          numWheels={formData.numWheels}
          onChange={handleInputChange}
          errorr={errors[currentPage - 1]}
        />
      )}
      {currentPage === 3 && (
        <VehicleTypeQuestion
          vehicleTypes={formData.vehicleTypes}
          selectedType={formData.numWheels}
          onChange={(value) => handleInputChange("selectedVehicleType", value)}
          errorr={errors[currentPage - 1]}
        />
      )}
      {currentPage === 4 && (
        <VehicleModelQuestion
          vehicleType={formData.selectedVehicleType}
          numWheels={formData.numWheels}
          onChange={(value) => handleInputChange("selectedVehicleModel", value)}
          errorr={errors[currentPage - 1]}
        />
      )}
      {currentPage === 5 && (
        <DateRangePickerQuestion
          model={formData.selectedVehicleModel}
          vehicleType={formData.selectedVehicleType}
          numWheels={formData.numWheels}
          onChange={handleInputChange}
          setErrorrs={setErrors}
          errorr={errors}
        />
      )}
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handleNextPage}
      >
        {currentPage < 5 ? "Next" : "Submit"}
      </button>
    </div>
  );
}

export default App;
