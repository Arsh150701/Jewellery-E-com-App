import React from "react";
import { BottomNavigation } from "react-native-paper";
import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ProfileScreen from "../screens/ProfileScreen";

export default function BottomNavbar() {
  const HomeRoute = () => <HomeScreen />;
  const CategoryRoute = () => <CategoryScreen />;
  const ProfileRoute = () => <ProfileScreen />;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "category", title: "Categories", icon: "grid" },
    { key: "profile", title: "My Account", icon: "account" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    category: CategoryRoute,
    profile: ProfileRoute,
  });
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
