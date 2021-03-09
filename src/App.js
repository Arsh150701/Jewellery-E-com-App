import React from "react";
import { View, StyleSheet } from "react-native";

import BottomNavbar from "./components/BottomNavbar";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <BottomNavbar />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#fffff0",
    flex: 1,
  },
});
