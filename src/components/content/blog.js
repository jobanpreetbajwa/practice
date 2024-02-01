import React, { Suspense, lazy, useState } from "react";
import ShimmerBlog from "../shimmer/shimmerBlog";
import "./mainContainer.css";

const Data = lazy(() => import("./Data"));

export default function Blog() {
  return (
    <Suspense fallback={<ShimmerBlog />}>
      <Data />
    </Suspense>
  );
}
