import React from "react";
import { StyleSheet } from "react-native";
import { Card, Subheading } from "react-native-paper";

export default function RoundCard() {
  return (
    <Card style={styles.card}>
      <Card.Cover
        style={styles.image}
        source={{
          uri:
            "https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Shubh-Muhurat-Jewellery-Collection-01.jpg",
        }}
      />
      <Subheading style={styles.subheading}>Category</Subheading>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  image: {
    borderTopLeftRadius: 999,
    borderTopRightRadius: 999,
    borderRadius: 999,
    height: 70,
    width: 70,
  },
  subheading: {
    textAlign: "center",
  },
});
