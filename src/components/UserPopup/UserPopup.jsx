import styles from "./UserPopup.module.scss";

import UserLogo from "../../assets/profile-icon.png";

const UserPopup = () => {
  return (
    <article className={styles.root} id="user-popup">
      <article className={styles.wrapper}>
        <div className={styles.user_logo_block}>
          <img alt="User" src={UserLogo} />
          <h3>LVL_100_CROOKS</h3>
        </div>
        <p>Повідомлення</p>
        <p>Збережені</p>
        <p>Налаштування</p>
        <p className={styles.exit_button}>Вийти</p>
      </article>
    </article>
  );
};
export default UserPopup;
