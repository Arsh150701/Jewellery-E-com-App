import React from "react";
import { ScrollView } from "react-native";
import MyCard from "./MyCard";

export default function HorizontalScrollView() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
    </ScrollView>
  );
}
