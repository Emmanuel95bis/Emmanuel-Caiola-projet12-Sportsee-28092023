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
  const [activity, setActivity] = useState({
    isLoading: false,
    data: [],
    error: "",
  });
  const [average, setAverage] = useState({
    isLoading: false,
    data: [],
    error: "",
  });
  const [performance, setPerformance] = useState({
    isLoading: false,
    data: [],
    error: "",
  });

  useEffect(() => {
    setUser(Usefetch(userId, "user"));
    setActivity(Usefetch(userId, "activity"));
    setAverage(Usefetch(userId, "average-sessions"));
    setPerformance(Usefetch(userId, "performance"));
  }, []);

  if (
    user.isLoading ||
    average.isLoading ||
    activity.isLoading ||
    performance.isLoading
  ) {
    return <Loader />;
  }

  if (
    user.error !== false ||
    activity.error !== false ||
    average.error !== false ||
    performance.error !== false
  ) {
    user.data = activity.data = performance.data = average.data = "apiFailed";
  }

  return (
    <div>
      <Header />
      <div className="main">
        <Navigation />
        <div className="home">
          <div className="home-graphics">
            <Banner userData={user.data} />
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
