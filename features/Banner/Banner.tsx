"use client";

import Button from "@/components/Button/Button";
import styles from "./Banner.module.css";
import useLocation from "@/hooks/useLocation";
import { useState } from "react";
import TextInput from "@/components/TextInput/TextInput";

type BannerProps = {};

const Banner: React.FC<BannerProps> = ({}) => {
  const [searchInput, setSearchInput] = useState("");
  const { handleTrackLocation, latLong, locationErrorMsg, isFindingLocation } =
    useLocation();

  async function handleButtonClick() {
    // "use server";
    handleTrackLocation();
  }
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.title1}>Coffee</span>
          <span className={styles.title2}>Connoisseur</span>
        </h1>
        <p className={styles.subtitle}>Discover your local coffee shops!</p>
        <TextInput input={searchInput} onChange={(e) => setSearchInput(e)} />
        <div className={styles.buttonWrapper}>
          <Button btnStyles={styles.button} onClick={handleButtonClick}>
            {isFindingLocation ? "Locating..." : "View stores nearby!"}
          </Button>
        </div>
      </div>

      <h2 className={styles.heading1}>
        <p>{latLong && `Your location: ${latLong}`}</p>
      </h2>

      <p>{locationErrorMsg && `Something went wrong: ${locationErrorMsg}`}</p>
      <h2 className={styles.heading2}>
        Places in the area for{" "}
        <p className={styles.inputPhrase}>{searchInput}</p>.
      </h2>
    </>
  );
};

export default Banner;
