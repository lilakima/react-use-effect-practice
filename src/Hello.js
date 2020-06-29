import React, { useEffect } from "react";

export default function Hello() {
  useEffect(() => {
    console.log("render");

    // clean up function: clean up old stuffs
    return () => {
      console.log("unmount");
    };
  });
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
