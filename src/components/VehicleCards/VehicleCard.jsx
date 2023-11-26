import styles from "./VehicleCard.module.scss";

import Speed from "../../assets/speedometer.png";
import Patrol from "../../assets/patrol.png";
import Year from "../../assets/year-icon 1.png";
import Fwd from "../../assets/rwd.png";
import Gear from "../../assets/gear.png";

const VehicleCard = (props) => {
  return (
    <a
      href={props.websiteLink}
      target="_black"
      rel="noreferrer"
      className={styles.root}
    >
      <article className={styles.wrapper}>
        <div className={styles.car_block}>
          <div
            style={{ backgroundImage: `url(${props.carImage})` }}
            className={styles.car_image}
          />
          <div className={styles.car_info}>
            <h3>{props.carTitle}</h3>
            <div className={styles.car_info_icons}>
              <div className={styles.icon_div}>
                <img alt="Speed" src={Speed} />
                <p>{props.carMil} km</p>
              </div>
              <div className={styles.icon_div}>
                <img alt="Speed" src={Year} />
                <p>Year: {props.carYear}</p>
              </div>
              <div className={styles.icon_div}>
                <img alt="Speed" src={Patrol} />
                <p>{props.carFuel}</p>
              </div>

              <div className={styles.icon_div}>
                <img alt="Speed" src={Fwd} />
                <p>{props.carTrans}</p>
              </div>
              <div className={styles.icon_div}>
                <img alt="Speed" src={Gear} />
                <p>{props.carGear}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.website_info}>
          <p>Website:</p>
          <div
            style={{ backgroundImage: `url(${props.website})` }}
            className={styles.website_img}
          />
          <p>Price: {props.carPrice} $</p>
        </div>
      </article>
    </a>
  );
};
export default VehicleCard;
