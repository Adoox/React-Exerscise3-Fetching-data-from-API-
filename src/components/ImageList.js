import React from "react";
import { ImageShow } from "./ImageShow";

export const ImageList = ({ images }) => {
  return (
    <div>
      {images.map((item) => {
        return <ImageShow image={item} key={item.id} />;
      })}
    </div>
  );
};
