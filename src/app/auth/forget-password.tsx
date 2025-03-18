import {BottomSheetTextInput as TextInput, BottomSheetView} from "@gorhom/bottom-sheet";
import {View} from "react-native";
import {Text, Button, useTheme} from "react-native-paper";
import {Link} from "expo-router";
import BottomSheet from '@gorhom/bottom-sheet';
import {SafeAreaView} from "react-native-safe-area-context";
import {FontAwesome} from "@expo/vector-icons";


export default function Page() {
    const {colors} = useTheme()
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
            >اعادة تعيين كلمة مرور</Text>
            <Text style={{
                color: '#fff',
                fontWeight: '400',
                fontSize: 14,
                lineHeight: 20,
            }}>قم بادخال البريد الالكتروني المرتبط بيه حسابك</Text>
        </View>
        <BottomSheet handleIndicatorStyle={{backgroundColor: 'transparent'}} keyboardBlurBehavior={'restore'}>
            <BottomSheetView style={{gap: 40, paddingHorizontal: 24, paddingBottom: 40}}>
                <View style={{gap: 4}}>
                    <Text style={{textAlign: 'right', paddingHorizontal: 16}}>البريد الكتروني</Text>
                    <View
                        style={{
                            borderWidth: 1,
                            paddingVertical: 14,
                            borderColor: "#E7E6E9",
                            borderRadius: 100,
                            paddingHorizontal: 16,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <FontAwesome name="envelope-o" size={16} color="black"/>
                        <TextInput
                            style={{
                                direction: 'rtl',
                                textAlign: 'right',
                            }}
                            placeholder={'ادخل بريدك الالكتروني'}
                        />
                    </View>
                </View>
                <Link href={'/auth/verification-code'} asChild>
                    <Button mode="contained" style={{marginTop: 40, borderRadius: 50}}
                            labelStyle={{paddingVertical: 8}}
                            icon={'arrow-left-thin'}>
                        التالي
                    </Button>
                </Link>
            </BottomSheetView>
        </BottomSheet>
    </SafeAreaView>
}
