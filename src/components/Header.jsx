import React from "react";
import { View, Text, Image } from "react-native";
import * as Icon from "react-native-heroicons/outline";
const Header = () => (
  <View className="px-4 flex-row justify-between items-center">
    <Image
      source={require("../../assets/images/avatar.png")}
      className="h-10 w-10 bg-slate-400 rounded-full"
    />
    <View className="flex-row items-center space-x-2">
      <Icon.MapPinIcon className="w-8 h-8 text-slate-800" />
      <Text className="text-base font-semibold">Ciudad De México</Text>
    </View>
    <Icon.BellIcon className="w-8 h-8 text-slate-800" />
  </View>
);

export default Header;
