import styles from "./VehicleCards.module.scss";
import VehicleCard from "./VehicleCard";

import Sort from "../../assets/Sort.png";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/slices/carsSlice";

const VehicleCards = () => {
  const cars = useSelector((state) => state.cars.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, []);
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <div className={styles.top_block}>
          <p>Показано {cars && cars.length} оголошень із 10</p>
          <img alt="Sort" src={Sort} />
        </div>
        <div className={styles.vehicle_cards}>
          {cars &&
            cars.map((car) => {
              const carName = `${car.brand} ${car.model}`;
              return (
                <VehicleCard
                  key={car.car_id}
                  carImage={car.photo_url}
                  carTitle={carName}
                  website={car.site_photo_url}
                  carPrice={car.price}
                  carFuel={car.fuel}
                  carYear={car.year}
                  carMil={car.mileage}
                  carGear={car.gearbox}
                  carTrans={car.transmission}
                  websiteLink={car.site_url}
                />
              );
            })}
        </div>
      </article>
    </section>
  );
};
export default VehicleCards;
