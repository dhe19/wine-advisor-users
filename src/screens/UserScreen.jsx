import { Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-heroicons/solid";
import Description from "../components/Description";
import image from "../../assets/images/bg-user.jpg";
import Background from "../components/Background";
import ProfileImage from "../components/ProfileImage";
const UserScreen = ({ route }) => {
  const [user, setUser] = useState({});
  const { id } = route.params;

  useEffect(() => {
    fetch("https://reqres.in/api/users/" + id)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.data);
      });
  }, []);

  return (
    <View className="flex-1 relative bg-slate-100">
      <StatusBar style="light" />
      <Background imagePath={image} />
      <SafeAreaView className=" flex-1">
        <View className="flex-1 items-center mt-28">
          <ProfileImage imageUri={user.avatar} />

          <Text className="text-4xl font-bold mt-3">
            {`${user.first_name} ${user.last_name}`}
          </Text>

          <Description
            title={`${user.email}`}
            Icon={Icon.AtSymbolIcon}
            color={"text-slate-600"}
            textStyle="text-sm italic text-slate-500"
          />
          <Description
            title={"Web Developer"}
            Icon={Icon.BriefcaseIcon}
            color={"text-amber-700"}
          />
          <Description
            title={"102k/year"}
            Icon={Icon.CurrencyDollarIcon}
            color={"text-green-500"}
          />
          <Description
            title={"México, CDMX"}
            Icon={Icon.MapPinIcon}
            color={"text-blue-500"}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default UserScreen;
