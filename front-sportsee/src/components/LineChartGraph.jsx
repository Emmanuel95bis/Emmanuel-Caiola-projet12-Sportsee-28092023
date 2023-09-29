import styled from "styled-components";

import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

const LegendLineChart = () => {
  return (
    <div className="Legend-container">
      <span>Durée moyenne des sessions</span>
    </div>
  );
};

const LineChartGraph = (averageData) => {
  let data;

  if (averageData.averageData !== "apiFailed") {
    data = averageData.averageData.data.sessions;

    const day = ["L", "M", "M", "J", "V", "S", "D"];
    for (let i = 0; i < data.length; i++) data[i].day = day[i];
  } else {
    data = [
      {
        day: "L",
        sessionLength: 4000,
      },
      {
        day: "M",
        sessionLength: 3000,
      },
      {
        day: "M",
        sessionLength: 2000,
      },
      {
        day: "J",
        sessionLength: 1890,
      },
      {
        day: "V",
        sessionLength: 2390,
      },
      {
        day: "S",
        sessionLength: 3490,
      },
      {
        day: "D",
        sessionLength: 3490,
      },
    ];
  }

  return (
    <LineGraph>
      <LineChart width={258} height={263} data={data}>
        <XAxis
          dataKey="day"
          height={60}
          axisLine={false}
          tickLine={false}
          tickMargin={20}
          stroke="#FFFFFF"
          tick={{ fontSize: 13, stroke: "white", opacity: 0.8 }}
          padding={{ right: 5, left: 5 }}
        />

        <YAxis
          dataKey="sessionLength"
          domain={[0, "dataMax + 30"]}
          hide={true}
        />
        <Legend
          className="legend"
          content={LegendLineChart}
          verticalAlign="top"
        />
        <Tooltip
          cursor={false}
          wrapperStyle={{ outline: "none", fontWeight: 600 }}
          labelFormatter={(value) => `${value} min`}
        />
        <Line
          padding={{ left: 20, right: 20 }}
          type="monotone"
          dataKey="sessionLength"
          name="sessionLength"
          stroke="#FFFFFF"
          strokeWidth={2}
        />
      </LineChart>
    </LineGraph>
  );
};

export default LineChartGraph;

const LineGraph = styled.div`
  border-radius: 5px;

  background: linear-gradient(
    90deg,
    rgba(255, 0, 0, 1) 65%,
    rgba(255, 0, 0, 1) 66%,
    rgba(231, 13, 13, 1) 67%,
    rgba(231, 13, 13, 1) 100%
  );

  circle {
    display: none;
  }

  circle:nth-child(5) {
    display: block;
  }

  .Legend-container {
    width: 147px;
    height: 48px;
  }

  .Legend-container span {
    color: #ffffff;
    opacity: 50%;
    font-size: 15px;
    font-weight: 500;
  }

  g.recharts-layer.recharts-line > path {
    opacity: 0.5;
  }

  > g.recharts-layer.recharts-cartesian-axis.recharts-xAxis.xAxis
    > g
    > g:nth-child
    > text
    > tspan {
    opacity: 0.5;
  }

  g.recharts-layer.recharts-cartesian-axis.recharts-xAxis.xAxis > g {
    opacity: 0.5;
  }
`;
