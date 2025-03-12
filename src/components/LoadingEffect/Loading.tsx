import React from "react";
import SpinnerEffect from "../SpinnerEffect";

export default function Loading() {
  return (
    <div className="flex gap-x-4 m-auto">
      <SpinnerEffect></SpinnerEffect>
    </div>
  );
}
