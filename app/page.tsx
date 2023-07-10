import Head from "next/head";
import Image from "next/image";
import Banner from "../features/Banner/Banner";
import StoreCard from "@/features/Store/StoreCard";
import getAllStores from "@/api/getAllStores";
import { Store } from "@/lib/getStore";
import styles from "./page.module.css";

export default async function Home() {
  // const [stores, setStores] = useState<[]>([]);

  const stores = await getAllStores();
  console.log("STORES:", await stores);

  const handleOnBannerBtnClick = () => {
    console.log("button banner clicked");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner
          btnLabel="View stores nearby!"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image
            alt="hero"
            src="/static/hero-image.png"
            width={700}
            height={400}
            priority
          />
        </div>
        {stores.length > 0 && (
          <>
            <h2 className={styles.heading2}>Portland Coffee Stores</h2>
            <div className={styles.cardLayout}>
              {stores.map((store: Store) => {
                return <StoreCard key={store.id} store={store} />;
              })}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
