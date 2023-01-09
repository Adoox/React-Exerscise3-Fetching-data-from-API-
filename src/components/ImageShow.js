import React from "react";

export const ImageShow = ({ image }) => {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.description}
        style={{ width: "500px", height: "300px" }}
      />
    </div>
  );
};
