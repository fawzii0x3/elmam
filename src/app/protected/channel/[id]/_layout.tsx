import {Stack} from "expo-router";
import {LinearBackground} from "@/components";

export default function Layout() {
    return <Stack screenOptions={{headerShown: false,}} screenLayout={LinearBackground}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="[thid]"/>
    </Stack>
}
