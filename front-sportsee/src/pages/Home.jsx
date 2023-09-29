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
  const userId = 12;

  let {
    isLoading: userIsLoading,
    data: userData,
    error: userError,
  } = Usefetch(userId, "user");
  console.log("1111111111111");
  console.log(userData);
  console.log(`error :${userError}`);
  console.log(`loading :${userIsLoading}`);

  let {
    isLoading: activityIsLoading,
    data: activityData,
    error: activityError,
  } = Usefetch(userId, "activity");
  console.log("222222222222222");
  console.log(activityData);
  console.log(`error :${activityError}`);
  console.log(`loading :${activityIsLoading}`);

  let {
    isLoading: averageIsLoading,
    data: averageData,
    error: averageError,
  } = Usefetch(userId, "average-sessions");
  console.log("333333333333333");
  console.log(averageData);
  console.log(`error :${averageError}`);
  console.log(`loading :${averageIsLoading}`);

  let {
    isLoading: performanceIsLoading,
    data: performanceData,
    error: performanceError,
  } = Usefetch(userId, "performance");

  console.log("4444444444444444");
  console.log(performanceData);
  console.log(`error :${performanceError}`);
  console.log(`loading :${performanceIsLoading}`);
  console.log("youpi");

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
    console.log("erreur de api");
    console.log(userError);
  }
  console.log(userData);

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
