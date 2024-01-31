import React, { Suspense, lazy, useState } from "react";
import ShimmerBlog from "../shimmer/shimmerBlog";
import UseGetdata from "../utils/useGetdata";
import Cards from "../styling/cards";
import "./mainContainer.css";
import { ErrorBoundary } from "react-error-boundary";

const Data = lazy(() => import("./Data"));

export default function Blog() {
  return (
    <Suspense fallback={<ShimmerBlog />}>
      <Data />
    </Suspense>
  );
}
