import Link from "next/link";
import { getStore } from "@/lib/getStore";

const CoffeeStore = async ({ params, searchParams, error }: any) => {
  if (error) {
    throw new Error("Problem with the dynamic route!");
  }
  const storeId = params.storeid;

  const { id, name, imgUrl, websiteUrl, address, neighbourhood } =
    await getStore(storeId);

  console.log("LOG:", await getStore(storeId));

  return (
    <div>
      Coffee Store Page
      <Link href="/">Back to home</Link>
      <Link href="/coffee-store/dynamic"></Link>
      <div>{name}</div>
      <div>{neighbourhood}</div>
    </div>
  );
};

export default CoffeeStore;
