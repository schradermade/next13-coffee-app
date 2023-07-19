import Image from "next/image";
import Link from "next/link";
import cls from "classnames";
import styles from "./StoreCard.module.css";
import { Store } from "@/types";

type Props = {
  store: Store;
};

const StoreCard: React.FC<Props> = ({ store }) => {
  const { name, id, imgUrl } = store;

  return (
    <>
      <Link href={`/coffee-store/${id}`} passHref>
        <div className={cls("glass", styles.container)}>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{name}</h2>
          </div>
          <div className={styles.cardImageWrapper}>
            {imgUrl && (
              <Image
                className={styles.cardImage}
                width={260}
                src={imgUrl && imgUrl}
                height={160}
                alt={name}
              />
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default StoreCard;
