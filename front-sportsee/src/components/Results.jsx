import React from "react";
import "../style/Results.css";

import Calorie from "../assets/Calorie.png";
import Glucide from "../assets/Glucide.png";
import Lipide from "../assets/Lipide.png";
import Proteine from "../assets/Proteine.png";

function Results(userData) {
  let results;
  if (userData.userData !== "apiFailed") {
    results = {
      calorie: userData.userData.data.keyData.calorieCount,
      proteine: userData.userData.data.keyData.proteinCount,
      Glucide: userData.userData.data.keyData.carbohydrateCount,
      lipide: userData.userData.data.keyData.lipidCount,
    };
  } else {
    results = {
      calorie: "1,830",
      proteine: "105",
      Glucide: "270",
      lipide: "150",
    };
  }

  const array = [
    {
      titre: "Calories",
      logo: Calorie,
      mesure: `${results.calorie}kCal`,
      color: "FF0000",
    },
    {
      titre: "Proteines",
      logo: Proteine,
      mesure: `${results.proteine}g`,
      color: "4AB8FF",
    },
    {
      titre: "Glucides",
      logo: Glucide,
      mesure: `${results.Glucide}g`,
      color: "F9CE23",
    },
    {
      titre: "Lipides",
      logo: Lipide,
      mesure: `${results.lipide}g`,
      color: "FD5181",
    },
  ];

  return (
    <div className="results">
      {array.map((param, index) => (
        <div key={index} className="result-item">
          <div className={`result_logo${index}`}></div>
          <img src={param.logo} alt={`logo des ${param.titre}`} />

          <div className="result_texts">
            <span>{param.mesure}</span>
            <span>{param.titre}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Results;
