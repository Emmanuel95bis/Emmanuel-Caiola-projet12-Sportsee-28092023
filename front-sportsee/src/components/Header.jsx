import "../style/Header.css";

import Logo from "../assets/Logo.png";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="logo sportsee"></img>
      <ul>
        <li>
          <span>Accueil</span>
        </li>
        <li>
          <span>Profil</span>
        </li>
        <li>
          <span>Réglage</span>
        </li>
        <li>
          <span>Communauté</span>
        </li>
      </ul>
    </div>
  );
}

export default Header;
