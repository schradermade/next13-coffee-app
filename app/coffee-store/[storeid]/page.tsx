"use client";

import { useParams } from "next/navigation";

const DynamicRoute = () => {
  const storeIdParam = useParams().storeid;
  return (
    <>
      <div>{storeIdParam}</div>
    </>
  );
};

export default DynamicRoute;
