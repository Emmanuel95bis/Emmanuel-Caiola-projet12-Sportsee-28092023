import styled from "styled-components";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const PolarRadiusAxisGraphic = (performanceData) => {
  let data = [];

  if (performanceData.performanceData !== "apiFailed") {
    const dataPerformance = performanceData.performanceData.data.data;
    const subjectPerformance = performanceData.performanceData.data.kind;

    for (let i = 0; i <= dataPerformance.length - 1; i++) {
      data[i] = {
        subject: subjectPerformance[i + 1],
        Perf: dataPerformance[i].value,
      };
    }
  } else {
    data = [
      { subject: "cardio", Perf: 200 },
      { subject: "energy", Perf: 240 },
      { subject: "endurance", Perf: 80 },
      { subject: "strength", Perf: 80 },
      { subject: "speed", Perf: 220 },
      { subject: "intensity", Perf: 200 },
    ];
  }

  return (
    <RadarGraph>
      <RadarChart
        width={258}
        height={263}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius="66%"
      >
        <PolarGrid adialLines={PolarGrid} />
        <PolarAngleAxis dataKey="subject" dy={4} tickSize={6} />
        <PolarRadiusAxis />
        <Radar
          name="Student A"
          dataKey="Perf"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </RadarGraph>
  );
};

const RadarGraph = styled.div`
  background: black;
  border-radius: 5px;
  opacity: 0.9;

  tspan,
  .tspan {
    font-family: roboto;
    font-size: 11px;
    font-weight: 500;
    fill: white;
  }
`;

export default PolarRadiusAxisGraphic;
