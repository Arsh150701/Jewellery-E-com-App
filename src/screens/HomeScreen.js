import React from "react";
import { ScrollView } from "react-native";
import { Title } from "react-native-paper";
import CategoriesScroll from "../components/CategoriesScroll";
import HorizontalScrollView from "../components/HorizontalScrollView";
import MyAppbar from "../components/MyAppbar";

export default function HomeScreen() {
  return (
    <>
      <MyAppbar screenName="Home" />
      <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
        <CategoriesScroll />
        <Title style={{ padding: 5, textAlign: "center" }}>
          Trending in 2021
        </Title>
        <HorizontalScrollView />
        <Title style={{ padding: 5, textAlign: "center" }}>
          Recently added
        </Title>
        <HorizontalScrollView />
      </ScrollView>
    </>
  );
}
