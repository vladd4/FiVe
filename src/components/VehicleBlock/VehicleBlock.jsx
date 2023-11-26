import SideBar from "../SideBar/SideBar";
import VehicleCards from "../VehicleCards/VehicleCards";
import styles from "./VehicleBlock.module.scss";

const VehicleBlock = () => {
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <SideBar />
        <VehicleCards />
      </article>
    </section>
  );
};
export default VehicleBlock;
