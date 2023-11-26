import styles from "./Footer.module.scss";
import Logo from "../../assets/logo.png";
import Phone from "../../assets/phone.svg";
import Mail from "../../assets/mail.svg";

const Footer = () => {
  return (
    <footer className={styles.root} id="contacts">
      <article className={styles.article_block}>
        <img alt="FiVe" src={Logo} className={styles.logo} />
        <div className={styles.contact_block}>
          <h4>Контакти</h4>
          <div className={styles.div_1}>
            <img alt="Mail" src={Mail} />
            <a href="mailto:five@gmail.com">five@gmail.com</a>
          </div>
          <div className={styles.div_2}>
            <img alt="Phone" src={Phone} />
            <a href="tel:+380502222222">+38(050)-222-22-22</a>
          </div>
        </div>
      </article>
      <p className={styles.copy}>FiVe © All rights reserved</p>
    </footer>
  );
};
export default Footer;
