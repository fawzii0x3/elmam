import {Stack} from "expo-router";
import {LinearBackground} from "@/components";

export default function Layout() {
    return <LinearBackground>
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index"/>
            <Stack.Screen name="[id]"/>
        </Stack>
    </LinearBackground>
}
