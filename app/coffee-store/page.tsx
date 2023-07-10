import Link from "next/link";
import { useEffect, useState } from "react";
import getAllStores from "@/api/getAllStores";

export default async function StoresPage() {
  const storeData: Promise<any> = getAllStores();
  console.log("STDATA:", storeData);
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

// const CoffeeStore = () => {
//   return (
//     <>
//       <div>Coffee store page</div>
//       <Link href="/">Back to home</Link>
//     </>
//   );
// };

// export default CoffeeStore;
