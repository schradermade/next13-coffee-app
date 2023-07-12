import Button from "@/components/Button/Button";
import styles from "./Banner.module.css";
import Image from "next/image";

type BannerProps = {};

const Banner: React.FC<BannerProps> = ({}) => {
  async function handleButtonClick() {
    "use server";
  }
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.title1}>Coffee</span>
          <span className={styles.title2}>Connoisseur</span>
        </h1>
        <p className={styles.subtitle}>Discover your local coffee shops!</p>
        <div className={styles.buttonWrapper}>
          <Button btnStyles={styles.button} onClick={handleButtonClick}>
            View stores nearby!
          </Button>
        </div>
      </div>
      <div className={styles.heroImage}>
        <Image
          alt="hero"
          src={
            "/static/hero-image.png" ||
            "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          }
          width={700}
          height={400}
          priority
        />
      </div>
    </>
  );
};

export default Banner;
