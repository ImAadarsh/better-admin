import React, { useState, useEffect } from "react";
import axios from "axios";
export default function ManageDoctors() {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    axios
      .get("https://backend-update-production.up.railway.app/api/doctors")
      .then(function (response) {
        console.log("response: ", response.data);
        setDoctors(response.data);
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);
  return (
    <div>
      <div className="flex-column">
        <p>Doctors</p>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Search Doctors
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <p>
          <span className="ml-sm">Doctor Id</span>
          <span className="ml-sm">Name</span>
          <span className="ml-sm">Qualification</span>
          <span className="ml-sm">Sessions</span>
          <span className="ml-sm">Minutes</span>
          <span className="ml-sm">Calls</span>
        </p>
        {doctors.map((doctor) => {
          return (
            <div className="flex-row border-sm justify-content-center">
              <span className="ml-sm">{doctor._id}</span>
              <span className="ml-sm">{doctor.name}</span>
              <span className="ml-sm">{doctor.qualification}</span>
              <span className="ml-sm">{doctor.sessions}</span>
              <span className="ml-sm">{doctor.minutes}</span>
              <span className="ml-sm">{doctor.calls}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
