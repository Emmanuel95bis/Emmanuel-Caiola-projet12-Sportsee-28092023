import "../style/Banner.css";

function Banner(userData) {
  let userName = "";

  if (userData.userData !== "apiFailed") {
    userName = userData.userData.data.userInfos.firstName;
  } else {
    userName = "Manu - DEMONSTRATION MODE";
  }

  return (
    <div className="banner">
      <h1>
        Bonjour <span>{userName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default Banner;
