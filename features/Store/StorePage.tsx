// "use client";

import Image from "next/image";
import cls from "classnames";
import Button from "@/components/Button/Button";
import styles from "./StorePage.module.css";
import Link from "next/link";
import { Store } from "@/lib/getStore";

type Props = {
  store: Store;
  // handleUpvoteButton: () => void;
};

const StorePage: React.FC<Props> = ({ store }) => {
  const { id, name, imgUrl, websiteUrl, address, neighbourhood } = store;

  async function handleUpvoteButton() {
    "use server";
    console.log("HANDLE UPVOTE!!!");

    // revalidateTag("stores");
  }

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">Back to home</Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={imgUrl}
            width={600}
            height={360}
            className={styles.storeImg}
            alt={name}
          />
        </div>
        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image
              style={{ color: "white" }}
              src="/static/icons/location.svg"
              width="24"
              height="24"
              alt={name}
            />
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/near-me.svg"
              width="24"
              height="24"
              alt={name}
            />
            <p className={styles.text}>{neighbourhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/star.svg"
              width="24"
              height="24"
              alt={name}
            />
            <p className={styles.text}>1</p>
          </div>
          <Button label="Up vote!" clickHandler={handleUpvoteButton} />
        </div>
      </div>
    </div>
  );
};

export default StorePage;
