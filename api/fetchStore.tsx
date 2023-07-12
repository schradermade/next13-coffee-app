import { Store } from "@/types";

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
  return data;
}
