import React from "react";
import { ClipLoader } from "react-spinners";

const GlobalLoading = ({ isLoading }) => {
  return (
    <div
      style={{ width: "100%", minHeight: "10vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      <ClipLoader
        color={"grey"}
        loading={isLoading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default GlobalLoading;
