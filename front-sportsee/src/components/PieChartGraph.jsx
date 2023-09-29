import React from "react";
import styled from "styled-components";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const PieChartGraph = (userData) => {
  let userScore = "";
  let data;
  if (userData.userData !== "apiFailed") {
    if (isNaN(userData.userData.data.todayScore)) {
      userScore = userData.userData.data.score;
    } else {
      userScore = userData.userData.data.todayScore;
    }

    data = [{ name: "value", value: userScore * 100 }];
  } else {
    userScore = 0.56;
    data = [{ name: "value", value: userScore * 100 }];
  }

  return (
    <Score>
      <h1 className="title">Score</h1>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={"60%"}
            outerRadius={"70%"}
            fill="#8884d8"
            dataKey="value"
            cornerRadius={10}
            startAngle={70}
            endAngle={Math.round((430 * userScore * 100) / 100) + 70}
          >
            <Cell fill="#E60000" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="Score">
        <div className="rate">{Math.round(userScore * 100)}%</div>
        <div className="message">de votre</div>
        <div className="message">objectif</div>
      </div>
    </Score>
  );
};

const Score = styled.div`
  position: relative;
  background: #fbfbfb;
  border-radius: 5px;
  z-index:1;

  height: 263px;
  width: 258px;

  .title {
    position: absolute;
    margin-top: 24px;
    margin-left: 24px;

    color: #20253a;
    font-size: 15px;
    font-weight: 500;
  }

  .Score {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    position: absolute;
    content: "";

    width: 150px;
    height: 150px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: -1;}

    .rate {
   
      font-size: 26px;
      font-weight: 700;
      color: #282d30;
  
    }

    .message {
      font-size: 16px;
      font-weight: 500;
      color: #74798c;
      opacity: 0.6;
    }
  }
`;
export default PieChartGraph;
