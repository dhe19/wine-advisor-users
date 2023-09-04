import React from "react";
import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";
const CardList = ({ users, onPress }) => (
  <View className="mt-7 flex-1">
    <FlatList
      contentContainerStyle={{ paddingBottom: 20 }}
      data={users}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          className="mx-3 shadow-lg shadow-black/70 bg-white flex flex-row space-x-4 rounded-xl py-3 px-2 items-center mt-4"
          onPress={() => onPress("User", item.id)}
        >
          <Image
            source={{ uri: item.avatar }}
            className="w-12 h-12 rounded-full"
          />
          <View>
            <Text className="text-lg font-semibold text-slate-800">{`${item.first_name} ${item.last_name}`}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  </View>
);

export default CardList;
