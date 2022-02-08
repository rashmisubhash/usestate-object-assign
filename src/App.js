import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [buyPhone, setBuyPhone] = useState(resetSpecs());

  function resetSpecs() {
    // Initialization and reset
    return {
      color: "black",
      battery: "4000mAH",
      internet: {
        "4g": true,
        "5g": false
      }
    };
  }

  function updateBattery() {
    // Updating battery
    const tempBattery = { battery: "5000mAH" };
    setBuyPhone(Object.assign({}, buyPhone, tempBattery));
  }

  function updateInternet() {
    // Updating the nested object
    setBuyPhone(
      Object.assign({}, buyPhone, {
        internet: {
          "4g": !buyPhone.internet["4g"],
          "5g": buyPhone.internet["5g"]
        }
      })
    );
  }

  return (
    <div className="app">
      <h1>Welcome!!</h1>
      <h2>Phone Specs - </h2>

      <div className="phone-specs">
        <span>Battery: {buyPhone.battery}</span>
        <span>Color: {buyPhone.color}</span>
        <span>4g: {buyPhone.internet["4g"] ? "Yes" : "No"}</span>
        <span>5g: {buyPhone.internet["5g"] ? "Yes" : "No"}</span>
      </div>

      <div className="update-phone-specs">
        <p>Update </p>
        <button onClick={() => updateBattery()}>Battery</button>
        <button
          onClick={() =>
            setBuyPhone(Object.assign({}, buyPhone, { color: "red" }))
          }
        >
          Color
        </button>
        <button onClick={() => updateInternet()}>4g</button>
        <button
          onClick={() =>
            setBuyPhone(
              Object.assign({}, buyPhone, {
                internet: {
                  "4g": buyPhone.internet["4g"],
                  "5g": !buyPhone.internet["5g"]
                }
              })
            )
          }
        >
          5g
        </button>

        <button onClick={() => setBuyPhone(resetSpecs())}>Reset</button>
      </div>
    </div>
  );
}
