import { Store } from "@/types";
import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!,
});

const getUrlForCoffeeStore = (fsq_id: string) => {
  return `https://api.foursquare.com/v3/places/${fsq_id}`;
};

const getCoffeeStorePhoto = async () => {
  const photo = await unsplash.search.getPhotos({
    query: "barber shop",
    page: 1,
    perPage: 1,
  });
  const unsplashResults = photo.response?.results;

  return unsplashResults?.map((result) => result.urls["small"]);
};

export async function fetchStore(fsq_id: string): Promise<Store> {
  const photo = await getCoffeeStorePhoto();

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
  console.log("STORE-DATA:", data);
  return {
    ...data,
    id: data.fsq_id,
    address: data.location.formatted_address,
    name: data.name,
    imgUrl: photo ? photo[0] : null,
  };
}
