import styles from "./Banner.module.css";

type BannerProps = {
  btnLabel: string;
  handleOnClick?: () => void;
};

const Banner: React.FC<BannerProps> = ({ btnLabel, handleOnClick }) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.title1}>Coffee</span>
          <span className={styles.title2}>Connoisseur</span>
        </h1>
        <p className={styles.subtitle}>Discover your local coffee shops!</p>
        <div className={styles.buttonWrapper}>
          {/* <button className={styles.button} onClick={handleOnClick}>
            {btnLabel}
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Banner;
