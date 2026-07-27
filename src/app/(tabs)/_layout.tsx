import { Tabs } from "expo-router";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

import { HapticTab } from "@/src/components/haptic-tab";
import { IconSymbol } from "@/src/components/ui/icon-symbol";
import { Colors } from "@/src/constants/theme";
import { useColorScheme } from "@/src/hooks/use-color-scheme";

import { useLoadState } from "@/src/features/hooks";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { isLoading } = useLoadState();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator
          size="large"
          color={Colors[colorScheme ?? "light"].tint}
        />
        <Text
          style={{ marginTop: 10, color: Colors[colorScheme ?? "light"].tint }}
        >
          Loading...
        </Text>
      </View>
    );
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={25} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="regions"
        options={{
          title: "Regions",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={25} name="map.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
