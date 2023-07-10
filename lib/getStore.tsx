export type StoreProps = {
  id: string;
  name: string;
  imgUrl: string;
  websiteUrl: string;
  address: string;
  neighbourhood: string;
};

export async function getStore(param: {}): Promise<StoreProps> {
  const res = await fetch("http://localhost:4002/stores");
  // if (!res.ok) {
  //   throw new Error("Soemthing went wrong getting the data!");
  // }
  const data = await res.json();
  try {
    const store = data.find(
      (store: StoreProps) => store.id.toString() === param
    );
    return store;
  } catch (error) {
    throw new Error("oops");
  }
}
