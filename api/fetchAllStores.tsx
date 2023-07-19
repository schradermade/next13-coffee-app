import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!,
});

const getUrlForCoffeeStores = (
  latLong: string,
  query: string,
  limit: number
) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};

const getListOfCoffeeStorePhotos = async () => {
  const photos = await unsplash.search.getPhotos({
    query: "barber shop",
    page: 1,
    perPage: 10,
  });
  const unsplashResults = photos.response?.results;

  return unsplashResults?.map((result) => result.urls["small"]);
};

export default async function fetchAllStores() {
  const photos = await getListOfCoffeeStorePhotos();
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: process.env.FOURSQUARE_API_KEY!,
    },
  };

  const res = await fetch(
    getUrlForCoffeeStores("45.62970,-122.66680", "barber", 2),
    options
  );

  if (!res.ok) {
    throw new Error("FETCHALLSTORES: Soemthing went wrong getting the data!");
  }
  const data = await res.json();
  console.log("DATAAA:", data.results);
  return data.results.map((result: any, i: number) => {
    return {
      id: result.fsq_id,
      address: result.location.formatted_address,
      name: result.name,
      imgUrl: photos ? photos[i] : null,
    };
  });
}
