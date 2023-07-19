import { fetchStore } from "@/api/fetchStore";
import { Metadata } from "next";
import StorePage from "@/features/Store/StorePage";
import { Store } from "@/types";

type Props = {
  params: any;
  error: any;
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const storeId = params.id;
  // const data = await fetchStore(storeId);
  return {
    // title: data?.name,
    // description: "hello",
  };
}

const CoffeeStore = async ({ params, error }: any) => {
  if (error) {
    throw new Error("Problem with the dynamic route!");
  }
  const storeId: string = params.id;
  console.log("ID:", storeId);
  const data: Store = await fetchStore(storeId);
  console.log("STOERE!:", data);
  return (
    <>
      {" "}
      <StorePage store={data} />
    </>
  );
};

export default CoffeeStore;
