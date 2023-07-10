export default async function getAllStores() {
  const res = await fetch("http://localhost:4002/stores");
  // if (!res.ok) {
  //   throw new Error("Soemthing went wrong getting the data!");
  // }
  const data = await res.json();
  return data;
}
