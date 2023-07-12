export default async function fetchAllStores() {
  // const options = {
  //   method: "GET",
  //   headers: {
  //     Accept: "application/json",
  //   },
  //   next: {
  //     tags: ["stores"],
  //   },
  // };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: process.env.PLACES_KEY!,
    },
  };

  const res = await fetch(
    `https://api.foursquare.com/v3/places/search?query=breakfast&ll=45.528974%2C-122.681000&limit=13`,
    options
  );

  // const res = await fetch(process.env.DB_URL!, options);
  if (!res.ok) {
    throw new Error("Soemthing went wrong getting the data!");
  }
  const data = await res.json();
  console.log("DATAAA:", data.results);
  return data.results;
}
