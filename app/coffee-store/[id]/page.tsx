import { getStore } from "@/lib/getStore";
import { Store } from "@/lib/getStore";
import { Metadata } from "next";
import StorePage from "@/features/Store/StorePage";

import { revalidateTag } from "next/cache";

type Props = {
  params: { id: string };
  error: Error;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let data;
  try {
    data = await getStore(params.id);
  } catch (error) {}
  return {
    title: data?.name,
    // description: "hello",
  };
}

const CoffeeStore: React.FC<Props> = async ({ params, error }) => {
  if (error) {
    throw new Error("Problem with the dynamic route!");
  }
  const storeId: string = params.id;
  const store: Store = await getStore(storeId);

  return (
    <>
      <StorePage store={store} />
    </>
  );
};

export default CoffeeStore;
