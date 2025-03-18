import {Stack} from "expo-router";
import {LinearGradient} from "expo-linear-gradient";
import {BackgroundArrows} from "@/icons";

export default function Layout() {
    return <Stack
        screenLayout={
            (props) => {
                return <LinearGradient
                    style={{flex: 1}}
                    colors={['#1B4232', '#257859']}
                    start={{x: 1, y: 0}}
                    end={{x: 0, y: 0}}
                >
                    <BackgroundArrows
                        style={{
                            position: 'absolute',
                            left: '50%',
                            top: 20,
                            transform: [{translateX: "-50%"}],
                        }}
                    />
                    {props.children}
                </LinearGradient>
            }}
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name='sign-in'/>
        <Stack.Screen name='sign-up'/>
        <Stack.Screen name='new-password'/>
        <Stack.Screen name='forget-password'/>
        <Stack.Screen name='verification-code'/>
    </Stack>
}


