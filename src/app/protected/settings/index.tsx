import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
import {Avatar, useTheme} from "react-native-paper";
import {faker, fakerAR} from '@faker-js/faker'
import {FlatList, ScrollView, Switch, Text, TouchableOpacity, View, ViewProps} from "react-native";
import {format} from 'date-fns'
import {AntDesign, Entypo, Feather, FontAwesome, FontAwesome5, SimpleLineIcons} from "@expo/vector-icons";
import {Link, useRouter} from "expo-router";
import React, {PropsWithChildren, useState} from "react";
import {PressableLine} from "@/components";

export default function Page() {
    const {top, bottom} = useSafeAreaInsets()
    const {colors} = useTheme()
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const {canGoBack, back} = useRouter()
    return (
        <SafeAreaView style={{flex: 1}} edges={['top']}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 24,
                paddingTop: 16,
                paddingBottom: top
            }}>
                <View style={{padding: 10 + 12 + 1}}/>
                <Text style={{
                    fontFamily: 'ar-bold',
                    fontSize: 18,
                    lineHeight: 30,
                    textAlign: 'center',
                    color: '#fff'
                }}>الإعدادات</Text>
                <TouchableOpacity
                    onPress={() => {
                        if (canGoBack()) {
                            back()
                        }
                    }}
                    style={{borderWidth: 1, borderColor: '#fff', borderRadius: "50%", padding: 10}}>
                    <Feather
                        name="chevron-right" size={24} color="#ffffff"/>
                </TouchableOpacity>
            </View>
            <ScrollView
                contentContainerStyle={{
                    backgroundColor: '#F7F7F8',
                    paddingHorizontal: 24,
                    paddingTop: 16,
                    gap: 16,
                    paddingBottom: bottom + 16,
                    flexGrow: 1,
                }}
            >
                <PressableLine
                    text="تغيير كلمة المرور"
                    Icon={<SimpleLineIcons name="lock" size={24} color="#55556D"/>}
                    href="/protected/settings"
                />
                <PressableLine
                    text="اللغة"
                    Icon={<SimpleLineIcons name="globe" size={24} color="#55556D"/>}
                    href="/protected/settings"
                    CustomComponent={<View style={{flexDirection: 'row-reverse', alignItems: 'center', gap: 8}}>
                        <Text>العربية</Text>
                        <Entypo name="chevron-thin-left" size={24} color="#6C8799"/>
                    </View>}
                />
                <PressableLine
                    text="الإشعارات"
                    Icon={<SimpleLineIcons name="bell" size={24} color="#55556D"/>}
                    href="/protected/settings"
                    CustomComponent={<Switch
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />}
                />
                <PressableLine
                    text="مشاركة التطبيق"
                    Icon={<SimpleLineIcons name="share" size={24} color="#55556D"/>}
                    href="/protected/settings"
                />
                <PressableLine
                    text="تقييم التطبيق"
                    Icon={<SimpleLineIcons name="star" size={24} color="#55556D"/>}
                    href="/protected/settings"
                />
            </ScrollView>
        </SafeAreaView>
    )
}
