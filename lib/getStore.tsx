export async function getStore(param: any) {
  const res = await fetch("http://localhost:4002/stores");
  // if (!res.ok) {
  //   throw new Error("Soemthing went wrong getting the data!");
  // }
  const data = await res.json();
  return data.find((store: any) => store.id == param);

  // try {
  // } catch (error) {
  //   throw new Error("something went wrong!");
  // }
}
