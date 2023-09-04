import { Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import avatar from "../../assets/images/avatar.png";
const SplashScreen = () => {
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);

  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(
      () => (ring1padding.value = withSpring(ring1padding.value + 5.5)),
      200
    );
    setTimeout(
      () => (ring2padding.value = withSpring(ring1padding.value + 55)),
      400
    );

    setTimeout(() => navigation.navigate("Home"), 2500);
  }, []);

  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-slate-500">
      <StatusBar style="light" />

      <Animated.View
        className="bg-white/20 rounded-full"
        style={{ padding: ring2padding }}
      >
        <Animated.View
          className="bg-white/20 rounded-full"
          style={{ padding: ring1padding }}
        >
          <Image source={avatar} style={{ width: 200, height: 200 }} />
        </Animated.View>
      </Animated.View>

      <View className="flex items-center space-y-1">
        <Text className="font-bold text-white tracking-widest text-5xl">
          WineAdvisor
        </Text>
        <Text className="font-bold text-white tracking-widest text-2xl">
          Users Lists
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;
