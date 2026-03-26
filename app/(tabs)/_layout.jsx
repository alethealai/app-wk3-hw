import { Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#6200EE',
        tabBarInactiveTintColor: 'gray', // 確保未選中時是灰色，但看得見
        headerShown: false,
        tabBarShowLabel: true, 
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          borderTopWidth: 0,
          backgroundColor: '#ffffff',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home", // 顯式定義標籤文字
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarLabel: "Wishlist",
          tabBarIcon: ({ color }) => <Ionicons name="bookmark" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="mybooks"
        options={{
          tabBarLabel: "My books",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="book-open-variant" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="books/[id]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}