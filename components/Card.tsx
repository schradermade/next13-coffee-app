"use client";

import Image from "next/image";
import Link from "next/link";
import cls from "classnames";
import styles from "./Card.module.css";
import useSWR from "swr";

type CardProps = {
  name: string;
  imgUrl: string;
  href: string;
  altDescr: string;
};
// const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Card: React.FC<CardProps> = ({ name, imgUrl, href, altDescr }) => {
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
      <Link href={href} passHref>
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
              alt={altDescr}
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
