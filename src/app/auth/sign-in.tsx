import {BottomSheetTextInput as TextInput, BottomSheetView} from "@gorhom/bottom-sheet";
import {View} from "react-native";
import {Text, Button, Icon, useTheme} from "react-native-paper";
import {Link} from "expo-router";
import BottomSheet from '@gorhom/bottom-sheet';
import {SafeAreaView} from "react-native-safe-area-context";
import {Google} from "@/icons";
import {AntDesign, FontAwesome} from "@expo/vector-icons";


export default function Page() {
    const {colors} = useTheme()
    return <SafeAreaView style={{flex: 1}}>
        <View style={{paddingHorizontal: 24, alignItems: 'center', gap: 32, paddingTop: 40}}>
            <Text style={{
                color: '#fff',
                fontWeight: '400',
                fontSize: 14,
                lineHeight: 20,
            }}>مرحباً بعودتك👋</Text>
            <Text
                style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 24,
                    lineHeight: 30,
                    textAlign: 'center'
                }}
            >تسجيل الدخول</Text>
            <Button style={{width: '100%', paddingVertical: 5}} icon={() => <Google width={25} height={25}/>}
                    contentStyle={{flexDirection: 'row-reverse'}}
                    textColor={'#000'}
                    mode={'elevated'}>{'تسجيل بواسطة جوجل'}</Button>
            <Button style={{width: '100%', paddingVertical: 5}} icon={() => <Icon source={'apple'} size={25}/>}
                    contentStyle={{flexDirection: 'row-reverse'}}
                    textColor={'#000'}
                    mode={'elevated'}>{'تسجيل بواسطة أبل'}</Button>
        </View>
        <BottomSheet handleIndicatorStyle={{backgroundColor: 'transparent'}} keyboardBlurBehavior={'restore'}>
            <BottomSheetView style={{gap: 40, paddingHorizontal: 24, paddingBottom: 40}}>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 4, justifyContent: 'center'}}>
                    <View style={{height: 1, flex: 1, backgroundColor: '#f7f7f8'}}/>
                    <Text>أو</Text>
                    <View style={{height: 1, flex: 1, backgroundColor: '#f7f7f8'}}/>
                </View>
                <View style={{gap: 4}}>
                    <Text style={{textAlign: 'right', paddingHorizontal: 16}}>البريد الكتروني</Text>
                    <View style={{
                        borderWidth: 1,
                        paddingVertical: 14,
                        borderColor: "#E7E6E9",
                        borderRadius: 100,
                        paddingHorizontal: 16,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
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
                <View style={{gap: 4}}>
                    <Text style={{textAlign: 'right', paddingHorizontal: 16}}>كلمة المرور</Text>
                    <View style={{
                        borderWidth: 1,
                        paddingVertical: 14,
                        borderColor: "#E7E6E9",
                        borderRadius: 100,
                        paddingHorizontal: 16,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <AntDesign name="eye" size={16} color="black"/>
                        <TextInput
                            style={{
                                direction: 'rtl',
                                textAlign: 'right',
                            }}
                            secureTextEntry
                            placeholder={'***********'}
                        />
                    </View>
                    <Link href={'/auth/forget-password'} style={{paddingHorizontal: 16, color: colors.primary}}>
                        نسيت كلمة المرور
                    </Link>
                </View>
                <Link href={'/auth/forget-password'} asChild>
                    <Button mode="contained" style={{marginTop: 40,}}
                            labelStyle={{paddingVertical: 8, borderRadius: 50}}>
                        تسجيل دخول
                    </Button>
                </Link>
                <View style={{
                    flexDirection: "row",
                    alignItems: 'center',
                    justifyContent: 'center',
                    direction: 'rtl',
                    gap: 4
                }}>
                    <Text>ليس لديك حساب؟ </Text>
                    <Link href={'/auth/sign-up'} style={{color: colors.primary}}>
                        انشاء حساب
                    </Link>
                </View>
            </BottomSheetView>
        </BottomSheet>
    </SafeAreaView>
}
