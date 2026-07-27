import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/src/components/haptic-tab";
import { IconSymbol } from "@/src/components/ui/icon-symbol";
import { Colors } from "@/src/constants/theme";
import { useColorScheme } from "@/src/hooks/use-color-scheme";

import { useLoadState } from "@/src/features/hooks";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  useLoadState();

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
