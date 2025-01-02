import { IKImage } from "imagekitio-react";
import React from "react";

const Image = ({ src, className, w, h, alt }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      className={className}
      lqip={{ active: true, quality: 20 }}
      loading="lazy"
      alt={alt}
      width={w}
      height={h}
      transformation={[{ width: w, height: h }]}
    />
  );
};

export default Image;
