import {BottomSheetTextInput as TextInput, BottomSheetView, useBottomSheetInternal} from "@gorhom/bottom-sheet";
import {View} from "react-native";
import {Text, Button, Icon, useTheme} from "react-native-paper";
import {Link} from "expo-router";
import {OtpInput} from "react-native-otp-entry";
import BottomSheet from '@gorhom/bottom-sheet';
import {SafeAreaView} from "react-native-safe-area-context";
import {useCallback} from "react";
import {runOnUI} from "react-native-reanimated";


export default function Page() {
    return <SafeAreaView style={{flex: 1}}>
        <View style={{paddingHorizontal: 24, alignItems: 'center', gap: 32, paddingTop: 40}}>
            <Text
                style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 24,
                    lineHeight: 30,
                    textAlign: 'center'
                }}
            >رمز التحقق</Text>
            <Text style={{
                color: '#fff',
                fontWeight: '400',
                fontSize: 14,
                lineHeight: 20,
            }}>قم بادخال الرمز المرسل الي بريدك الالكتروني</Text>
        </View>
        <BottomSheet handleIndicatorStyle={{backgroundColor: 'transparent'}}>
            <Content/>
        </BottomSheet>
    </SafeAreaView>
}


function Content() {
    const {shouldHandleKeyboardEvents} = useBottomSheetInternal();

    const handleOnFocus = useCallback(() => {
        runOnUI(() => {
            shouldHandleKeyboardEvents.value = true;
        })();
    }, [shouldHandleKeyboardEvents]);

    const handleOnBlur = useCallback(() => {
        runOnUI(() => {
            shouldHandleKeyboardEvents.value = false;
        })();
    }, [shouldHandleKeyboardEvents]);
    return <BottomSheetView style={{gap: 40, paddingHorizontal: 24, paddingBottom: 40}}>
        <View style={{paddingHorizontal: 50}}>
            <OtpInput onFocus={handleOnFocus} onBlur={handleOnBlur} autoFocus={false} numberOfDigits={4}/>
        </View>
        <Link href={'/auth/new-password'} asChild>
            <Button mode="contained" style={{paddingVertical: 8, borderRadius: 50}} icon={'arrow-left-thin'}>
                التالي
            </Button>
        </Link>
        <View style={{
            alignItems: 'center'
        }}>
            <Text>
                1:00
            </Text>
            <Text>
                لم يصلك الكود ؟ ارسال مره اخرى
            </Text>
        </View>
    </BottomSheetView>
}
