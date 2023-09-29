import "../style/Barchart.css";
import styled from "styled-components";

import React from "react";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const renderLegend = () => {
  return (
    <div className="legend">
      <span>Activité quotidienne</span>
      <div className="legendGraphic">
        <div className="blackRound"></div>
        <span>Poids (kg)</span>
        <div className="redRound"></div>
        <span>Calories brûlées (kCal)</span>
      </div>
    </div>
  );
};

function Barchart(activityData) {
  let data;
  if (activityData.activityData !== "apiFailed") {
    data = activityData.activityData.data.sessions;
    for (let i = 0; i < data.length; i++) data[i].day = i + 1;
  } else {
    data = [
      { day: "1", calories: 156, kilogram: 80 },
      { day: "2", calories: 200, kilogram: 79 },
      { day: "3", calories: 145, kilogram: 80 },
      { day: "4", calories: 108, kilogram: 81 },
      { day: "5", calories: 80, kilogram: 79 },
      { day: "6", calories: 223, kilogram: 78 },
      { day: "7", calories: 120, kilogram: 80 },
      { day: "8", calories: 210, kilogram: 78 },
      { day: "9", calories: 80, kilogram: 79 },
    ];
  }
  return (
    <BarchartGraph>
      <BarChart
        width={832}
        height={320}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" padding={{ left: -44, right: -44 }} />
        <YAxis tickMargin={10} orientation="right" domain={[0, "dataMax"]} />
        <Tooltip />
        <Legend content={renderLegend} verticalAlign="top" />
        <ReferenceLine y={0} stroke="#000" />

        <Brush dataKey="name" height={30} stroke="#8884d8" />

        <Bar
          dataKey="kilogram"
          fill="#000000"
          barSize={7}
          radius={[3, 3, 0, 0]}
        />
        <Bar dataKey="zero" fill="#E60000" barSize={3} radius={[3, 3, 0, 0]} />
        <Bar
          dataKey="calories"
          fill="#E60000"
          barSize={7}
          radius={[3, 3, 0, 0]}
        />
      </BarChart>
    </BarchartGraph>
  );
}

const BarchartGraph = styled.div`
  background-color: #fbfbfb;

  g.recharts-layer.recharts-brush {
    display: none;
  }

  .legend {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  .legendGraphic {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  span:nth-child(2) {
    font-size: 14px;
    font-weight: 500;
  }

  span:nth-child(4) {
    font-size: 14px;
    font-weight: 500;
  }

  path {
    color: white;
  }

  tspan {
    margin-top: 20px;
    color: red;
  }

  .legend span {
    font-size: 15px;
    font-weight: 500;
    margin-left: 55px;
  }
  .legend .redRound {
    width: 8px;
    height: 8px;
    background-color: #e60000;
    border-radius: 50%;
    margin-left: 35px;
    margin-top: 7px;
    margin-right: -32px;
  }

  .legend .blackRound {
    width: 8px;
    height: 8px;
    background-color: #282d30;
    border-radius: 50%;
    margin-top: 7px;
    margin-right: -32px;
  }

  line {
    display: none;
  }

  g.recharts-layer.recharts-reference-line > line {
    display: block;
    height: 1px;
    opacity: 0.2;
  }

  > g.recharts-layer.recharts-cartesian-axis.recharts-xAxis.xAxis
    > g
    > g:nth-child(1)
    > text
    > tspan {
    background-color: red;
    display: none;
  }
`;

export default Barchart;
