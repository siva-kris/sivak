import React from "react";
import toast from "react-hot-toast";

export default function App() {
  return (
    <>
      <button className="btn bg-primary" onClick={() => toast.success("Done")}>
        Acid Button
      </button>
    </>
  );
}
