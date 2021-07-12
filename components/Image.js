/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
export default function Image(props) {
  return (
    <div className="image">
      <img {...props} loading="lazy" />
    </div>
  );
}
