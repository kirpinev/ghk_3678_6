import rocket from "../../assets/credits-game/rocket.png";
import { Typography } from "@alfalab/core-components/typography";
import styles from "./index.module.css";

export const CreditsGameStub = () => {
  return (
    <>
      <div className={styles.container}>
        <img
          alt="Картинка ракеты"
          src={rocket}
          width={135}
          className={styles.image}
        />
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="small"
          defaultMargins={false}
          weight="bold"
          style={{ marginTop: "24px", marginBottom: "12px", fontWeight: 500 }}
        >
          Только тссс
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-large">
          Вы поучаствовали в очень важном исследовании, которое поможет улучшить
          продукт. Вы – наш герой!
        </Typography.Text>
      </div>
    </>
  );
};
