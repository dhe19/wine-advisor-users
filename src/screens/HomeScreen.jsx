import { View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Search from "../components/Search";
import Header from "../components/Header";
import CardList from "../components/CardList";
import image from "../../assets/images/texture.jpg";
import Background from "../components/Background";

const UserScreen = () => {
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    setUsers(
      fetch("https://reqres.in/api/users")
        .then((res) => res.json())
        .then((data) => setUsers(data.data))
    );

    return () => setUsers(null);
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e) => {
      // Prevent the user from going back if shouldPreventBack is true
      e.preventDefault();
    });

    return unsubscribe;
  }, []);

  const handleNavigation = (route, id) => navigation.navigate(route, { id });
  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />
      <Background imagePath={image} opacity="opacity-20" />
      <SafeAreaView className="flex-1 py-2">
        <Header />
        <Search />
        <CardList users={users} onPress={handleNavigation} />
      </SafeAreaView>
    </View>
  );
};

export default UserScreen;
