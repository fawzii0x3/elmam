import { SafeAreaView } from "react-native-safe-area-context";
import { LinearBackground } from "@/components";
import React from "react";
import { View, Text } from "react-native";
import type { PropsWithChildren } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BackgroundArrows } from "@/icons";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Page() {
  return (
    <LinearBackgrounds>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "900",
          color: "white",
          paddingVertical: 72,
          alignSelf: "center",
        }}
      >
        الدورات
      </Text>
      <View style={{ backgroundColor: "#f7f7f8", paddingTop: 8 }}>
        <ScrollView style={{ top: -60, padding: 8 }}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
    </LinearBackgrounds>
  );
}
function LinearBackgrounds({ children }: PropsWithChildren) {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={["#1B4232", "#257859"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
    >
      {children}
    </LinearGradient>
  );
}

function Card() {
  return (
    <View
      style={{
        borderRadius: 24,
        backgroundColor: "white",
        borderWidth: 0.5,
        borderColor: "EBEBEF",
        margin: 8,
        flexDirection: "row",
        justifyContent:'flex-end'
      }}
    >
      <View style={{ padding: 12 ,justifyContent: "flex-end",flex:1, alignItems: "flex-end"}}>
        <Text style={{ fontSize: 20, fontWeight: "900", color: "#21482A",paddingBottom:8 }}>
          ادارة المخاطر
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 8,

          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              color: "#3F3F50",
            }}
          >
            مستوى متقدم
          </Text>
          <MaterialCommunityIcons
                    name="crown-outline"
                    size={24}
                    color="green"
                  />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 8,

          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              color: "#3F3F50",
            }}
          >90  دقيقة</Text>
          <MaterialCommunityIcons
            name="timer-outline"
            size={24}
            color="green"
          />
        </View>
      </View>
      <View
        style={{
          height: 100,
          width: 120,
          backgroundColor: "gray",
          borderRadius: 12,
          margin: 12,
        }}
      />
    </View>
  );
}
