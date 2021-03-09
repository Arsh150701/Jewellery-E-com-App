import React from "react";
import { ScrollView } from "react-native";
import { Divider } from "react-native-paper";
import CategoryCard from "./CategoryCard";

export default function Grid() {
  return (
    <ScrollView>
      <CategoryCard />
      <Divider />
      <CategoryCard />
      <Divider />
      <CategoryCard />
      <Divider />
      <CategoryCard />
      <Divider />
      <CategoryCard />
      <Divider />
      <CategoryCard />
      <Divider />
    </ScrollView>
  );
}
