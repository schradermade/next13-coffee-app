const getUrlForCoffeeStores = (
  latLong: string,
  query: string,
  limit: number
) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};

export default async function fetchAllStores() {
  console.log("AUTHSTRING!:", JSON.stringify(process.env.FOURSQUARE_API_KEY));
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
  return data.results;
}
