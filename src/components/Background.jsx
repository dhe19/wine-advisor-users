import React from "react";
import { Image } from "react-native";
const Background = ({ imagePath, opacity = "opacity-100" }) => (
  <Image
    source={imagePath}
    className={`w-full absolute -top-5 ${opacity}`}
    style={{ height: 220 }}
  />
);

export default Background;
