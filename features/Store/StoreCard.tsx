"use client";

import Image from "next/image";
import Link from "next/link";
import cls from "classnames";
import styles from "./StoreCard.module.css";
import { Store } from "@/api/fetchStore";

type Props = {
  store: Store;
};

const StoreCard: React.FC<Props> = ({ store }) => {
  const { name, imageUrl, id } = store;

  return (
    <>
      <Link href={`/coffee-store/${store.id}`} passHref>
        <div className={cls("glass", styles.container)}>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{name}</h2>
          </div>
          <div className={styles.cardImageWrapper}>
            <Image
              className={styles.cardImage}
              width={260}
              src={
                "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" ||
                imageUrl
              }
              height={160}
              alt={"hello"}
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default StoreCard;
