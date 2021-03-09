import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import RoundCard from "./RoundCard";

export default function CategoriesScroll() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <RoundCard />
      <RoundCard />
      <RoundCard />
      <RoundCard />
      <RoundCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
});
