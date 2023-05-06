import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" width={200} height={200} />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$ 19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolar sit amet adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;
