import Image from "next/image";
import cls from "classnames";
import Button from "@/components/Button/Button";
import styles from "./StorePage.module.css";
import Link from "next/link";
import { Store } from "@/types";

type Props = {
  store: Store;
  // handleUpvoteButton: () => void;
};

const StorePage: React.FC<Props> = ({ store }) => {
  const {
    name,
    timezone,
    location: { address, locality, region, postcode, formatted_address },
  } = store;

  console.log("STORE!!:", store);

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
            src={
              "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            }
            width={600}
            height={360}
            className={styles.storeImg}
            alt={"hello"}
          />
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
            {/* <p className={styles.text}>
              {address}&#46;,&nbsp;
              {locality},&nbsp;{region}&nbsp;
              {postcode}
            </p> */}
            <p className={styles.text}>&nbsp;{formatted_address}</p>
          </div>

          {/* <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/near-me.svg"
              width="24"
              height="24"
              alt={name}
            />
            <p className={styles.text}>{neighbourhood}</p>
          </div> */}
          <div className={styles.iconWrapper}>
            {/* <Image
              src={
                "/static/icons/star.svg" ||
                "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              }
              width="24"
              height="24"
              alt={"hello"}
            /> */}
            {/* <p className={styles.text}>{votes}</p> */}
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src={"/static/icons/clock.svg"}
              width="24"
              height="24"
              alt={"hello"}
            />
            <p className={styles.text}>Timezone: {timezone}</p>
          </div>
          <Button onClick={handleUpvoteButton} btnStyles={styles.upvoteButton}>
            Up vote!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StorePage;
