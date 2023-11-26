import styles from "./Header.module.scss";

import Logo from "../../assets/logo.png";
import Message from "../../assets/message.png";
import Sub from "../../assets/sub.png";
import User from "../../assets/user.png";
import UserPopup from "../UserPopup/UserPopup";

const Header = () => {
  const handleHover = (display) => {
    if (document.querySelector("#user-popup")) {
      document.querySelector("#user-popup").style.display = display;
    }
  };
  return (
    <header className={styles.root}>
      <article className={styles.wrapper}>
        <img alt="FiVe" src={Logo} className={styles.logo} />
        <div className={styles.icons_block}>
          <div className={styles.language_block}>
            <p>Eng</p>
            <span>|</span>
            <p className={styles.current_lang}>Ua</p>
          </div>
          <img alt="Message" src={Message} />
          <img alt="Sub" src={Sub} />
          <img
            alt="User"
            src={User}
            onMouseOver={() => handleHover("grid")}
            onClick={() => handleHover("none")}
          />
          <UserPopup />
        </div>
      </article>
    </header>
  );
};
export default Header;
