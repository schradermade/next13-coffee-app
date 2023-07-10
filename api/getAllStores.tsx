export default async function getAllStores() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) throw new Error("failed to get stores");
  return res.json();
}
