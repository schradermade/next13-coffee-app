"use client";

import Image from "next/image";
import Link from "next/link";
import cls from "classnames";
import styles from "./StoreCard.module.css";
import { Store } from "@/lib/getStore";

type Props = {
  store: Store;
  // href: string;
};
// const fetcher = (url: string) => fetch(url).then((res) => res.json());

const StoreCard: React.FC<Props> = ({ store }) => {
  const { name, imgUrl, id } = store;
  // const { data, error, isLoading } = useSWR(
  //   "https://jsonplaceholder.typicode.com/todo",
  //   fetcher
  // );
  // if (error) {
  //   return <div>An error has occurred</div>;
  // }
  // if (isLoading) return <div>Loading!...</div>;
  // console.log("DATA:", data);

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
              src={imgUrl}
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
