import Banner from "../features/Banner/Banner";
import StoreCard from "@/features/Store/StoreCard";
import fetchAllStores from "@/api/fetchAllStores";
import styles from "./page.module.css";
import { Metadata } from "next";
import { Store } from "@/types";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Coffee Connoisseur",
    // description: "hello",
  };
}

export default async function Home() {
  // const [stores, setStores] = useState<[]>([]);

  const stores = await fetchAllStores();
  // const handleOnBannerBtnClick = () => {
  //   // console.log("button banner clicked");
  // };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Banner />
        {stores.length > 0 && (
          <>
            <div className={styles.sectionWrapper}>
              <div className={styles.cardLayout}>
                {stores.map((store: Store) => {
                  return <StoreCard key={store.fsq_id} store={store} />;
                })}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
