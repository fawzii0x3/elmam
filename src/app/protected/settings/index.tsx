import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
import {Avatar, useTheme} from "react-native-paper";
import {faker, fakerAR} from '@faker-js/faker'
import {FlatList, ScrollView, Text, TouchableOpacity, View, ViewProps} from "react-native";
import {format} from 'date-fns'
import {AntDesign, Feather, FontAwesome, FontAwesome5} from "@expo/vector-icons";
import {Link, useRouter} from "expo-router";
import {PropsWithChildren} from "react";

export default function Page() {
    const {top, bottom} = useSafeAreaInsets()
    const {colors} = useTheme()
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
                }}>تفاصيل الفرصة</Text>
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
                <Card style={{alignItems: 'center',}}>
                    <Avatar.Image size={60} source={{uri: faker.image.avatar()}}/>
                    <View style={{alignItems: 'flex-end'}}>
                        <Text>{fakerAR.person.jobTitle()}</Text>
                        <Text style={{color: '#8A8AA3'}}>{fakerAR.person.jobDescriptor()}</Text>
                    </View>
                </Card>
                <Card>
                    <AntDesign name="user" size={24} color="black"/>
                    <View style={{alignItems: 'flex-end'}}>
                        <Text style={{color: '#8A8AA3'}}>المشرف</Text>
                        <Text>{fakerAR.person.fullName()}</Text>
                    </View>
                </Card>
                {/*    start and end dates */}
                <Card>
                    <View style={{flexDirection: 'row-reverse', gap: 17}}>
                        <AntDesign name="calendar" size={24} color="black"/>
                        <View style={{alignItems: 'flex-end'}}>
                            <Text style={{color: '#8A8AA3'}}>تاريخ البدأ</Text>
                            <Text>{format(faker.date.recent(), 'yyyy/MM/dd')}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row-reverse', gap: 17}}>
                        <AntDesign name="calendar" size={24} color="black"/>
                        <View style={{alignItems: 'flex-end'}}>
                            <Text style={{color: '#8A8AA3'}}>تاريخ الإنتهاء</Text>
                            <Text>{format(faker.date.recent(), 'yyyy/MM/dd')}</Text>
                        </View>
                    </View>
                </Card>
                {/*    location*/}
                <Card>
                    <Feather name="map-pin" size={24} color="black"/>
                    <View style={{alignItems: 'flex-end'}}>
                        <Text style={{color: '#8A8AA3'}}>المكان</Text>
                        <Text>{fakerAR.location.country()}</Text>
                    </View>
                </Card>
                {/*    hour of work and experience level*/}
                <Card>
                    <View style={{flexDirection: 'row-reverse', gap: 17}}>
                        <FontAwesome5 name="clock" size={24} color="black"/>
                        <View style={{alignItems: 'flex-end'}}>
                            <Text style={{color: '#8A8AA3'}}>ساعات العمل</Text>
                            <Text>{faker.number.int({min: 1, max: 12})}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row-reverse', gap: 17}}>
                        <FontAwesome5 name="user-tie" size={24} color="black"/>
                        <View style={{alignItems: 'flex-end'}}>
                            <Text style={{color: '#8A8AA3'}}>مستوى الخبرة</Text>
                            <Text>{faker.helpers.arrayElement(['مبتدئ', 'متوسط', 'محترف'])}</Text>
                        </View>
                    </View>
                </Card>
                {/*    you will get */}
                <Card style={{
                    borderColor: '#C8E5CF',
                    backgroundColor: '#EDF7EF',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text style={{color: '#000'}}>سوف تحصل على</Text>
                    <View style={{
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 50,
                        paddingVertical: 4,
                        paddingHorizontal: 8,
                        gap: 4,
                        backgroundColor: '#fff',
                    }}>
                        <FontAwesome5 name="coins" size={24} color="black"/>
                        <Text style={{color: '#000'}}>{faker.finance.amount()}</Text>
                    </View>
                </Card>
            </ScrollView>
        </SafeAreaView>
    )
}

function Card({style, ...props}: ViewProps) {
    return <View
        style={[{
            gap: 17,
            borderRadius: 16,
            borderWidth: 1,
            padding: 20,
            borderColor: '#EBEBEF',
            backgroundColor: '#fff',
            flexDirection: 'row-reverse',
        }, style]}
        {...props}

    />
}
