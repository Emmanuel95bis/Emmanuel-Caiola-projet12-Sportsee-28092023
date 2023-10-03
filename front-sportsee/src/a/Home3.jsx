import "../style/Home.css";
import PolarRadiusAxisGraphic from "../components/PolarRadiusAxisGraphic";
import Barchart from "../components/Barchart";
import LineChartGraph from "../components/LineChartGraph";
import PieChartGraph from "../components/PieChartGraph";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Results from "../components/Results";
import Banner from "../components/Banner";
import { Usefetch } from "../util/hook/Usefetch";
import { Loader } from "../util/loader/atoms";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  //userId 12 ou 18
  const userId = 12;
  console.log("home");

  const [user, setUser] = useState({
    isLoading: false,
    data: [],
    error: "",
  });
  useEffect(() => {
    setUser(Usefetch(userId, "user"));
  }, []);
  console.log("home2");
  console.log(user);
  console.log(user.data);

  const [activity, setActivity] = useState({
    isLoading: false,
    data: [],
    error: "",
  });
  useEffect(() => {
    setActivity(Usefetch(userId, "activity"));
  }, []);
  console.log("home3");
  const [average, setAverage] = useState({
    isLoading: false,
    data: [],
    error: "",
  });
  useEffect(() => {
    setAverage(Usefetch(userId, "average-sessions"));
  }, []);
  console.log("home4");
  const [performance, setPerformance] = useState({
    isLoading: false,
    data: [],
    error: "",
  });
  useEffect(() => {
    setPerformance(Usefetch(userId, "performance"));
  }, []);
  console.log("home5");
  if (
    user.isLoading ||
    average.isLoading ||
    activity.isLoading ||
    performance.isLoading
  ) {
    return <Loader />;
  }
  console.log("home6");
  if (
    user.error !== false ||
    activity.error !== false ||
    average.error !== false ||
    performance.error !== false
  ) {
    user.data = activity.data = performance.data = average.data = "apiFailed";
  }
  console.log("home7");
  return (
    <div>
      <Header />
      <div className="main">
        <Navigation />
        <div className="home">
          <div className="home-graphics">
            <Banner userData={user} />
            <Barchart activityData={activity.data} />
            <div className="home-second-graphic">
              <LineChartGraph averageData={average.data} />
              <PolarRadiusAxisGraphic performanceData={performance.data} />
              <PieChartGraph userData={user.data} />
            </div>
          </div>
          <Results userData={user.data} />
        </div>
      </div>
    </div>
  );
}

export default Home;
