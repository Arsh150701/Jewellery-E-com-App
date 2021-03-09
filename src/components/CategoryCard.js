import React from "react";
import { StyleSheet } from "react-native";
import { Caption, Card } from "react-native-paper";

export default function CategoryCard() {
  return (
    <Card>
      <Card.Title title="Category name" subtitle="short description" />
      <Card.Cover
        style={styles.image}
        source={{
          uri:
            "https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Shubh-Muhurat-Jewellery-Collection-01.jpg",
        }}
      />
      <Card.Content>
        <Caption>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
          laboriosam deserunt cupiditate repudiandae ad nostrum modi
        </Caption>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 130,
  },
});
