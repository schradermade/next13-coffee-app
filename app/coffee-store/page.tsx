import Link from "next/link";
import fetchAllStores from "@/api/fetchAllStores";

export default async function StoresPage() {
  const storeData: Promise<any> = fetchAllStores();
  console.log("ENVVARS!:", process.env.DB_URL);
  // const storesData: Promise<User[]> = getAllStores();
  // const [stores, setStores] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getAllStores();
  //     if (data) {
  //       setStores(data);
  //     }
  //   };

  //   fetchData();
  // });
  // console.log("THESTORES:", stores);

  return (
    <div>
      <section>
        <h2>
          <Link href="/">Back to Home</Link>
        </h2>
        <br />
        {/* {stores?.map((store: any) => {
          return (
            <>
              <p key={store.id}>
                <Link href={`/stores/${store.id}`}>{store.name}</Link>
              </p>
              <br />
            </>
          );
        })} */}
      </section>
    </div>
  );
}
