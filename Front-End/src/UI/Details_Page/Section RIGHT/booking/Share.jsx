import React from "react";

export default function Share({ DataDetails }) {
  return (
    <div className="flex justify-between mt-2 text-md font-semibold">
      <span>🔗 Share</span>
      <span>👁 {DataDetails.views} Views</span>
    </div>
  );
}
