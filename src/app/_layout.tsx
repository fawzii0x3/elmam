import {DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import {useEffect, useRef, useState} from 'react';
import LottieView from 'lottie-react-native';
import 'react-native-reanimated';
import {PaperProvider} from "react-native-paper";
import {theme} from "@/theme";
import {GestureHandlerRootView} from "react-native-gesture-handler";


export default function RootLayout() {
    const animation = useRef<LottieView>(null);
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });
    const [hide, setHide] = useState(true)
    useEffect(() => {
        const sub = setTimeout(() => setHide(false), 5000);
        return () => clearTimeout(sub);
    }, []);
    if (hide || !loaded) {
        return <LottieView
            style={{
                flex: 1,
                backgroundColor: '#fff',
                transform: [{translateX: 20}]
            }}
            autoPlay
            ref={animation}
            speed={0.6}
            loop={false}
            source={require('@/assets/lottie.json')}
        />
    }

    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <PaperProvider theme={theme}>
                <ThemeProvider value={DefaultTheme}>
                    <Stack>
                        <Stack.Screen name="(public)" options={{headerShown: false}}/>
                        <Stack.Screen name="auth" options={{headerShown: false}}/>
                        <Stack.Screen name="protected" options={{headerShown: false}}/>
                        <Stack.Screen name="+not-found"/>
                    </Stack>
                    <StatusBar style="auto" hidden/>
                </ThemeProvider>
            </PaperProvider>
        </GestureHandlerRootView>
    );
}
