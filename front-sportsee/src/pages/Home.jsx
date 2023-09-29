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

function Home() {
  const userId = 18;

  let {
    isLoading: userIsLoading,
    data: userData,
    error: userError,
  } = Usefetch(userId, "user");

  let {
    isLoading: activityIsLoading,
    data: activityData,
    error: activityError,
  } = Usefetch(userId, "activity");

  let {
    isLoading: averageIsLoading,
    data: averageData,
    error: averageError,
  } = Usefetch(userId, "average-sessions");

  let {
    isLoading: performanceIsLoading,
    data: performanceData,
    error: performanceError,
  } = Usefetch(userId, "performance");

  if (
    userIsLoading ||
    averageIsLoading ||
    activityIsLoading ||
    performanceIsLoading
  ) {
    return <Loader />;
  }

  if (
    userError !== false ||
    activityError !== false ||
    averageError !== false ||
    performanceError !== false
  ) {
    userData = activityData = performanceData = averageData = "apiFailed";
  }

  return (
    <div>
      <Header />
      <div className="main">
        <Navigation />
        <div className="home">
          <div className="home-graphics">
            <Banner userData={userData} />
            <Barchart activityData={activityData} />
            <div className="home-second-graphic">
              <LineChartGraph averageData={averageData} />
              <PolarRadiusAxisGraphic performanceData={performanceData} />
              <PieChartGraph userData={userData} />
            </div>
          </div>
          <Results userData={userData} />
        </div>
      </div>
    </div>
  );
}

export default Home;
