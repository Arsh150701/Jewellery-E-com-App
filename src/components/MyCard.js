import React from "react";
import { StyleSheet } from "react-native";
import { Button, Card, Paragraph, Title } from "react-native-paper";

export default function MyCard() {
  return (
    <Card style={styles.card}>
      <Card.Cover
        style={styles.image}
        source={{
          uri:
            "https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Shubh-Muhurat-Jewellery-Collection-01.jpg",
        }}
      />
      <Card.Content>
        <Title>Rs 9,999</Title>
        <Paragraph>Jewellery stuff</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button
          style={styles.button}
          onPress={() => console.log("Card was pressed")}
        >
          Add to Cart
        </Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 5,
    width: 160,
  },
  image: {
    height: 160,
    width: 160,
  },
  button: {
    textAlign: "center",
    width: "100%",
  },
});
