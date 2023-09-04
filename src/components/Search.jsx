import { View, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import * as Icon from "react-native-heroicons/outline";

const user = [];

const filterByName = (name) => user.map();
const Search = () => (
  <View className="mx-5 mt-10">
    <View className="flex-row justify-center items-center rounded-full px-1 bg-slate-200">
      <TextInput
        placeholder="Buscar Usuario..."
        className="p-4 flex-1 font-semibold text-lg text-gray-700"
      />
      <TouchableOpacity className="rounded-full p-2 mr-2 bg-slate-400">
        <Icon.MagnifyingGlassIcon
          className="w-10 h-10 text-white"
          strokeWidth={2}
        />
      </TouchableOpacity>
    </View>
  </View>
);

export default Search;
