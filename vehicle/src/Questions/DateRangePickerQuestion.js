import React, { useEffect, useState } from "react";
import axios from "axios";
function DateRangePickerQuestion({
  model,
  vehicleType,
  numWheels,
  onChange,
  errorr,
  setErrorrs,
}) {
  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleDate = async () => {
    const startDate = new Date("2024-05-10");
    const endDate = new Date("2024-05-20");

    if (startDate < endDate) {
      setError1(true);
    } else {
      setError1(false);
    }
    axios
      .get("http://localhost:3000/api/vehicles/checkDate", {
        params: {
          type: numWheels,
          company: vehicleType,
          model: model,
          startDate: startDate,
          endDate: endDate,
        },
      })
      .then(function (response) {
        setError(!response.data.isAvailable);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    if (endDate !== "") handleDate();
    errorr[4].err = false;
    setErrorrs([...errorr]);
  }, [startDate]);

  useEffect(() => {
    if (startDate !== "") {
      handleDate();
    }
    errorr[4].err = false;
    setErrorrs([...errorr]);
  }, [endDate]);
  return (
    <div className="mb-6">
      <div className="text-3xl mb-6">Select Date - </div>
      <div>
        Start date: &nbsp;&nbsp;&nbsp;
        <input
          type="date"
          onChange={(e) => {
            setStartDate(e.target.value);
            onChange("startDate", e.target.value);
          }}
        />
      </div>
      <div>
        End Date: &nbsp;&nbsp;&nbsp;
        <input
          type="date"
          onChange={(e) => {
            setEndDate(e.target.value);
            onChange("endDate", e.target.value);
          }}
        />
      </div>
      {error ? (
        <div className="text-red-400"> The Date is Already Taken..!!</div>
      ) : (
        ""
      )}
      {error1 ? (
        <div className="text-red-400">
          {" "}
          The End date should be greater than Start Date..
        </div>
      ) : (
        ""
      )}
      {errorr[4].err ? (
        <div className="text-red-400">{errorr[4].date}</div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DateRangePickerQuestion;
