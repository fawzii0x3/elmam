import {BottomSheetTextInput as TextInput, BottomSheetView} from "@gorhom/bottom-sheet";
import {Text, View} from "react-native";
import {Button, useTheme} from "react-native-paper";
import {Link} from "expo-router";
import BottomSheet from '@gorhom/bottom-sheet';
import {SafeAreaView} from "react-native-safe-area-context";


export default function Page() {
    const {colors} = useTheme()
    return <SafeAreaView style={{flex: 1}}>
        <View style={{alignItems:'center'}}>
            <Text>اعادة تعيين كلمة مرور</Text>
            <Text>قم بادخال البريد الالكتروني المرتبط بيه حسابك</Text>
        </View>
        <BottomSheet handleIndicatorStyle={{backgroundColor: 'transparent'}}>
            <BottomSheetView style={{gap: 20, paddingHorizontal: 24, paddingBottom: 40}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{height: 1, flex: 1, backgroundColor: '#f7f7f8'}}/>
                    <Text>أو</Text>
                    <View style={{height: 1, flex: 1, backgroundColor: '#f7f7f8'}}/>
                </View>
                <View style={{gap: 4}}>
                    <Text style={{textAlign: 'right', paddingHorizontal: 16}}>البريد الكتروني</Text>
                    <TextInput
                        style={{
                            direction: 'rtl',
                            textAlign: 'right',
                            borderWidth: 1,
                            paddingVertical: 14,
                            borderColor: "#E7E6E9",
                            borderRadius: 100,
                            paddingHorizontal: 16
                        }}
                        placeholder={'ادخل بريدك الالكتروني'}
                    />
                </View>
                <View style={{gap: 4}}>
                    <Text style={{textAlign: 'right', paddingHorizontal: 16}}>البريد الكتروني</Text>
                    <TextInput
                        style={{
                            direction: 'rtl',
                            textAlign: 'right',
                            borderWidth: 1,
                            paddingVertical: 14,
                            borderColor: "#E7E6E9",
                            borderRadius: 100,
                            paddingHorizontal: 16
                        }}
                        secureTextEntry
                        placeholder={'***********'}
                    />
                    <Link href={'/'} style={{paddingHorizontal: 16, color: colors.primary}}>
                        نسيت كلمة المرور
                    </Link>
                </View>
                <Button mode="contained" style={{paddingVertical: 8}}>
                    تسجيل دخول
                </Button>
                <View style={{
                    flexDirection: "row",
                    alignItems: 'center',
                    justifyContent: 'center',
                    direction: 'rtl',
                    gap: 4
                }}>
                    <Text>ليس لديك حساب؟ </Text>
                    <Link href={'/'} style={{color: colors.primary}}>
                        انشاء حساب
                    </Link>
                </View>
            </BottomSheetView>
        </BottomSheet>
    </SafeAreaView>

}
