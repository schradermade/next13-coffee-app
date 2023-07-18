import { Store } from "@/types";

const getUrlForCoffeeStore = (fsq_id: string) => {
  return `https://api.foursquare.com/v3/places/${fsq_id}`;
};

export async function fetchStore(fsq_id: string): Promise<Store> {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      authorization: process.env.FOURSQUARE_API_KEY!,
    },
    next: {
      tags: ["stores"],
    },
  };

  const res = await fetch(getUrlForCoffeeStore(fsq_id), options);
  if (!res.ok) {
    throw new Error("FETCHSTORE: ERROR GETTING DATA");
  }
  const data = await res.json();
  console.log("STORE-DATA:", data.name);
  return data;
}
