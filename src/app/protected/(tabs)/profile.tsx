import {SafeAreaView} from "react-native-safe-area-context";
import {ScrollView, TouchableOpacity, View} from "react-native";
import {Avatar, Text} from "react-native-paper";
import {faker, fakerAR} from "@faker-js/faker";
import {Entypo, FontAwesome, SimpleLineIcons} from "@expo/vector-icons";
import {Link, LinkProps} from "expo-router";
import React, {ReactElement} from "react";
import {PressableLine} from "@/components";

export default function Page() {
    return <SafeAreaView style={{flex: 1}} edges={['top']}>
        <View style={{flexDirection: 'row-reverse', alignItems: 'center', gap: 16, paddingHorizontal: 24}}>
            <Avatar.Image source={{uri: faker.image.avatar()}}/>
            <View style={{alignItems: 'flex-end'}}>
                <Text style={{color: '#fff'}}>{fakerAR.person.fullName()}</Text>
                <Text style={{color: '#89C796'}}>الملف الشخصي</Text>
            </View>
        </View>
        <ScrollView
            style={{paddingTop: 16}}
            contentContainerStyle={{
                backgroundColor: '#F7F7F8',
                paddingHorizontal: 24,
                paddingTop: 16,
                gap: 16,
                flexGrow: 1
            }}
        >
            <PressableLine
                text="الإعدادات"
                Icon={<SimpleLineIcons name="settings" size={24} color="#55556D"/>}
                href="/protected/settings"
            />
            <PressableLine
                text="فرص التطوع"
                Icon={<FontAwesome name="handshake-o" size={24} color="#55556D"/>}
                href="/"
            />
            <PressableLine
                text="تواصل معنا"
                Icon={<FontAwesome name="phone" size={24} color="#55556D"/>}
                href="/"
            />
            <PressableLine
                text="عن التطبيق"
                Icon={<FontAwesome name="info" size={24} color="#55556D"/>}
                href="/"
            />
            <PressableLine
                text="سياسة الخصوصية"
                Icon={<FontAwesome name="lock" size={24} color="#55556D"/>}
                href="/"
            />
            <PressableLine
                text="سياسة الإستخدام"
                Icon={<FontAwesome name="file-text-o" size={24} color="#55556D"/>}
                href="/"
            />
            <PressableLine
                text="تسجيل الخروج"
                Icon={<FontAwesome name="sign-out" size={24} color="red" style={{transform: [{rotateY: '180deg'}]}}/>}
                href="/"
                textColor={'red'}
            />
        </ScrollView>
    </SafeAreaView>
}

