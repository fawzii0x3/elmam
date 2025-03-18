import {Stack} from "expo-router";
import {LinearBackground} from "@/components";

export default function Layout() {
    return <Stack screenOptions={{headerShown: false,}} >
        <Stack.Screen name="[id]"/>
    </Stack>
}
