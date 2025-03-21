import {Stack} from "expo-router";

export default function Layout() {
    return <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="(tabs)"/>
        <Stack.Screen name="opportunities"/>
        <Stack.Screen name="notification"/>
        <Stack.Screen name="settings"/>
        <Stack.Screen name="channel"/>
    </Stack>
}
