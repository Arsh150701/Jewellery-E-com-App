import React from "react";
import { Appbar } from "react-native-paper";

export default function MyAppbar({ screenName }) {
  return (
    <Appbar.Header>
      <Appbar.Content title={screenName} />
      <Appbar.Action
        icon="cart"
        onPress={() => {
          console.log("do nothing...for now!!!");
        }}
      />
    </Appbar.Header>
  );
}
