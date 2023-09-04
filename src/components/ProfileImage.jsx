import React from "react";
import { View, Image } from "react-native";
const ProfileImage = ({ imageUri }) => (
  <View className="bg-slate-400 rounded-full p-1 shadow-xl shadow-black">
    <Image source={{ uri: imageUri }} className=" w-24 h-24 rounded-full" />
  </View>
);

export default ProfileImage;
