import {BottomSheetTextInput as TextInput, BottomSheetView} from "@gorhom/bottom-sheet";
import {View} from "react-native";
import {Text, Button, useTheme} from "react-native-paper";
import {Link} from "expo-router";
import BottomSheet from '@gorhom/bottom-sheet';
import {SafeAreaView} from "react-native-safe-area-context";
import {AntDesign} from "@expo/vector-icons";


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
            >رمز التحقق</Text>
            <Text style={{
                color: '#fff',
                fontWeight: '400',
                fontSize: 14,
                lineHeight: 20,
            }}>قم بادخال الرمز المرسل الي بريدك الالكتروني</Text>
        </View>
        <BottomSheet handleIndicatorStyle={{backgroundColor: 'transparent'}}>
            <BottomSheetView style={{gap: 40, paddingHorizontal: 24, paddingBottom: 40}}>
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
                </View>
                <View style={{gap: 4}}>
                    <Text style={{textAlign: 'right', paddingHorizontal: 16}}>تاكيد كلمة المرور</Text>
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
                </View>
                <Link href={'/protected'} asChild>
                    <Button mode="contained"
                            style={{
                                marginTop: 40, borderRadius: 50
                            }}
                            labelStyle={{paddingVertical: 8}}
                    >
                        تاكيد
                    </Button>
                </Link>
            </BottomSheetView>
        </BottomSheet>
    </SafeAreaView>
}
