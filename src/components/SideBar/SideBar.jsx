import { useDispatch, useSelector } from "react-redux";
import styles from "./SideBar.module.scss";
import { fetchCars, fetchFilterCars } from "../../redux/slices/carsSlice";
import { useEffect, useState } from "react";
import {
  fetchBrands,
  fetchFuel,
  fetchGear,
  fetchModels,
  fetchState,
  fetchTransmission,
} from "../../redux/slices/filtersSlice";

import Search from "../../assets/search.png";
import Sub from "../../assets/sub_icon.png";
import Plus from "../../assets/plus.png";

const SideBar = () => {
  const dispatch = useDispatch();
  const [brand, setBrand] = useState("brand");
  const [fuel, setFuel] = useState("fuel");
  const [model, setModel] = useState("model");
  const [gearbox, setGear] = useState("gear");
  const [transmission, setTransmission] = useState("transmission");
  const [state, setState] = useState("state");
  const [year, setYear] = useState({
    from: "",
    to: "",
  });
  const [price, setPrice] = useState({
    from: "",
    to: "",
  });
  const [power, setPower] = useState({
    from: "",
    to: "",
  });
  const handleChange = (setChanged, input, value) => {
    setChanged((prevYear) => ({
      ...prevYear,
      [input]: value,
    }));
  };
  const brandOptions = useSelector((state) => state.filters.brands);
  const modelOptions = useSelector((state) => state.filters.models);
  const fuelOptions = useSelector((state) => state.filters.fuel);
  const gearOptions = useSelector((state) => state.filters.gear);
  const stateOptions = useSelector((state) => state.filters.state);
  const transmissionOptions = useSelector(
    (state) => state.filters.transmission
  );

  const filterCars = () => {
    const filters = {};
    if (brand !== "brand") {
      filters.brand = brand;
    }
    if (model !== "model") {
      filters.model = model;
    }
    if (gearbox !== "gear") {
      filters.gearbox = gearbox;
    }
    if (transmission !== "transmission") {
      filters.transmission = transmission;
    }
    if (fuel !== "fuel") {
      filters.fuel = fuel;
    }
    if (state !== "state") {
      filters.state = state;
    }
    if (year.from !== "" && year.to !== "") {
      filters.year = {
        from: year.from,
        to: year.to,
      };
    }
    if (price.from !== "" && price.to !== "") {
      filters.price = {
        from: price.from,
        to: price.to,
      };
    }
    if (power.from !== "" && power.to !== "") {
      filters.power = {
        from: power.from,
        to: power.to,
      };
    }
    dispatch(fetchFilterCars(filters));
  };
  const [isPowerOpen, setPowerOpen] = useState(false);
  const [isYearOpen, setYearOpen] = useState(false);
  const [isPriceOpen, setPriceOpen] = useState(false);

  const togglerAccordion = (setStateOpen, stateOpen) => {
    setStateOpen(!stateOpen);
  };
  const clearFilter = () => {
    dispatch(fetchCars());
    setBrand("brand");
    setFuel("fuel");
    setModel("model");
    setGear("gear");
    setTransmission("transmission");
    setState("state");
    setPrice({
      from: "",
      to: "",
    });
    setYear({
      from: "",
      to: "",
    });
    setPower({
      from: "",
      to: "",
    });
  };
  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(fetchGear());
    dispatch(fetchFuel());
    dispatch(fetchTransmission());
    dispatch(fetchState());
  }, []);
  return (
    <aside className={styles.root}>
      <article className={styles.wrapper}>
        <div className={styles.accordions}>
          <select
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
              dispatch(fetchModels(e.target.value));
            }}
            id="brand-select"
          >
            <option value="brand" disabled>
              Марка
            </option>
            {brandOptions &&
              brandOptions.map((option) => {
                return (
                  <option key={option.id} value={option.brand}>
                    {option.brand}
                  </option>
                );
              })}
          </select>
          <select value={model} onChange={(e) => setModel(e.target.value)}>
            <option value="model" disabled>
              Модель
            </option>
            {brand !== "brand" ? (
              modelOptions &&
              modelOptions.map((option) => {
                return (
                  <option key={option.id} value={option.model}>
                    {option.model}
                  </option>
                );
              })
            ) : (
              <option disabled value="nobrand">
                Спочатку оберіть марку
              </option>
            )}
          </select>
          <select value={gearbox} onChange={(e) => setGear(e.target.value)}>
            <option value="gear" disabled>
              Коробка передач
            </option>
            {gearOptions &&
              gearOptions.map((option) => {
                return (
                  <option key={option.id} value={option.gearbox}>
                    {option.gearbox}
                  </option>
                );
              })}
          </select>
          <select
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
          >
            <option value="transmission" disabled>
              Тип приводу
            </option>
            {transmissionOptions &&
              transmissionOptions.map((option) => {
                return (
                  <option key={option.id} value={option.transmission}>
                    {option.transmission}
                  </option>
                );
              })}
          </select>
          <select value={fuel} onChange={(e) => setFuel(e.target.value)}>
            <option value="fuel" disabled>
              Паливо
            </option>
            {fuelOptions &&
              fuelOptions.map((option) => {
                return (
                  <option key={option.id} value={option.fuel}>
                    {option.fuel}
                  </option>
                );
              })}
          </select>
          <select value={state} onChange={(e) => setState(e.target.value)}>
            <option value="state" disabled>
              Стан
            </option>
            {stateOptions &&
              stateOptions.map((option) => {
                return (
                  <option key={option.id} value={option.state}>
                    {option.state}
                  </option>
                );
              })}
          </select>
          <div className={styles.accordion}>
            <div className={styles.accordionItem}>
              <div
                className={styles.accordionHeader}
                onClick={() => togglerAccordion(setPowerOpen, isPowerOpen)}
              >
                Потужність
                <img alt="Plus" src={Plus} />
              </div>
              {isPowerOpen && (
                <div className={styles.accordionContent}>
                  <input
                    type="text"
                    id="minPower"
                    placeholder="Від"
                    value={power.from}
                    onChange={(e) =>
                      handleChange(setPower, "from", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    id="maxPower"
                    placeholder="До"
                    value={power.to}
                    onChange={(e) =>
                      handleChange(setPower, "to", e.target.value)
                    }
                  />
                </div>
              )}
            </div>
          </div>
          <div className={styles.accordion}>
            <div className={styles.accordionItem}>
              <div
                className={styles.accordionHeader}
                onClick={() => togglerAccordion(setYearOpen, isYearOpen)}
              >
                Рік
                <img alt="Plus" src={Plus} />
              </div>
              {isYearOpen && (
                <div className={styles.accordionContent}>
                  <input
                    type="text"
                    id="minPower"
                    placeholder="Від"
                    value={year.from}
                    onChange={(e) =>
                      handleChange(setYear, "from", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    id="maxPower"
                    placeholder="До"
                    value={year.to}
                    onChange={(e) =>
                      handleChange(setYear, "to", e.target.value)
                    }
                  />
                </div>
              )}
            </div>
          </div>
          <div className={styles.accordion}>
            <div className={styles.accordionItem}>
              <div
                className={styles.accordionHeader}
                onClick={() => togglerAccordion(setPriceOpen, isPriceOpen)}
              >
                Ціна
                <img alt="Plus" src={Plus} />
              </div>
              {isPriceOpen && (
                <div className={styles.accordionContent}>
                  <input
                    type="text"
                    id="minPower"
                    placeholder="Від"
                    value={price.from}
                    onChange={(e) =>
                      handleChange(setPrice, "from", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    id="maxPower"
                    placeholder="До"
                    value={price.to}
                    onChange={(e) =>
                      handleChange(setPrice, "to", e.target.value)
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.button_block_wrapper}>
          <p onClick={clearFilter}>Очистити пошук</p>
          <div className={styles.button_block}>
            <button className={styles.search_button} onClick={filterCars}>
              <img alt="Search" src={Search} /> Пoшук
            </button>
            <button className={styles.add_button}>
              <img alt="Sub" src={Sub} />
            </button>
          </div>
        </div>
      </article>
    </aside>
  );
};
export default SideBar;
