export default async function fetchAllStores() {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    next: {
      tags: ["stores"],
    },
  };

  const res = await fetch(process.env.DB_URL!, options);
  if (!res.ok) {
    throw new Error("Soemthing went wrong getting the data!");
  }
  const data = await res.json();
  return data;
}
