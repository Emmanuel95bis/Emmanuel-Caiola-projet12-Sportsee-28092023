import "../style/Navigation.css";
import Fitness from "../assets/Fitness.png";
import Yoga from "../assets/Yoga.png";
import Cyclisme from "../assets/Cyclisme.png";
import Natation from "../assets/Natation.png";

function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <li>
          <img src={Yoga} alt="Logo yoga"></img>
        </li>
        <li>
          <img src={Natation} alt="Logo natation"></img>
        </li>
        <li>
          <img src={Cyclisme} alt="Logo cyclisme"></img>
        </li>
        <li>
          <img src={Fitness} alt="Logo Fitness"></img>
        </li>
      </ul>

      <span>Copyright, SportSee 2020</span>
    </div>
  );
}

export default Navigation;
