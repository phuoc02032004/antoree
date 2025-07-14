import React, { type CSSProperties } from "react";
import { PuffLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const Loading: React.FC = () => {
  return (
    <div className="sweet-loading text-center py-12">
      <PuffLoader
        color={"#4A90E2"}
        loading={true}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
