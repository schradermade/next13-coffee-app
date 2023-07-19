"use client";
import Image from "next/image";
import cls from "classnames";
import Button from "@/components/Button/Button";
import styles from "./StorePage.module.css";
import Link from "next/link";
import { Store } from "@/types";
import { useState } from "react";

type Props = {
  store: Store;
  // handleUpvoteButton: () => void;
};

const StorePage: React.FC<Props> = ({ store }) => {
  const [vote, setVote] = useState(0);
  const { name, timezone, address, imgUrl } = store;
  async function handleUpvoteButton() {
    setVote(vote + 1);
  }

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">&larr;&nbsp;Back to home</Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          {imgUrl && (
            <Image
              src={imgUrl && imgUrl}
              width={600}
              height={360}
              className={styles.storeImg}
              alt={"hello"}
            />
          )}
        </div>
        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image
              style={{ color: "white" }}
              src="/static/icons/location.svg"
              width="24"
              height="24"
              alt={"hello"}
            />
            <p className={styles.text}>&nbsp;{address}</p>
          </div>
          <div className={styles.iconWrapper}></div>
          <div className={styles.iconWrapper}>
            <Image
              src={"/static/icons/clock.svg"}
              width="24"
              height="24"
              alt={"hello"}
            />
            <p className={styles.text}>Timezone: {timezone}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src={"/static/icons/star.svg"}
              width="24"
              height="24"
              alt={"hello"}
            />
            <p className={styles.text}>{vote}</p>
          </div>
          <Button
            btnDisable={vote > 0 ? true : false}
            onClick={handleUpvoteButton}
            btnStyles={styles.upvoteButton}
          >
            {vote > 0 ? "Thanks for voting!" : "Up vote!"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StorePage;
