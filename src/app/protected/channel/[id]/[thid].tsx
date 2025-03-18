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
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 24,
                paddingTop: 16,
                paddingBottom: top
            }}>
                <Text style={{
                    fontFamily: 'ar-bold',
                    fontSize: 18,
                    lineHeight: 30,
                    textAlign: 'center',
                    color: '#fff'
                }}>المحادثات</Text>
            </View>
            <FlatList
                contentContainerStyle={{
                    backgroundColor: '#F7F7F8',
                    paddingHorizontal: 24,
                    paddingTop: 16,
                    gap: 16,
                    paddingBottom: bottom + 16,
                }}
                data={Array.from({length: 50}, () => ({
                    id: faker.string.uuid(),
                    displayName: fakerAR.person.fullName(),
                    avatar: faker.image.avatar(),
                    participantsCount: faker.number.int({min: 1, max: 100}),
                    messageCount: faker.helpers.maybe(() => faker.number.int({min: 1, max: 99})),
                }))}
                renderItem={({item}) => {
                    return (
                        <Link href={'/protected/settings'} asChild>
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row-reverse',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    backgroundColor: '#fff',
                                    borderRadius: 12,
                                    padding: 20,
                                    borderWidth: 1,
                                    borderColor: '#EBEBEF'
                                }}>
                                <View style={{flexDirection: 'row-reverse', alignItems: 'center', gap: 8}}>
                                    <Avatar.Image size={40} source={{uri: item.avatar}}/>
                                    <View style={{alignItems: 'flex-end'}}>
                                        <Text>{item.displayName}</Text>
                                        <Text style={{color: '#3F3F50'}}>{item.participantsCount} مشارك</Text>
                                    </View>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    {item.messageCount ? <Text style={{
                                        color: '#A9A9BC',
                                        fontSize:10
                                    }}>اليوم</Text> : null}
                                    <Text
                                        style={{
                                            backgroundColor: item.messageCount ? '#EC7063' : undefined,
                                            color: item.messageCount ? '#fff' : '#3F3F50',
                                            borderRadius: 65,
                                            width: 20,
                                            height: 20,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            textAlign: 'center'
                                        }}
                                    >{item.messageCount ? item.messageCount : '👋'}</Text>
                                </View>
                            </TouchableOpacity>
                        </Link>
                    )
                }}
            />

        </SafeAreaView>
    )
}
