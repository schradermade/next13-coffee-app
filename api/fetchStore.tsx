export type Store = {
  id: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  votes: number;
  streetAddress: string;
  city: string;
  state: string;
};

export async function fetchStore(id: string): Promise<Store> {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    next: {
      tags: ["stores"],
    },
  };
  console.log("URL!:", `${process.env.DB_URL!}${id}`);
  const res = await fetch(`${process.env.DB_URL!}${id}`, options);
  if (!res.ok) {
    throw new Error("Soemthing went wrong getting the data!");
  }

  const data = await res.json();
  console.log("DATA!:", data);
  return data;
}
