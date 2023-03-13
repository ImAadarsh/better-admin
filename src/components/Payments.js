import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Payments() {
  const [purchases, setPurchases] = useState([]);
  useEffect(() => {
    axios
      .get("https://rihal-be.herokuapp.com/api/purchases")
      .then(function (response) {
        console.log("response: ", response.data);
        setPurchases(response.data);
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);
  return (
    <div>
      <div className="flex-column">
        <p>Payments</p>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Search Payments
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <p>
          <span className="ml-sm">User Id</span>
          <span className="ml-sm">Name</span>
          <span className="ml-sm">Appointment Type</span>
          <span className="ml-sm">Pack Type</span>
        </p>
        {purchases.map((purchase) => {
          return (
            <div className="flex-row border-sm justify-content-center">
              <span className="ml-sm">{purchase.by}</span>
              <span className="ml-sm">{purchase.username}</span>
              <span className="ml-sm">{purchase.appointmentType}</span>
              <span className="ml-sm">{purchase.packType}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
