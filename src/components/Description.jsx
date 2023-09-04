import { Text, View } from "react-native";
import React, { Component } from "react";

const Description = ({
  title,
  Icon,
  color,
  textStyle = "text-lg text-base",
}) => (
  <View className="flex-row items-center mt-2 space-x-1">
    <Icon className={`w-6 h-6  ${color}`} />
    <Text className={textStyle}>{title}</Text>
  </View>
);

export default Description;
