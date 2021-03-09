import React from "react";
import { ScrollView, View } from "react-native";
import { Avatar, Title } from "react-native-paper";
import MyAppbar from "../components/MyAppbar";

export default function ProfileScreen() {
  return (
    <>
      <MyAppbar screenName="My Account" />
      <ScrollView>
        <View
          style={{ alignItems: "center", paddingBottom: 10, paddingTop: 20 }}
        >
          <Avatar.Text label="KO" size={90} />
        </View>
        <Title style={{ textAlign: "center" }}>User's name</Title>
      </ScrollView>
    </>
  );
}
