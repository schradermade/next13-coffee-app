import Link from "next/link";
import { getStore } from "@/lib/getStore";
import { StoreProps } from "@/lib/getStore";
import { Metadata } from "next";

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
  const { id, name, imgUrl, websiteUrl, address, neighbourhood }: StoreProps =
    await getStore(storeId);

  return (
    <div>
      <Link href="/">Back to home</Link>
      <div>{address}</div>
      <div>{name}</div>
      <div>{neighbourhood}</div>
    </div>
  );
};

export default CoffeeStore;
