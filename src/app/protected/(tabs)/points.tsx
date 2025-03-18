import { SafeAreaView } from "react-native-safe-area-context";
import { LinearBackground } from "@/components";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import type { PropsWithChildren } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BackgroundArrows } from "@/icons";
import { ScrollView } from "react-native-gesture-handler";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

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
        نقاطك
      </Text>
      <View
        style={{
          padding: 8,
          borderRadius: 24,
          width: "90%",
          alignSelf: "center",
          position: "absolute",
          zIndex: 2,
          top: 140,
          shadowColor: "gray",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderTopEndRadius: 24,
            borderTopLeftRadius: 24,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 16,
            gap: 8,
          }}
        >
          <View
            style={{
              backgroundColor: "#FFB703",
              padding: 2,
              borderRadius: 50,
            }}
          >
            <MaterialCommunityIcons
              name="crown-circle-outline"
              size={24}
              color="#F99300"
            />
          </View>
          <Text style={{ fontSize: 14, fontWeight: "600", color: "black" }}>
            نقاطك الحالية
          </Text>
          <Text
            style={{
              letterSpacing: 2,
              fontSize: 32,
              fontWeight: "900",
              color: "#21482A",
            }}
          >
            23424
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#21482A",
            height: 60,
            borderBottomEndRadius: 24,
            borderBottomLeftRadius: 24,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "85%",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                borderColor: "white",
                borderRadius: 32,
                borderWidth: 1,
                paddingHorizontal: 12,
                paddingVertical: 4,
                alignSelf: "center",
                backgroundColor: "white",
              }}
            >
              <Text
                style={{ fontSize: 12, fontWeight: "900", color: "#F39C12" }}
              >
                4.8
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
            >
              <Text style={{ fontSize: 16, fontWeight: "400", color: "white" }}>
                المستوى : خبير
              </Text>
              <View
                style={{
                  borderColor: "white",
                  borderRadius: 50,
                  padding: 4,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              >
                <MaterialCommunityIcons
                  name="crown-outline"
                  size={24}
                  color="white"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: "#F7f7f8", flex: 1 }}>
        <View style={{ height: 180 }} />
        <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
          <View
            style={{
              backgroundColor: "#F7f7f8",
              paddingVertical: 16,
              borderRadius: 16,
              width: "90%",
              alignSelf: "center",
            }}
          >
            {/* New Listings */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                marginBottom: 16,
                paddingHorizontal: 16,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "700", color: "black" }}>
                مزودي النقاط
              </Text>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </ScrollView>
          </View>
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
        borderColor: "gray",
        margin: 8,
        justifyContent: "flex-end",
      }}
    >
      <View
        style={{
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          backgroundColor: "white",
          flex: 1,
          borderColor: "#EBEBEF",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <View style={{ padding: 12, flex: 1 }}>
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
              قولدز جيم
            </Text>
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
                fontSize: 14,
                fontWeight: "400",
                color: "gray",
              }}
            >
              23/09/2024
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 56,
            width: 56,
            backgroundColor: "gray",
            borderRadius: 50,
            margin: 12,
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          padding: 12,
          backgroundColor: "#1F7B58",
          borderBottomStartRadius: 24,
          borderBottomEndRadius: 24,
        }}
        onPress={() => {}}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          <Ionicons name="chevron-back-outline" size={24} color="white" />
          <View
          
            style={{
              flexDirection: "row",
              gap: 8,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                color: "white",
              }}
            >
              150 نقطة = خصم 10٪
            </Text>

            <View
              style={{
                backgroundColor: "#FFB703",
                padding: 2,
                borderRadius: 50,
              }}
            >
              <MaterialCommunityIcons
                name="crown-circle-outline"
                size={24}
                color="#F99300"
              />
            </View>
        </View>
        </View>

      </TouchableOpacity>
    </View>
  );
}
